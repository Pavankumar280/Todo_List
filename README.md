Todo List Application

A sleek and responsive MERN stack application to create, track, and manage tasks effortlessly with real-time updates.

🚀 Features

CRUD Operations: Create, Read, Update, and Delete tasks.

Responsive UI: Optimized for both desktop and mobile devices.

RESTful API: Built using Express.js.

Database: MongoDB for data persistence.

Backend: Node.js backend with real-time updates.

🛠 Tech Stack

Frontend: HTML, CSS, JavaScript (or React.js if updated)

Backend: Node.js, Express.js

Database: MongoDB

📂 Project Structure

├── config/
├── controllers/
├── models/
├── node_modules/
├── public/
├── routes/
├── .env
├── README.md
├── index.js
├── package.json
└── package-lock.json


🧩 Installation

Clone the repository:

git clone https://github.com/Pavankumar280/Todo_List.git
cd Todo_List


Install dependencies:

npm install


Set up environment variables:

Create a .env file in the root directory with the following content:

PORT=3000
DATABASE_URL=mongodb://127.0.0.1:27017/todoApp


Start the server:

npm start


The server will run on http://localhost:3000.

📡 API Endpoints
Base URL
http://localhost:3000/api/v1

Routes
Method	Endpoint	Description	Body Parameters
POST	/todos	Create a new Todo	title, description
GET	/todos	Get all Todos	-
GET	/todos/:id	Get a Todo by ID	-
PUT	/todos/:id	Update a Todo by ID	title, description
DELETE	/todos/:id	Delete a Todo by ID	-
🧪 Example JSON Request Body
{
  "title": "Buy groceries",
  "description": "Milk, Bread, Eggs"
}

✅ Example JSON Response
{
  "success": true,
  "data": {
    "_id": "64f8f0d5b8c0e5a1c1234567",
    "title": "Buy groceries",
    "description": "Milk, Bread, Eggs",
    "createdAt": "2025-09-04T05:00:00.000Z",
    "updatedAt": "2025-09-04T05:00:00.000Z"
  },
  "message": "Entry Created Successfully"
}

🗄️ Database Schema
Todo Schema
Field	Type	Required	Default
title	String	Yes	-
description	String	Yes	-
createdAt	Date	Yes	Date.now()
updatedAt	Date	Yes	Date.now()
🎨 Usage

Open your browser and navigate to http://localhost:3000.

Use the provided API endpoints to interact with the Todo application.

The server will automatically connect to MongoDB at startup.

🤝 License

This project is licensed under the MIT License.

