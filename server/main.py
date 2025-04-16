from flask import Flask
from pymongo import MongoClient
import json
import requests
import time
from threading import Thread

app = Flask(__name__)

# MongoDB connection string
MONGO_URI = "mongodb+srv://AdminClint0001:uTYZ4fPph7whTpXC@cluster0.eifjnhd.mongodb.net/"
client = MongoClient(MONGO_URI)
db = client['Sensor']
collection = db['Data']

# ESP32 URL
ESP32_URL = "http://172.25.60.213/"
RETRY_DELAY = 1  # Retry interval in seconds

def update_data():
    """Fetch sensor data and update MongoDB."""
    sensor_status = "Offline"

    while True:
        try:
            # Fetch data from the ESP32
            response = requests.get(ESP32_URL, timeout=5)
            
            if response.status_code == 200:
                line = response.text.strip()  # Get the JSON response as a string
                try:
                    json_data = json.loads(line)

                    # Handle sensor offline scenario
                    if (
                        json_data["Temperature"] == -1 or 
                        json_data["Humidity"] == -1 or 
                        json_data["CO2"] == -1 or 
                        json_data["FlowRate"] == -1
                    ):
                        if sensor_status != "Offline":
                            collection.update_one({}, {"$set": {"Sensor": "Offline"}}, upsert=True)
                            sensor_status = "Offline"
                    else:
                        # Handle sensor online scenario
                        if sensor_status != "Online":
                            collection.update_one({}, {"$set": {"Sensor": "Online"}}, upsert=True)
                            sensor_status = "Online"

                        # Fetch the existing document
                        current_data = collection.find_one({})

                        # Check if the document exists before proceeding
                        if current_data:
                            # Calculate new averages
                            new_avg_temp = (float(current_data['Avg_Temp'].split(',')[0].split(':')[0]) + json_data['Temperature']) / 2
                            new_avg_humid = (float(current_data['Avg_Humid'].split(',')[0].split(':')[0]) + json_data['Humidity']) / 2
                            new_avg_co2 = (float(current_data['Avg_CO2'].split(',')[0].split(':')[0]) + json_data['CO2']) / 2
                            new_avg_water = (float(current_data['Avg_FlowRate'].split(',')[0].split(':')[0]) + json_data['FlowRate']) / 2

                            # Get the current date and three-letter month abbreviation
                            date_with_month = time.strftime("%d/%b")

                            # Format the new averages
                            new_avg_temp_str = f"{new_avg_temp:.1f}:{date_with_month}"
                            new_avg_humid_str = f"{new_avg_humid:.1f}:{date_with_month}"
                            new_avg_co2_str = f"{new_avg_co2:.1f}:{date_with_month}"
                            new_avg_water_str = f"{new_avg_water:.1f}:{date_with_month}"

                            # Check if the date has changed
                            if current_data['LastUpdate']['Date'] != time.strftime("%d/%m"):
                                # Shift daily arrays
                                avg_temp_list = [new_avg_temp_str] + current_data['Avg_Temp'].split(',')[:6]
                                avg_humid_list = [new_avg_humid_str] + current_data['Avg_Humid'].split(',')[:6]
                                avg_co2_list = [new_avg_co2_str] + current_data['Avg_CO2'].split(',')[:6]
                                avg_water_list = [new_avg_water_str] + current_data['Avg_FlowRate'].split(',')[:6]
                            else:
                                # Update only the first element
                                avg_temp_list = [new_avg_temp_str] + current_data['Avg_Temp'].split(',')[1:]
                                avg_humid_list = [new_avg_humid_str] + current_data['Avg_Humid'].split(',')[1:]
                                avg_co2_list = [new_avg_co2_str] + current_data['Avg_CO2'].split(',')[1:]
                                avg_water_list = [new_avg_water_str] + current_data['Avg_FlowRate'].split(',')[1:]

                            # Prepare the new data
                            new_data = {
                                "Temperature": json_data["Temperature"],
                                "Humidity": json_data["Humidity"],
                                "CO2": json_data["CO2"],
                                "FlowRate": json_data["FlowRate"],
                                "LastUpdate": {
                                    "Time": time.strftime("%H:%M"),
                                    "Date": time.strftime("%d/%m"),
                                },
                                "Avg_Temp": ','.join(avg_temp_list),
                                "Avg_Humid": ','.join(avg_humid_list),
                                "Avg_CO2": ','.join(avg_co2_list),
                                "Avg_FlowRate": ','.join(avg_water_list),
                            }

                            # Update the document in MongoDB
                            collection.update_one({}, {"$set": new_data})
                            print(
                                f"UPDATED: Temperature={json_data['Temperature']}, "
                                f"Humidity={json_data['Humidity']}, "
                                f"CO2={json_data['CO2']}, "
                                f"FlowRate={json_data['FlowRate']}"
                            )
                        else:
                            print("No existing document found in the database. Skipping update.")

                except json.JSONDecodeError:
                    print(f"Invalid data received: {line}")
            else:
                if sensor_status != "Offline":
                    collection.update_one({}, {"$set": {"Sensor": "Offline"}}, upsert=True)
                    print("Failed to fetch valid data. Sensor marked as Offline.")
                    sensor_status = "Offline"

        except requests.RequestException as e:
            print(f"ESP32 Offline ; Network ERROR")
            if sensor_status != "Offline":
                collection.update_one({}, {"$set": {"Sensor": "Offline"}}, upsert=True)
                sensor_status = "Offline"

        except Exception as e:
            print(f"ESP32 Offline ; Unexpected ERROR: {e}")

        time.sleep(RETRY_DELAY)

# Start the thread to update the data
update_thread = Thread(target=update_data)
update_thread.start()

@app.route("/")
def home():
    return "Farming Data Server is Running"

if __name__ == "__main__":
    # Change to allow external access
    app.run(host="0.0.0.0", port=5000)
