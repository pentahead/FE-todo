import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Login from './components/Login';
import TodoList from './components/TodoList';
import { userApi } from './services/api';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is already logged in with valid token
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('todoAppToken');
      if (token) {
        try {
          const userData = await userApi.verifyToken(token);
          setUser(userData);
        } catch (error) {
          console.error('Invalid token:', error);
          localStorage.removeItem('todoAppToken');
        }
      }
      setLoading(false);
    };
    
    checkAuth();
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    // Store token instead of user data
    localStorage.setItem('todoAppToken', userData.token);
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('todoAppToken');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header user={user} onLogout={handleLogout} />
      
      <main className="py-6">
        {!user ? (
          <Login onLogin={handleLogin} />
        ) : (
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        )}
      </main>
    </div>
  );
}

export default App;
