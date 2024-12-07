import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Auth.css'; // Import CSS

const Auth = () => {
  const [isUser, setIsUser] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login', { email, password });
    setMessage(`Welcome, ${email}!`);
    navigate(isUser ? '/user-dashboard' : '/admin-dashboard', { state: { email } });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      console.log('Sign Up', { email, password });
      setMessage(`Sign up successful! Welcome, ${email}!`);
      setTimeout(() => {
        navigate('/auth');
      }, 2000);
    } else {
      alert("Passwords don't match");
    }
  };

  return (
    <div className="auth-container">
      <h2>{isUser ? 'User' : 'Admin'} {isUser ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleLogin} className="form">
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">{isUser ? 'Login' : 'Sign Up'}</button>
      </form>

      {isUser && (
        <div>
          <h3>Not a member? Sign Up</h3>
          <form onSubmit={handleSignUp} className="form">
            <div>
              <label>Confirm Password:</label>
              <input 
                type="password" 
                value={confirmPassword} 
                onChange={(e) => setConfirmPassword(e.target.value)} 
                required 
              />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </div>
      )}

      <div>
        <h3>{isUser ? 'Admin Login' : 'User Login'}</h3>
        <button onClick={() => setIsUser(!isUser)}>
          Switch to {isUser ? 'Admin Login' : 'User Login'}
        </button>
      </div>

      {message && <p>{message}</p>}
    </div>
  );
};

export default Auth;
