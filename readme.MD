# Evently - Event Management & Discovery Platform

Evently is a full-stack web application designed for organizing, discovering, and registering for events. Users can browse upcoming events, register (RSVP) for them, and manage their created events through an interactive dashboard.

## Tech Stack

**Frontend:**
- **React** (v19) + **TypeScript** + **Vite**
- **Tailwind CSS** (for styling)
- **React Router** (for navigation)
- **Axios** (for API communication)
- **Lucide React** (icons)

**Backend:**
- **Node.js** + **Express**
- **MongoDB** + **Mongoose** (ODM)
- **JWT** (JSON Web Tokens for secure authentication)
- **Multer** (for file uploads / event image handling)

---

## Features

- **User Accounts**: Registration and secure login using JWT.
- **Discover Events**: A dashboard to search and browse all available upcoming events.
- **Create & Manage Events**: Create your own events with titles, descriptions, dates, times, and cover images. 
- **RSVP System**: Register for events with one click.
- **My Dashboard**: View events you have signed up for, and easily unregister if plans change.
- **Local Storage Auth**: Tokens are cached locally to keep users logged in.

---

## Project Structure

- `/frontend` - React SPA (TypeScript)
- `/backend` - Express API server (Node.js)

---

## Getting Started

### 1. Prerequisite
Make sure you have Node.js installed on your system.

### 2. Backend Setup (`/backend`)
1. Open a terminal and navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install the backend dependencies:
   ```bash
   npm.cmd install
   ```
3. A pre-configured `.env` is already created with a MongoDB connection. If you wish to use your own database, modify the `MONGO_URI` variable in the `.env` file:
   ```env
   PORT=5000
   MONGO_URI="your_mongodb_connection_string"
   JWT_SECRET="your_secret_key"
   ```
4. Run the backend server:
   ```bash
   npm.cmd start
   # Or directly using node:
   node api/index.js
   ```

### 3. Frontend Setup (`/frontend`)
1. Open a new terminal and navigate to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install the frontend dependencies:
   ```bash
   npm.cmd install
   ```
3. Start the development server:
   ```bash
   npm.cmd run dev
   ```

---

## Running Local APIs
The frontend is already configured to automatically point to `http://localhost:5000/api` when running locally.

- **Frontend App**: http://localhost:5173/
- **Backend API**: http://localhost:5000/api
