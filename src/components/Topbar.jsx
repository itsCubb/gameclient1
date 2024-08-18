import React from 'react';
import './Topbar.css';

const Topbar = () => {
  const handleMinimize = () => {
    window.api.minimizeWindow();
  };

  const handleClose = () => {
    window.api.closeWindow();
  };

  return (
    <div className="topbar">
      <div className="window-controls">
        <button onClick={handleMinimize} className="minimize-btn">-</button>
        <button onClick={handleClose} className="close-btn">x</button>
      </div>
    </div>
  );
};

export default Topbar;