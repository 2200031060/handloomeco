import React from 'react';

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <h2>For inquiries, please email us at info@handloomfashion.com.</h2>
      <p>Phone Number: 9876542103</p>

      <h3>Follow Us on Social Media:</h3>
      <div>
        <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <i className="fa fa-instagram" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <i className="fa fa-facebook" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <i className="fa fa-twitter" style={{ fontSize: '24px' }}></i>
        </a>
        <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" style={{ margin: '0 10px' }}>
          <i className="fa fa-linkedin" style={{ fontSize: '24px' }}></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
