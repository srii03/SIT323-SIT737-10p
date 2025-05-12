# SIT323-SIT737-10p - Cloud Native Application with Monitoring and Visibility

This project demonstrates the creation and deployment of a **Cloud-Native Application** using Kubernetes (GKE), Docker, and Google Cloud Platform (GCP) for **monitoring, logging, and metrics visibility**. The application, named "Simple Web Monitoring App," is a simple web service deployed in a Kubernetes cluster on GCP, with real-time monitoring and logging configured.

## Project Overview

The project involves the following key components:

- **Node.js Web Application**: A simple web server built with Node.js that serves a basic homepage and exposes health check and status endpoints.
- **Dockerization**: The application is containerized using Docker and deployed to a Kubernetes cluster on GCP.
- **Kubernetes**: The containerized application is deployed to Google Kubernetes Engine (GKE), leveraging Kubernetes resources such as Pods, Deployments, and Services.
- **Cloud Monitoring and Logging**: The project integrates with GCP's Cloud Monitoring and Cloud Logging for tracking application performance and gathering real-time logs and metrics.
- **Alerting**: Set up custom alert policies based on container CPU usage, and notifications are sent via email when thresholds are exceeded.

## Features

- **Containerized Node.js Application**: The app is packaged into a Docker container for easy deployment and scalability.
- **GKE Deployment**: The app is deployed to GKE, ensuring scalability and high availability.
- **Monitoring**: Real-time metrics on container CPU and memory usage are displayed in GCP's Metrics Explorer.
- **Logging**: Logs from the application are captured and can be viewed in the Logs Explorer.
- **Alerting**: Custom alerting policies based on CPU usage thresholds are set up to notify the team about resource overuse.

## Technologies Used

- **Node.js**: The backend of the application is built using Node.js.
- **Docker**: Docker is used to containerize the application, ensuring it can be easily deployed to Kubernetes.
- **Kubernetes (GKE)**: The application is deployed and managed using Kubernetes on Google Kubernetes Engine (GKE).
- **Google Cloud Platform (GCP)**: GCP services such as Cloud Monitoring, Cloud Logging, and GKE are used for deployment, monitoring, and management.
- **GitHub**: Source code version control and GitHub Actions for CI/CD.
- **Prometheus/GCP Metrics Explorer**: For gathering and visualizing metrics on container resource usage.

## Setup Instructions

### Prerequisites

- **Google Cloud Platform (GCP) Account**: Ensure you have a GCP account set up and have access to the Google Kubernetes Engine (GKE).
- **gcloud CLI**: Install and authenticate the Google Cloud CLI on your local machine. You can download it from [here](https://cloud.google.com/sdk/docs/install).
- **kubectl**: Install the Kubernetes CLI tool, `kubectl`, for managing Kubernetes resources. Instructions can be found [here](https://kubernetes.io/docs/tasks/tools/install-kubectl/).
- **Docker**: Install Docker to build and push images. You can download Docker from [here](https://www.docker.com/products/docker-desktop).
- **Git**: Ensure that you have Git installed to clone and manage your project repository.

### Steps for Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/srii03/SIT323-SIT737-10p.git
   cd SIT323-SIT737-10p
Build the Docker Image:
Inside the project directory, build the Docker image using the provided Dockerfile:

bash

docker build -t simple-web-monitoring-app .
Run the Docker Container Locally:
Run the Docker container to verify that the application works locally:

bash

docker run -p 8080:8080 simple-web-monitoring-app
You should be able to access the app at http://localhost:8080.

Steps for Deployment on Google Kubernetes Engine (GKE)
Create a Kubernetes Cluster:
In your Google Cloud Console, create a Kubernetes cluster. You can follow the instructions here.

Authenticate kubectl:
Once your cluster is created, authenticate the Kubernetes CLI to interact with your cluster:

bash

gcloud container clusters get-credentials sit737-cluster --region australia-southeast1
Deploy the Application:
Apply the Kubernetes manifest files to deploy the application:

bash

kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
Verify the Deployment:
Check that the Pods are running successfully:

bash

kubectl get pods
Access the Application:
Once the service is exposed, you can access the application externally:

bash

kubectl get services
Use the external IP to access the application.

Set Up Monitoring and Logging
Enable Cloud Monitoring and Logging:
Ensure that GCP Monitoring and Logging are enabled in your Google Cloud project.

Configure Metrics:
Use Google Cloud Metrics Explorer to monitor the following metrics for your Kubernetes cluster:

kubernetes.io/container/cpu/usage_time

kubernetes.io/container/memory/used_bytes

Configure Logs:
Use Google Cloud Logs Explorer to view logs for your Kubernetes pods. Apply filters such as:

resource.type="k8s_container"

resource.labels.cluster_name="sit737-cluster"

labels.app="simple-web-monitoring-app"

Set Up Alerts:
Create alerting policies based on resource usage metrics such as CPU and memory usage to get notified if the thresholds are exceeded.

Troubleshooting
Pods Not Starting: Check the pod logs for errors:

bash

kubectl logs <pod-name>
GKE Issues: If the cluster is not responding, check the status of your nodes:

bash

kubectl get nodes
Challenges and Solutions
Kubernetes Resource Management:

Challenge: Ensuring that the Kubernetes pods are allocated enough resources for optimal performance.

Solution: I set appropriate resource requests and limits in the Kubernetes manifest files for the CPU and memory.

Monitoring and Logging Configuration:

Challenge: Initially, GCP Cloud Monitoring and Logging were not configured correctly.

Solution: Followed the official GCP documentation to configure logging and metrics and ensured that the correct filters and queries were set in Metrics Explorer and Logs Explorer.

Network Policies:

Challenge: Enabling network policies caused a rolling update of all cluster nodes, which impacted other services.

Solution: I waited for the update to complete and ensured that no critical services were running during the update.

Conclusion
This project successfully integrates cloud-native application deployment, containerization with Docker, and monitoring with GCP. The application is scalable, reliable, and provides critical insights into resource usage and performance via Google Cloud's Monitoring and Logging tools. It serves as a good example of managing a Kubernetes application in a production environment.

License
This project is licensed under the MIT License - see the LICENSE file for details.

yaml


---

### Notes:
- You can replace the project name, cluster name, and other specific details according to your setup if necessary.
- This README includes all the steps for setting up the project, from building the application to deploying it on GKE and configuring monitoring.
- Make sure you update the **deployment.yaml** and **service.yaml** paths and instructions in the README if they change.
