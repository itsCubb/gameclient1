// AppStoreButtons.jsx
import React from 'react';
import './AppStoreButtons.css'; // Import the CSS file
import AppleStoreButton from './AppleStoreButton';
import GooglePlayButton from './GooglePlayButton';
import GameEngineDevButton from './GameEngineDevButton'; // Import the new GameEngineDevButton

const AppStoreButtons = () => {
  return (
    <div className="app-store-buttons" style={{ '-webkit-app-region': 'no-drag' }}>
      <AppleStoreButton />
      <GooglePlayButton />
      <GameEngineDevButton /> {/* Add the new button */}
    </div>
  );
};

export default AppStoreButtons;