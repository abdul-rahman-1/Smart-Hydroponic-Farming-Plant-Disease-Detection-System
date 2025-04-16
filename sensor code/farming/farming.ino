#include <WiFi.h>
#include <DHT.h>
#include "MHZ19.h"

// Wi-Fi Credentials
const char* ssid1 = "OpOPOPOP";
const char* password1 = "qambar0207";
const char* ssid = "ROBOTIC_P";
const char* password = "7518888786";
const char* ssid2 = "Root12";
const char* password2 = "12345678";

#define DHT_PIN 14
#define DHT_TYPE DHT11
#define RX_PIN 33 // MH-Z19 Tx pin
#define TX_PIN 32 // MH-Z19 Rx pin
#define BAUDRATE 9600 // MH-Z19 baud rate

DHT dht(DHT_PIN, DHT_TYPE);
MHZ19 myMHZ19;
HardwareSerial mySerial(1);

WiFiServer server(80); // Create an HTTP server on port 80

void setup() {
  Serial.begin(115200); // Initialize Serial for USB communication
  dht.begin();

  // Initialize MH-Z19 sensor
  mySerial.begin(BAUDRATE, SERIAL_8N1, RX_PIN, TX_PIN);
  myMHZ19.begin(mySerial);
  myMHZ19.autoCalibration();

  // Connect to Wi-Fi
  WiFi.begin(ssid2, password2);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000); // Wait until connected
  }

  // Display the ESP32 IP on Serial Monitor
  Serial.print("Connected to Wi-Fi. ESP32 IP Address: ");
  Serial.println(WiFi.localIP());

  // Start the server
  server.begin();
}

void loop() {
  // Check for client connection
  WiFiClient client = server.available();
  if (client) {
    while (client.connected()) {
      if (client.available()) {
        String request = client.readStringUntil('\r'); // Read the client's request
        client.flush();

        if (request.indexOf("GET /") >= 0) {
          // Read sensor data
          float temperature = readDHTTemperature();
          float humidity = readDHTHumidity();
          int CO2 = readCO2();

          // Create JSON response
          String jsonResponse = String("{\"Temperature\": ") + temperature +
                                ", \"Humidity\": " + humidity +
                                ", \"CO2\": " + CO2 + "}";

          // Send HTTP response
          client.println("HTTP/1.1 200 OK");
          client.println("Content-Type: application/json");
          client.println("Connection: close");
          client.println();
          client.println(jsonResponse);
        }
        break;
      }
    }
    client.stop(); // Close the connection
  }
}

float readDHTTemperature() {
  float t = dht.readTemperature();
  return isnan(t) ? -1 : t;
}

float readDHTHumidity() {
  float h = dht.readHumidity();
  return isnan(h) ? -1 : h;
}

int readCO2() {
  int CO2 = myMHZ19.getCO2();
  return CO2 <= 0 ? -1 : CO2;
}
