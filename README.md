# NetSentinel
This is our project repository.
Soon I will be posting our Project plan over here.


Here’s a *detailed checklist* for developing your *AI-powered IoT Threat Detection Web App* over 4 weeks:  

---

### *✅ Week 1: Research, Planning & Setup*  
Research & Define Scope*  
- [ ] Identify common IoT threats (DDoS, botnets, malware, unauthorized access).  
- [ ] Define system objectives (real-time detection, alerts, analytics).  
- [ ] Choose AI/ML techniques (supervised, unsupervised, anomaly detection).  

Select Tech Stack*  
- *Backend:* Python (FastAPI, Flask, Django), Node.js  
- *Frontend:* React, Next.js, Vue.js  
- *Database:* PostgreSQL, MongoDB, Firebase  
- *ML/AI:* TensorFlow, Scikit-learn, PyTorch  
- *Networking:* Snort, Zeek, MQTT, Wireshark for traffic analysis  

Set Up Development Environment*  
- [ ] Set up IoT testbed (Raspberry Pi, ESP8266, smart devices, network simulator).  
- [ ] Install necessary tools, dependencies, and frameworks.  
- [ ] Set up version control (GitHub, GitLab, Bitbucket).  

Gather & Preprocess IoT Data*  
- [ ] Collect real or synthetic IoT network traffic data.  
- [ ] Extract key features (packet size, IP flow, request frequency).  
- [ ] Label data (normal vs. malicious traffic).  

---

### *✅ Week 2: AI Model Development & Backend Implementation*  
Design AI/ML Model*  
- [ ] Select model type (e.g., Random Forest, Deep Learning, Autoencoders).  
- [ ] Train on labeled IoT traffic dataset.  
- [ ] Validate with cross-validation techniques.  
- [ ] Tune hyperparameters for improved accuracy.  
- [ ] Test model performance on unseen data.  

Develop Backend System*  
- [ ] Implement API endpoints for threat detection & data processing.  
- [ ] Connect ML model to backend (via FastAPI, Flask, or Django).  
- [ ] Develop database schema for storing detected threats, logs, and user data.  
- [ ] Implement authentication (JWT, OAuth) for secure access.  

---

### *✅ Week 3: Web App Frontend & System Integration*  
Build Frontend UI/UX*  
- [ ] Design dashboard for real-time threat monitoring.  
- [ ] Display network activity logs and AI-detected threats.  
- [ ] Implement visualization (graphs, charts, heatmaps).  
- [ ] Add alerting system (email, push notifications, SMS).  

Integrate Web App with Backend*  
- [ ] Connect frontend with API endpoints.  
- [ ] Fetch real-time network data & model predictions.  
- [ ] Implement secure WebSocket or RESTful API communication.  
- [ ] Optimize API calls for efficiency.  

Test & Debug*  
- [ ] Conduct unit testing (backend, frontend, database).  
- [ ] Simulate attack scenarios & analyze model response.  
- [ ] Fix false positives/negatives in detection.  
- [ ] Optimize latency & response time.  

---

### *✅ Week 4: Deployment, Security & Finalization*  
Final Security & Performance Enhancements*  
- [ ] Implement rate limiting, encryption, and firewalls.  
- [ ] Optimize model performance for real-time threat detection.  
- [ ] Conduct penetration testing & vulnerability assessments.  

 Deploy Web App*  
- [ ] Set up cloud hosting (AWS, Google Cloud, Azure).  
- [ ] Deploy backend as microservices (Docker, Kubernetes).  
- [ ] Configure CI/CD pipeline (GitHub Actions, Jenkins).  

#### *1️⃣2️⃣ Documentation & Handover*  
- [ ] Write technical documentation & user guide.  
- [ ] Prepare a report on AI model performance.  
- [ ] Plan for scaling & further improvements.



Author Kaustubh Pandit
