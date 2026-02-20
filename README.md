# 🚀 Serverless CI/CD Pipeline

## 📌 Project Overview
This project demonstrates a fully automated DevOps Continuous Integration and Continuous Deployment (CI/CD) pipeline. It bridges the gap between software development and IT operations by automating the testing and deployment of a Node.js Serverless API.

## 🛠️ Tech Stack
* **Backend:** Node.js
* **Testing Framework:** Jest
* **CI/CD Orchestration:** GitHub Actions
* **Cloud Infrastructure:** Vercel (Serverless Functions)
* **Version Control:** Git & GitHub

## ⚙️ Architecture & Workflow
This project utilizes a strict "Test-Driven Deployment" strategy. 

1. **Code Commit:** A developer pushes code changes to the `main` branch.
2. **Continuous Integration (CI):** GitHub Actions intercepts the push, spins up an isolated Ubuntu Linux environment, installs dependencies, and runs automated unit tests using Jest.
3. **Quality Gate:** If any test fails, the pipeline halts immediately, preventing broken code from reaching production.
4. **Continuous Deployment (CD):** If all tests pass, the pipeline securely authenticates with Vercel using encrypted GitHub Secrets (`VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`) and deploys the new serverless function automatically.

## 🔗 Live API Endpoint
You can view the live, automated deployment here:
👉 **[https://serverless-cicd-project.vercel.app/api]/api**

## 💻 How to Run and Test Locally
If you want to pull this code and test the CI phase locally on your machine:

1. Clone the repository:
   ```bash
   git clone [https://github.com/Akhil05441/serverless-cicd-project.git](https://github.com/Akhil05441/serverless-cicd-project.git)