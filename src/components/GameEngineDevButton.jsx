// GameEngineDevButton.jsx
import React from 'react';
import './GameEngineDevButton.css'; // Import the CSS file
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode'; // Use an appropriate icon from Material UI

const GameEngineDevButton = () => {
  return (
    <a href="#" className="game-engine-dev-button">
      <DeveloperModeIcon className="dev-icon" /> {/* Use DeveloperModeIcon */}
      <div className="dev-text">
        <span className="development-status">In Development</span>
        <span className="store-name">Game Engine</span>
      </div>
    </a>
  );
};

export default GameEngineDevButton;