// GooglePlayButton.jsx
import React from 'react';
import './GooglePlayButton.css'; // Import the CSS file
import googlePlayIcon from '../assets/google-play-icon.png'; // Adjust the path to your assets folder

const GooglePlayButton = () => {
  return (
    <a href="#" className="google-play-button">
      <img src={googlePlayIcon} alt="Google Play" className="google-icon" />
      <div className="google-text">
        <span className="download-on">Get it on</span>
        <span className="store-name">Google Play</span>
      </div>
    </a>
  );
};

export default GooglePlayButton;