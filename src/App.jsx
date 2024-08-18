import React from "react";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import BrowseGames from "./components/BrowseGames";
import LoginIcon from "./components/LoginIcon";
import FriendsIcon from "./components/FriendsIcon";
import ShoppingCartIcon from "./components/ShoppingCartIcon";
import NotificationIcon from "./components/NotificationsIcon";
import DividerLine from "./components/DividerLine";
import SearchBar from "./components/SearchBar";
import BigBox from "./components/BigBox"; // Import BigBox
import Topbar from "./components/Topbar"; // Import Topbar

const App = () => {
  return (
    <div
      className="app-wrapper"
      style={{ overflow: "visible", WebkitAppRegion: "no-drag" }}
    >
      <Topbar /> {/* Ensure Topbar is at the top */}
      <div className="flex h-screen bg-[#0a0a0a] text-white relative">
        <Sidebar style={{ WebkitAppRegion: "no-drag" }} />

        <div className="flex-grow relative" style={{ WebkitAppRegion: "drag" }}>
          <SearchBar style={{ WebkitAppRegion: "no-drag" }} />
          <BigBox />

          <BrowseGames
            className="non-draggable-area"
            style={{
              WebkitAppRegion: "no-drag",
              marginTop: "20px",
              zIndex: "1000",
            }}
          />
        </div>

        <Footer
          className="non-draggable-area"
          style={{ WebkitAppRegion: "no-drag" }}
        />
      </div>
      <FriendsIcon
        style={{
          WebkitAppRegion: "no-drag",
          position: "absolute",
          top: "60px",
          right: "20px",
        }}
      />
      <NotificationIcon
        style={{
          WebkitAppRegion: "no-drag",
          position: "absolute",
          top: "60px",
          right: "80px",
        }}
      />
      <ShoppingCartIcon
        style={{
          WebkitAppRegion: "no-drag",
          position: "absolute",
          top: "60px",
          right: "140px",
        }}
      />
      <DividerLine
        style={{
          WebkitAppRegion: "no-drag",
          position: "absolute",
          top: "60px",
          right: "200px",
        }}
      />
      <LoginIcon />
    </div>
  );
};

export default App;