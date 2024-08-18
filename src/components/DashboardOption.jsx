// DashboardOption.jsx
import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import './DashboardOption.css';

const DashboardOption = ({ isSelected, onClick }) => {
  return (
    <div
      className={`dashboard-option ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <DashboardIcon className="icon" />
      <span className="text">Dashboard</span>
    </div>
  );
};

export default DashboardOption;