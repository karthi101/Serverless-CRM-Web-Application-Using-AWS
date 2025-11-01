# 🧩 Serverless CRM Web Application (AWS Based)

## 📘 Overview
This project is a **Cloud-Based CRM (Customer Relationship Management) Web Application** built using **AWS Serverless Architecture**.  
It allows users to securely manage customer information through a web interface — performing all core CRM operations like adding, viewing, updating, and deleting customer records.

The system leverages **AWS Lambda**, **API Gateway**, **DynamoDB**, **S3**, and **IAM**, providing high scalability, cost efficiency, and zero server maintenance.  
User authentication is secured using **JWT (JSON Web Token)**, ensuring that only authorized users can access the CRM functionalities.


## 🚀 Features

### 🔐 User Authentication
- Secure user **registration and login** using JWT.
- Authentication handled by a dedicated API.
- Token-based authorization for secure data access.

### 👥 Customer Management
- Add, view, update, and delete customer records.
- Data stored in **Amazon DynamoDB**.
- Responsive web interface for customer operations.

### ☁️ Serverless Design
- 100% serverless – built with AWS managed services.
- Automatically scales based on usage.
- Low-cost and maintenance-free architecture.



## 🧱 Technologies Used

| Layer            | Technology                                  |
|------------------|---------------------------------------------|
| Frontend         | HTML, CSS, JavaScript (Hosted on Amazon S3) |
| Backend          | AWS Lambda (Python)                         |
| APIs             | Amazon API Gateway (RESTful APIs)           |
| Database         | Amazon DynamoDB                             |
| Authentication   | JWT (JSON Web Token)                        |
| Security         | AWS IAM (Access Management)                 |



## 🏗️ System Architecture

The system is divided into **two main APIs**:

1. **Authentication API** – Handles user registration and login using AWS Lambda and DynamoDB.  
2. **CRM API** – Manages customer data with CRUD operations (Create, Read, Update, Delete).

Steps Involved in Solving the Project Problem Statement:

The project aimed to build a Cloud-Based Serverless- CRM system with a serverless architecture to manage customer interactions efficiently. The following steps were taken to implement the solution:

Step1: Set Up the DynamoDB Table:
        ◦ Created a DynamoDB table named CustomerTable with customerID as the partition key. This Table Used to store user customer details.
        ◦ Created a DynamoDB table named Users with email as the partition key. This Table Used for User Authentication and Store user Email and Password.
        ◦ Configured on-demand capacity to handle dynamic workloads .

Step 2: Create IAM role for Lambda Function:
Created an IAM role for Lambda with permissions to:
        ◦ Access DynamoDB tables.
        ◦ Write logs to CloudWatch for monitoring.
Policies:
    • AmazonDynamoDBFullAccess
    • AWSlambdaBasicExecutionRole

Step 3: Create a Lambda Function:
     Created Lambda functions in Python to handle:
    • User Registration – Inserts user data into DynamoDB.
    • User Login – Verifies credentials from DynamoDB.
    • Customer Data Management – Adds, updates, or retrieves CRM data.

Step 4: API Creation With AWS API Gateway :
 Created a REST API in API Gateway.
  Defined resources and methods (POST/GET) for each function:
    • /register → LambdaRegisterFunction
    • /login → LambdaLoginFunction
    • /add-customer→ LambdaCRMFunction
    • /delete-customer
    • /get-all-customer
    • /get-customer
    • /update-customer
    • Enabled CORS (Cross-Origin Resource Sharing) to allow the frontend hosted on S3 to access the API.
    • Deployed the API to a stage (e.g., “prod”) and obtained the Invoke URL for integration.

Step 5: Frontend Devlopment :
Devloped the web interface using HTML, CSS, and JavaScript.
Designed the following pages:
    • Home Page – Introduction to the CRM system.
    • Register Page – Allows new users to sign up.
    • Login Page – Authenticates existing users.
    • Dashboard – Displays CRM data after login.
    • Integrated frontend scripts to send HTTP requests (fetch API calls) to AWS API Gateway endpoints.

Step 6: Hosted The Application on Amazon S3 :
    • Created an S3 bucket to host the static web application files (HTML, CSS, JS).
    • Enabled Static Website Hosting and uploaded all necessary frontend assets.
    • Configured the bucket policy to allow public read access for web content.
    • Verified that the website was accessible globally using the S3 website endpoint.
    • Integrated the S3 frontend with the API Gateway Invoke URL to enable complete end-to-end interaction between the UI and backend.

See the Documation if any Doubt araise........



