// StoreOption.jsx
import React from 'react';
import SellIcon from '@mui/icons-material/Sell';
import './StoreOption.css';

const StoreOption = ({ isSelected, onClick }) => {
  return (
    <div
      className={`store-option ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <SellIcon className="icon" />
      <span className="text">Store</span>
    </div>
  );
};

export default StoreOption;