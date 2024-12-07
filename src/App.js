import React from 'react';
import './styles/App.css'; // Import the CSS file for styles
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Auth from './components/Auth'; // Unified authentication component for login/signup
import UserDashboard from './pages/UserDashboard'; // User dashboard component
import AdminDashboard from './pages/AdminDashboard'; // Admin dashboard component
import AdminCRUD from './components/AdminCRUD'; // Import AdminCRUD component for managing products
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';  // Import CartProvider to wrap app

const App = () => {
  return (
    <CartProvider>  {/* Wrap the app with CartProvider */}
      <div className="app-container">
        {/* Background image setup */}
        <div className="background"></div> {/* Background image */}
        <div className="overlay"></div> {/* Optional overlay for readability */}

        {/* Header Component */}
        <Header />

        {/* Main Application Routes */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} /> {/* Unified Auth for Login/Signup */}
            <Route path="/user-dashboard" element={<UserDashboard />} /> {/* User Dashboard */}
            <Route path="/admin-dashboard" element={<AdminDashboard />} /> {/* Admin Dashboard */}
            <Route path="/admin/crud" element={<AdminCRUD />} /> {/* Admin CRUD Page */}
          </Routes>
        </main>

        {/* Footer Component */}
        <Footer />
      </div>
    </CartProvider>
  );
};

export default App;
