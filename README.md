# 🚗 Car Price Prediction Web App

A full-stack Machine Learning web application that predicts the selling price of a car based on user inputs.
This project was a complete end-to-end deployment experience, involving frontend, backend, database, and cloud services — exciting, educational, and yes… frustrating at times 😅.

### 🔗 Live Project


🌐 Frontend (Vercel):
https://car-price-prediction-flax.vercel.app/

## 🧠 What This Project Does

Takes car details from the user
Sends data to a FastAPI backend
Uses a trained ML model to predict price
Stores prediction data in PostgreSQL
Returns prediction result to frontend

## 🏗️ Tech Stack Used
### 🖥️ Frontend

React (Vite)
Hosted on Vercel
Uses environment variables (VITE_API_URL)
Simple UI (React is not my primary interest — focus was on system design & backend)

### ⚙️ Backend

FastAPI
Uvicorn server
Hosted on Render
REST API (/predict)
Handles CORS securely

### 🧠 Machine Learning

Trained regression model
Predicts car price based on:
Car age
Fuel type
Seller type
Transmission
Ownership
Kilometers driven

### 🗄️ Database

PostgreSQL
Hosted on Neon
Stores:
    Input data
    Predicted price
    Timestamp
    Request metadata


## 🔄 Data Flow (How Everything Connects)

User submits form on React UI
React sends POST request to FastAPI

FastAPI:
Validates data
Runs ML model
Stores result in PostgreSQL
Predicted price is returned to frontend
Result displayed to user


This project taught me far more than just coding:

🔥 Connecting Vercel + Render + Neon was harder than expected
😵 CORS issues due to cold starts
💤 Backend sleeping on free tier
🧪 Debugging API failures that appeared only once
📦 Environment variable mismatches
🚀 Deployment configurations (start commands, ports, uvicorn)

But solving these made the project 100× more valuable.

### 🧠 Key Learnings

How real-world full-stack systems communicate
How CORS actually works

Cold starts & free-tier limitations

Cloud deployment debugging

API reliability & frontend handling

Patience 😄
