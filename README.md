# Smart Hydroponic Farming & Plant Disease Detection System

## Supervisor
**Dr. Sheeba Praveen**

---

## 1. Introduction

### 1.1 Background
Hydroponic farming, a soilless method of growing plants, is gaining popularity due to its sustainability and efficiency. However, maintaining optimal conditions for plant growth requires continuous monitoring and precise control of various environmental factors, such as nutrient levels, pH, and temperature. The integration of IoT technology in hydroponic farming allows for real-time monitoring and automation, significantly enhancing crop yield and reducing manual labor.

### 1.2 Motivation
This project leverages IoT and machine learning to tackle the inefficiencies of traditional hydroponic farming by automating monitoring and control processes. Existing systems often lack real-time data analysis and user-friendly interfaces, leading to water waste and suboptimal growing conditions. By developing an advanced IoT-enabled solution, this project aims to enhance resource management, optimize crop yield, and promote sustainable practices in agriculture, ultimately contributing to green technology advancements.

---

## 2. Problem Statement

### 2.1 Description of the Problem
Hydroponic farmers face challenges in maintaining consistent nutrient levels, pH balance, and environmental conditions, which are critical for plant growth. Manual monitoring is time-consuming and prone to errors, leading to suboptimal conditions and reduced crop yield. Current solutions are either too complex or lack the necessary automation and real-time data processing capabilities.

---

## 3. Objectives

### 3.1 Primary Objectives
- **Real-Time Monitoring:** Develop an IoT-enabled system for real-time monitoring of critical hydroponic parameters (e.g., nutrient levels, pH, temperature) to ensure crops receive the right amount of water and nutrients at the right time.
- **Automated Control:** Implement automated control mechanisms that utilize collected data to maintain optimal growing conditions, thereby reducing water waste and enhancing resource efficiency.
- **Web Application:** Create a user-friendly web application for remote monitoring and control, enabling farmers to manage their systems effectively and increase profitability.

### 3.2 Secondary Objectives
- **Predictive Analytics:** Integrate machine learning algorithms for predictive analytics to optimize resource usage, improve crop yields, and minimize operational costs.
- **Scalability:** Ensure scalability and adaptability of the system to accommodate various hydroponic setups, making it a cost-effective solution for diverse farming environments.

---

## 4. Scope of the Project

This project focuses on developing an IoT-based system for monitoring and automation in hydroponic farming. It will cover both hardware (sensors, microcontrollers) and software components (backend server, web application). A Raspberry Pi 5 will be utilized to integrate machine learning modules for daily image monitoring of plant health using deep learning techniques. The system will be tested in a controlled hydroponic environment, emphasizing scalability and adaptability while ensuring efficient water management and optimal growing conditions.

---

## 5. Methodology

### 5.1 Description
The project follows an iterative development process:
- **Phase 0 (Research and Development):** Conduct extensive research and engage with academic experts to refine project objectives and best practices.
- **Phase 1 (Requirement Analysis and System Design):** Detailed planning of system architecture, including the selection of appropriate hardware components and software stack.
- **Phase 2 (Development and Integration):** Set up and code both hardware (Arduino, Raspberry Pi) and software (backend with Node.js/Express.js, frontend with React.js) components, ensuring seamless integration.
- **Phase 3 (Testing and Deployment):** Perform unit and integration testing to validate individual components and the overall system. Deploy the system in a controlled environment for performance evaluation and adjustments.

---

## 6. System Design

### 6.1 Architecture
The system architecture consists of three main components:
- **Sensor Nodes:** For data collection.
- **Central Server:** For data processing and control.
- **Web-Based Interface:** For user interaction.

Sensor nodes are connected to an Arduino microcontroller, which transmits data via a Wi-Fi module to the central server. The server processes the data and sends control signals back to the hydroponic system.

### 6.2 Components

#### 6.2.1 Hardware Components
- Hydroponic System Kit
- Water Pump
- Power Supply
- Raspberry Pi 5 (8GB Starter Kit)
- Raspberry Pi Camera & Cable
- Relays and Relay Module
- pH Sensor
- Conductivity Sensor
- TDS Sensor
- Temperature & Humidity Sensor
- Light Intensity Sensor
- CO₂ Sensor
- Water Flow Sensor
- Level Sensor
- Mouse, Breadboard, Jumper Wires (Male-Male & Male-Female)
- PiBOX India Micro HDMI Cable to HDMI Cable (4K 60Hz, 1.5 Meter)
- Raspberry Pi 5 Case
- ESP32 (38-Pin Development Board with Wi-Fi and Bluetooth)

#### 6.2.2 Software Components
- **Backend:** Node.js with Express.js
- **Frontend:** React.js
- **Database:** MongoDB
- **Machine Learning & Data Analysis:** Python (pandas, scikit-learn)
- **Operating System:** Raspberry Pi OS
- **Deployment:** Hosted on Netlify

---

## 7. Development Process

### 7.1 Technology Stack
- **Programming Languages:** JavaScript (Node.js, React.js) and Python
- **Frameworks:** Express.js (Backend) and React.js (Frontend)
- **Tools:** Arduino IDE, Socket.io (Real-time Communication), Chart.js (Data Visualization), scikit-learn (Machine Learning)

### 7.2 AI/ML Integration
- **Machine Learning Models:** Implement predictive analytics for optimizing resource usage and crop yield.
- **Data Analysis:** Use Python libraries (e.g., pandas, scikit-learn) for data pre-processing and model training.

### 7.3 Implementation Steps
- **Phase 0: Research and Development:** Gather insights from academic research, articles, and YouTube tutorials; engage in discussions with faculty at IIAST and IUL Robotics Lab.
- **Phase 1: Requirement Analysis and System Design:** Plan the system architecture and select appropriate hardware and software components.
- **Phase 2: Development and Integration:** Develop hardware and software components, ensuring seamless integration.
- **Phase 3: Testing and Deployment:** Conduct unit and integration testing, then deploy in a controlled hydroponic environment.

---

## 8. Testing Methodology

### 8.1 Types of Testing
- **Unit Testing:** Test individual hardware and software components to ensure they function correctly in isolation.
- **Integration Testing:** Verify that all integrated components work together as intended.
- **User Acceptance Testing (UAT):** Engage end-users to validate the system against requirements and ensure it meets their needs.

---

## 9. Expected Outcomes

- **Working Prototype:** A fully functional model of the IoT-enabled hydroponic farming system, demonstrating real-time monitoring and automation capabilities.
- **Web Application:** A user-friendly interface for remote monitoring and control of the hydroponic system.
- **Comprehensive Project Report:** Detailed documentation covering methodologies, results, and analyses.
- **Additional Deliverables:** Photo documentation, video logs, and an implementation timeline (Gantt chart format).

---

## 10. Impact

The project delivers a scalable and efficient solution for hydroponic farmers, optimizing resource utilization and enhancing crop yields through automation and real-time monitoring. By ensuring that crops receive the right amount of water at the right time, the system minimizes water waste, improves profitability, and offers a cost-effective solution for sustainable agriculture. The integration of IoT and machine learning technologies addresses real-world challenges and contributes to a greener future.

---

## 11. Resources Required

### 11.1 Hardware
- Raspberry Pi 5 (8GB Starter Kit)
- Sensors: pH, TDS, Temperature & Humidity, CO₂, and others
- ESP8266 Wi-Fi Module
- Raspberry Pi Camera
- Relays, ultrasonic sensors, flow sensors, etc.

### 11.2 Software
- **Backend:** Node.js with Express.js
- **Frontend:** React.js
- **Database:** MongoDB
- **Data Analysis & Machine Learning:** Python libraries (pandas, scikit-learn)
- **Operating System:** Raspberry Pi OS

### 11.3 Human Resources
- A project team of 3-4 members skilled in IoT, web development, and data analysis.

---

## 12. Budget

### 12.1 Estimated Cost
The estimated cost ranges between **₹30,000 and ₹40,000**, covering:
- **Hardware Components:** Costs for sensors, microcontrollers, and essential equipment.
- **Software Licenses:** Additional tools or software licenses required.
- **Miscellaneous Expenses:** Materials, tools, and other project-related costs.

---

## 13. References

### 13.1 Literature
- Research papers and studies on IoT applications in agriculture and hydroponic systems.
- Articles on machine learning impact for resource optimization in farming.

### 13.2 Tools and Technologies
- **Hardware Documentation:** Manuals for Arduino, Raspberry Pi, and sensors.
- **Academic Resources:** Details on integrating IoT and machine learning in sustainable agriculture.

---

## 14. Additional Project Overview

### Smart Hydroponic Farming & Plant Disease Detection System
- **Overview:** An advanced IoT-based system for hydroponic farming integrating multiple sensors and real-time data analytics to optimize plant growth and resource usage.
  
### Sensor Integration & Data Acquisition
- Integrated sensors include temperature, CO₂, humidity, water flow, light intensity, mineral content, and pH value sensors.
- Data is collected via ESP32 microcontrollers and transmitted in JSON format via Wi-Fi.

### Data Processing & Storage
- Python scripts running on a Raspberry Pi 5 fetch and process sensor data.
- Automated updates are made to a MongoDB database for efficient data logging and historical tracking.

### API & Web Integration
- An API server deployed on Railway.app exposes sensor data endpoints.
- A responsive website (rk-iot.netlify.app) displays real-time sensor readings for remote monitoring.

### Collaborative AI-Driven Disease Detection
- Integration of an AI module using Google Coral TPU for accelerated plant disease detection.
- Advanced computer vision techniques are used to monitor plant health.

### Technologies & Tools
- **Hardware:** ESP32, Raspberry Pi 5, various environmental sensors, and Google Coral for AI acceleration.
- **Software:** Python, MongoDB, JSON data format, API development.
- **Deployment:** API server on Railway.app and a real-time monitoring website hosted on Netlify.

### Impact
- Enhanced crop monitoring and decision-making through real-time data visualization.
- Improved resource efficiency by optimizing water and nutrient usage.
- Pioneering the integration of AI in agriculture for early detection and mitigation of plant diseases.

---

*This README documents the design, implementation, and impact of an advanced IoT-enabled hydroponic farming system integrated with AI-driven plant disease detection. It is intended for developers, researchers, and stakeholders interested in sustainable agriculture technologies.*
