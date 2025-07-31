
# AI Chatbot with Admin Panel

A smart AI chatbot with a modern frontend interface and an admin panel for managing conversations. Built using HTML, JavaScript, and CSS, with backend support (e.g., Flask or Node.js) to handle logic, database interaction, and optional voice features.

## Features

- Chatbot that accepts text 
- Responds in text
- Clean and responsive frontend design
- Admin panel to manage and view customer conversations
- Records and stores chat history in a database

## Project Structure

project-root/
│
├── __pycache__/                 # Python cache directory (auto-generated)
│
├── static/                      # Static files (CSS and JavaScript)
│   ├── script.js                # Main JavaScript for chatbot/frontend logic
│   ├── style.css                # Primary stylesheet
│   ├── style2.css               # Additional/alternate styles
│   ├── style3.css               # Additional/alternate styles
│
├── templates/                   # HTML templates for frontend and admin views
│   ├── admin.html               # Admin panel interface
│   ├── chatbot.html             # Chatbot user interface
│   ├── login.html               # Login page for admin
│
├── upload/                      # Directory for user uploads (e.g., documents, audio, etc.)
│   └── data/                    # Data files or inputs uploaded by users (subfolder)
│
├── vectorstore/                 # FAISS vector storage for chatbot memory/retrieval
│
├── .env                         # Environment variables (keep this file secret, do not upload)
│
├── admin_credentials.yaml       # YAML file storing admin login info (DO NOT upload real credentials)
│
├── connect_llm.py               # Script to connect to a large language model (e.g., OpenAI, local LLM)
│
├── llm_memory.py                # Handles memory storage/retrieval for the chatbot
│
├── new_app.py                   # Main backend application (Flask app or similar)
│
├── requirements.txt             # Python dependencies list
│
└── README.md                    # Project documentation (to be added)
