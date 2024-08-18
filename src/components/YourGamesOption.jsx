// YourGamesOption.jsx
import React from 'react';
import './YourGamesOption.css';

const YourGamesOption = ({ isSelected, onClick }) => {
  return (
    <div className={`your-games-option ${isSelected ? 'selected' : ''}`} onClick={onClick}>
      <span className="text">Your Games</span>
      <hr className="divider" />
    </div>
  );
};

export default YourGamesOption;