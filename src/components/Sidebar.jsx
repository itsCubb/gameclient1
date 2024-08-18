// Sidebar.jsx
import React, { useState } from 'react';
import StoreOption from './StoreOption';
import DashboardOption from './DashboardOption';
import YourGamesOption from './YourGamesOption';
import './Sidebar.css';
import logo from '../assets/Synergy Studios Logo.png'; // Adjust the path as needed

const Sidebar = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="sidebar-logo" />
      <div className="options-container"> {/* Separate container for options */}
        <div className="options-box">
          <StoreOption
            isSelected={selectedOption === 'store'}
            onClick={() => setSelectedOption('store')}
          />
          <DashboardOption
            isSelected={selectedOption === 'dashboard'}
            onClick={() => setSelectedOption('dashboard')}
          />
          <YourGamesOption
            isSelected={selectedOption === 'games'}
            onClick={() => setSelectedOption('games')}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;