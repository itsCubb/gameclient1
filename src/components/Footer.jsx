// Footer.jsx
import React from 'react';
import './Footer.css'; // Import the CSS file
import AppStoreButtons from './AppStoreButtons'; // Import the AppStoreButtons component

const Footer = () => {
  return (
    <footer className="footer">
      <AppStoreButtons />
    </footer>
  );
};

export default Footer;