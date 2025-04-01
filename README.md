# Leetcode-Problem-Tracer

## Overview
LeetTracker is a **LeetCode problem tracer** that helps users track their problem-solving progress, analyze patterns, and receive AI-driven recommendations for their next problems. It provides detailed statistics, streak tracking, difficulty-based heatmaps, and AI-generated explanations for problem solutions.

## Features

### **User Management**
- User authentication (Login/Register with Email/Password and OAuth)
- User profile with problem-solving stats and preferences
- Streak tracking to encourage consistency

### **Problem Tracking**
- Search and filter LeetCode problems by difficulty and topic
- Mark problems as **solved, attempted, or unsolved**
- Log the number of **attempts and time taken** for each problem
- Save personal **notes and solutions** for each problem

### **AI-Driven Features**
- **Smart Problem Suggestions**: AI-based problem recommendations based on user performance
- **AI-Generated Explanations**: Alternative explanations and insights for problems
- **Topic-Based Reinforcement**: Suggests problems based on weak areas

### **Analytics & Visualization**
- **Difficulty Heatmaps**: Visual representation of problem-solving patterns
- **Topic Heatmaps**: Identifies strengths and weaknesses in different problem domains
- **Milestone Achievements**: Notifications for completing problem sets

### **Leaderboard & Social Features**
- **Global Leaderboard** ranking users based on consistency and problem-solving speed
- **Friend System**: Users can add friends and compare progress
- **Discussion Boards**: Users can discuss solutions and strategies

### **Notifications & Reminders**
- **Daily Problem Reminder** to maintain streaks
- **Milestone Celebrations** to encourage engagement

---

## Tech Stack

### **Frontend**
- [Next.js](https://nextjs.org/) (React Framework for SSR & SEO)
- Tailwind CSS for styling

### **Backend**
- [FastAPI](https://fastapi.tiangolo.com/) (Python-based high-performance API framework)

### **Database**
- [PostgreSQL](https://www.postgresql.org/) (Relational Database for structured data)
- [Firebase](https://firebase.google.com/) (Optional for real-time tracking)

### **Authentication & Deployment**
- Firebase Authentication / NextAuth.js
- Vercel (Frontend Hosting)
- Render / AWS Lambda (Backend Hosting)

---

## Project Structure

```
leettracker/
│── client/                  # Frontend (Next.js)
│   ├── components/          # Reusable UI components
│   ├── pages/               # Next.js pages (routes)
│   ├── hooks/               # Custom hooks
│   ├── styles/              # Tailwind CSS styles
│   ├── utils/               # Helper functions
│   ├── public/              # Static assets
│   ├── package.json         # Frontend dependencies
│
│── server/                  # Backend (FastAPI)
│   ├── models/              # Database models
│   ├── routes/              # API endpoints
│   ├── services/            # Business logic
│   ├── utils/               # Helper functions
│   ├── main.py              # FastAPI entry point
│   ├── requirements.txt     # Backend dependencies
│
│── database/                # Database schemas & migrations
│
│── docs/                    # Documentation & API specs
│
│── README.md                # Project Documentation
│── .gitignore               # Git ignore file
│── .env                     # Environment variables
```

---

## Installation & Setup

### **1. Clone the Repository**
```sh
git clone https://github.com/benjaminmweribaya/Leetcode-Problem-Tracer.git
cd Leetcode-Problem-Tracer
```

### **2. Backend Setup (FastAPI & PostgreSQL)**
```sh
cd server
python -m venv venv
source venv/bin/activate  # (or venv\Scripts\activate on Windows)
pip install -r requirements.txt
```

#### **Create a `.env` file in the `server/` directory**
```
DATABASE_URL=postgresql://username:password@localhost:5432/leettracker
SECRET_KEY=your_secret_key_here
```

#### **Run the backend server**
```sh
uvicorn main:app --reload
```

### **3. Frontend Setup (Next.js)**
```sh
cd client
yarn install  # or npm install
```

#### **Create a `.env.local` file in the `client/` directory**
```
NEXT_PUBLIC_API_URL=http://localhost:8000
NEXTAUTH_SECRET=your_auth_secret
```

#### **Run the frontend server**
```sh
yarn dev  # or npm run dev
```

---

## API Endpoints

### **Authentication**
- `POST /auth/register` → Register a new user
- `POST /auth/login` → Authenticate user

### **Problems**
- `GET /problems` → Fetch all problems
- `GET /problems/{id}` → Get a specific problem
- `POST /problems/{id}/solve` → Mark a problem as solved

### **User Progress**
- `GET /user/stats` → Fetch user statistics
- `GET /user/streaks` → Fetch streak history
- `GET /user/heatmap` → Get heatmap data

### **AI Features**
- `GET /ai/recommendations` → Get AI-based problem recommendations
- `GET /ai/explanations/{problem_id}` → Get AI-generated explanations for a problem

---

## Contribution Guidelines
We welcome contributions! To contribute:
1. Fork the repository.
2. Create a new branch (`feature/new-feature` or `fix/bug-fix`).
3. Commit and push your changes.
4. Open a pull request with a clear description.

---

## License
This project is licensed under the MIT License.

---

## Contact
For issues or feature requests, open an issue on GitHub or contact the project owner at [b3njaminbaya@gmail.com](b3njaminbaya@gmail.com).

