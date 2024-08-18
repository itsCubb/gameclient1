// AppleStoreButton.jsx
import React from 'react';
import './AppleStoreButton.css'; // Import the CSS file
import { Apple as AppleIcon } from '@mui/icons-material'; // Import AppleIcon from Material UI

const AppleStoreButton = () => {
  return (
    <a href="#" className="apple-store-button">
      <AppleIcon className="apple-icon" /> {/* Use AppleIcon */}
      <div className="apple-text">
        <span className="download-on">Download on the</span>
        <span className="store-name">App Store</span>
      </div>
    </a>
  );
};

export default AppleStoreButton;