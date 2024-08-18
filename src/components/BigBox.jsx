// BigBox.jsx
import React from 'react';
import './BigBox.css';

const BigBox = ({ content }) => {
  return (
    <div className="big-box">
      {content}
    </div>
  );
};

export default BigBox;
