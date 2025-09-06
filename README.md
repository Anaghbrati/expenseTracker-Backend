# Expense Tracker (Backend)

This is the backend of the Expense Tracker Web Application, built with **Node.js, Express.js, and MongoDB**.  
It provides REST APIs for authentication, income/expense tracking, and user management.

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/Anaghbrati/expenseTracker-Backend.git
cd expenseTracker-Backend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup environment variables
Create a `.env` file in the root directory with the following:
```env
PORT=5000
MONGO_CONN=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the development server
```bash
npm run dev
```

The backend server will start at:  
👉 `http://localhost:5000`

---

## 📂 Project Structure

```
backend/
│── Controllers/        # Handles request logic
│   ├── AuthController.js
│   ├── ExpenseController.js
│
│── Middlewares/        # Middleware for authentication & validation
│   ├── Auth.js
│   ├── AuthValidation.js
│
│── Models/             # Database models
│   ├── db.js
│   ├── User.js
│
│── Routes/             # API routes
│   ├── AuthRouter.js
│   ├── ExpenseRouter.js
│   ├── ProductRouter.js
│
│── .env                # Environment variables
```

---

## 🛠️ Tech Stack

- **Node.js** → JavaScript runtime
- **Express.js** → Web framework for APIs
- **MongoDB** → Database for storing user & expense data
- **Mongoose** → ODM for MongoDB
- **JWT (JSON Web Token)** → Authentication & Authorization
- **bcrypt** → Password hashing

---

## 🔑 API Highlights

- **Auth APIs** → Signup, Login, JWT authentication
- **Expense APIs** → Add, fetch, delete expenses
- **User APIs** → Manage user data
- **Protected Routes** → Secured using JWT middleware

---

## 🔗 Frontend Repo
👉 [Expense Tracker Frontend](https://github.com/Anaghbrati/expenseTracker-Frontend)

---

## 🌐 Live Demo
👉 [Live Link](https://expense-tracker-frontend-dkm9.vercel.app/)

---

Always learning, always building 🚀
