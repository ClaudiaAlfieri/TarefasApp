# 📋 Task Manager

A task management application built with **React** as part of a React learning journey. This project demonstrates how to build a functional agenda-style app with user authentication, real-time data, and full task control 🗂️.

## 🚀 Features

- 🔐 User authentication (login & register)
- ➕ Create, edit and delete tasks
- ⚡ Real-time updates with Firestore
- 🔒 Protected routes for authenticated users
- 👤 Tasks linked to each individual user

## 🛠️ Tech Stack

- ⚛️ React
- 🧭 React Router DOM
- 🎨 Custom CSS
- 🔥 Firebase (Authentication & Firestore)

## 📦 Installation

```bash
git clone https://github.com/yourusername/task-manager.git
cd task-manager
npm install
```

### 🔑 Firebase Configuration

1. Create a project at [Firebase Console](https://console.firebase.google.com/)
2. Enable **Authentication** (Email/Password) and **Firestore Database**
3. Create a `firebaseConection.js` file in the root directory with your Firebase config:

```js
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "your_api_key",
  authDomain: "your_auth_domain",
  projectId: "your_project_id",
  storageBucket: "your_storage_bucket",
  messagingSenderId: "your_messaging_sender_id",
  appId: "your_app_id"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)
```

4. Start the development server:

```bash
npm start
```

The app will open at `http://localhost:3000` 🚀

## 🎯 How to Use

### Authentication:
- Register a new account or log in with an existing one
- Protected routes ensure only authenticated users can access tasks

### Task Management:
- ✏️ Type your task and click **"Registrar tarefa"** to add it
- 🔄 Click **"Editar"** to modify an existing task
- ✅ Click **"Concluir"** to delete a completed task
- 🚪 Click **"Sair"** to log out

## 👨‍💻 Author

This project was developed by Cláudia Alfieri as part of a React learning journey.

## 📝 Contribution 🤝

Contributions are welcome through pull requests!

Made with ❤️ and React
