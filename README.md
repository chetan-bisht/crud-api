# 🧩 CRUD REST API — Node.js, Express, PostgreSQL & Docker

A modular **CRUD REST API** built using **Node.js**, **Express**, and **PostgreSQL**, with input validation using **Joi** and optional Docker support.  
Designed to be clean, production-ready, and easy to run locally.

---

## 🚀 Features

- Full CRUD operations for **users**
- Input validation using **Joi** (ensures name and email are valid)
- Centralized error handling middleware
- PostgreSQL integration (running locally or in Docker)
- Environment variable configuration using `.env`
- Modular folder structure for maintainability

---

## 🗂 Project Structure

crud-api/
│
├── src/
│ ├── config/
│ │ └── db.js # PostgreSQL connection
│ ├── controllers/
│ │ └── userController.js # Business logic + validation using Joi
│ ├── data/
│ │ ├── createUserTable.js # Function to create users table
│ │ └── data.sql # Reference SQL queries
│ ├── middleware/
│ │ └── errorHandler.js # Centralized error handling
│ ├── models/
│ │ └── userModel.js # Database queries for users
│ ├── routes/
│ │ └── userRoutes.js # API route definitions
│ └── index.js # Main app entry point
│
├── .env # Environment variables
├── .gitignore
├── package.json
└── README.md
