# Todo App Frontend

This is a Reaczt frontend for the Todo App microservices. It connects to both the User Service and Todo Service to provide a seamless user experience.

## Features

- User authentication (login and registration)
- Todo management (create and list todos)
- Responsive UI with Tailwind CSS

## Prerequisites

Before running this application, make sure both microservices are running:

1. User Service (http://localhost:3001)
2. Todo Service (http://localhost:3002)

## Installation

```bash
# Install dependencies
npm install
```

## Running the Application

```bash
# Development mode
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## API Integration

This frontend integrates with two microservices:

### User Service API

- `GET /users/:id` - Get user by ID
- `POST /users` - Create a new user

### Todo Service API

- `GET /todos?user_id=:userId` - Get todos for a specific user
- `POST /todos` - Create a new todo

## Project Structure

- `src/components/` - React components
  - `Header.jsx` - Application header with user info and logout
  - `Login.jsx` - Login and registration form
  - `TodoList.jsx` - Todo management interface
- `src/services/` - API integration
  - `api.js` - Service for communicating with the microservices

## Technologies Used

- React
- React Router
- Tailwind CSS
- Axios for API requests
