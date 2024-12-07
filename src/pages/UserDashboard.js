import React from 'react';
import { useLocation } from 'react-router-dom';

const UserDashboard = () => {
  const location = useLocation();
  const email = location.state?.email || 'User'; // Retrieve email from state

  return (
    <div>
      <h2>Welcome to the User Dashboard, {email}!</h2>
      {/* Add more user-specific content here */}
    </div>
  );
};

export default UserDashboard;
