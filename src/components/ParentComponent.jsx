import React, { useState } from 'react';
import BigBox from './BigBox';
import BrowseGames from './BrowseGames';

const ParentComponent = () => {
  const [bigBoxContent, setBigBoxContent] = useState("Default Content");

  const handleGameClick = (gameContent) => {
    setBigBoxContent(gameContent);
  };

  return (
    <div className="parent-container">
      <BigBox content={bigBoxContent} />
      <BrowseGames onGameClick={handleGameClick} />
    </div>
  );
};

export default ParentComponent;
