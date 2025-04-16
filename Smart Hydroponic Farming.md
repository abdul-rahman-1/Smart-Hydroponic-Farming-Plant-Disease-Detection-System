**Smart Hydroponic Farming & Plant Disease Detection System**

**Overview**

This project implements an advanced IoT-based smart system for hydroponic farming that integrates multiple sensors and real-time data analytics to optimize plant growth and resource usage in controlled environments. In addition, the system incorporates an AI-driven module for early detection of plant diseases using advanced computer vision techniques.

**Table of Contents**

- [Overview](#overview)
- [Features](#features)
- [System Architecture](#system-architecture)
- [My Role in the Project](#my-role-in-the-project)
- [Technologies & Tools](#technologies--tools)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

  **Features**

- **Real-Time Monitoring:**
  Continuous tracking of environmental conditions such as temperature, humidity, CO₂ levels, water flow, light intensity, pH, and mineral content.
- **Sensor Integration:**
  Utilizes ESP32 microcontrollers and a Raspberry Pi 5 to collect and process data from various sensors.
- **Automated Data Logging:**
  Python scripts automatically fetch, process, and store sensor data in a MongoDB database for historical analysis.
- **API & Web Integration:**
  An API server deployed on Railway.app exposes sensor data endpoints, and a responsive web application (hosted on Netlify at [rk-iot.netlify.app](https://rk-iot.netlify.app)) provides real-time visualization and remote monitoring capabilities.
- **AI-Driven Disease Detection:**
  Collaborative integration of an AI module using Google Coral TPU accelerates plant disease detection by applying deep learning and computer vision techniques to monitor plant health.

  **System Architecture**

  The system is composed of three primary components:

- **Sensor Nodes:**
  Connected to an ESP32 microcontroller for gathering environmental data.
- **Central Processing Unit:**
  A Raspberry Pi 5 runs Python scripts for data processing and machine learning integration.
- **User Interface & API:**
  A backend API built with Node.js/Express.js and a frontend web application developed in React.js, enabling remote monitoring and control.

  **My Role in the Project**

  I played a key role in the development and integration of the smart hydroponic farming system, including:

- **Sensor Integration & Data Acquisition:**
  - Integrated multiple environmental sensors (temperature, CO₂, humidity, water flow, light intensity, mineral content, and pH).
  - Utilized ESP32 microcontrollers to collect sensor data and transmit it in JSON format.
- **Data Processing & Storage:**
  - Developed Python scripts on a Raspberry Pi 5 to fetch and process sensor data.
  - Automated updates to a MongoDB database for efficient data logging and historical tracking.
- **API & Web Integration:**
  - Developed an API server, deployed on Railway.app, to expose sensor data endpoints.
  - Built a responsive website ([rk-iot.netlify.app](https://rk-iot.netlify.app)) for real-time sensor data visualization, aiding in remote monitoring and decision-making.
- **Collaborative AI-Driven Disease Detection:**
  - Contributed to the development of an AI module using Google Coral TPU to accelerate plant disease detection.
  - Integrated advanced computer vision techniques to monitor and assess plant health.
- **Impact:**
  - Enhanced crop monitoring and improved resource efficiency.
  - Pioneered the integration of AI in agriculture, allowing for early detection and mitigation of plant diseases.

    **Technologies & Tools**

- **Hardware:**
  - ESP32 Microcontrollers
  - Raspberry Pi 5 (8GB Starter Kit)
  - Google Coral TPU
  - Various sensors (temperature, CO₂, humidity, water flow, light intensity, pH, etc.)
- **Software:**
  - **Backend:** Node.js with Express.js
  - **Frontend:** React.js
  - **Database:** MongoDB
  - **Data Processing & ML:** Python (with libraries such as pandas and scikit-learn)
  - **Deployment:** API on Railway.app and web application on Netlify

    **Project Structure**

    plaintext

    CopyEdit

    /

    ├── docs/                # Documentation and project reports

    ├── hardware/            # Hardware schematics and setup guides

    ├── src/

    │   ├── backend/         # Node.js API server code

    │   ├── frontend/        # React.js web application code

    │   └── scripts/         # Python scripts for data processing and ML integration

    ├── tests/               # Unit and integration tests

    ├── .gitignore           # Git ignore file

    └── README.md            # This file

    **Getting Started**

1. **Clone the Repository:**

   bash

   CopyEdit

   git clone https://github.com/yourusername/your-repo-name.git

   cd your-repo-name

1. **Set Up the Backend:**
   1. Navigate to the src/backend directory.
   1. Install dependencies using npm install.
   1. Configure environment variables as required.
   1. Start the server with npm start.
1. **Set Up the Frontend:**
   1. Navigate to the src/frontend directory.
   1. Install dependencies using npm install.
   1. Run the development server with npm start.
1. **Set Up the Data Processing Scripts:**
   1. Ensure Python 3.x is installed.
   1. Install necessary Python libraries using pip install -r requirements.txt.
   1. Run the Python scripts as per your data processing needs.

      **Usage**

- **Real-Time Monitoring:**
  Access the web application at [rk-iot.netlify.app](https://rk-iot.netlify.app) to view live sensor data and monitor system performance.
- **API Endpoints:**
  Use the API endpoints provided by the backend server to query sensor data or integrate with other applications.
- **Machine Learning Integration:**
  The Python scripts can be configured to periodically analyze data and trigger alerts if plant disease is detected.

  **Contributing**

  Contributions are welcome! If you have suggestions or improvements:

1. Fork the repository.
1. Create a new branch (git checkout -b feature/YourFeature).
1. Commit your changes and push to your branch.
1. Open a pull request detailing your changes.

   **License**

   This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

   **Contact**

   For any queries or feedback, please reach out via email@example.com.

