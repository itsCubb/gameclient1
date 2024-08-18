import React, { useRef, useEffect, useState } from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ForumIcon from "@mui/icons-material/Forum";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SettingsIcon from "@mui/icons-material/Settings";
import SystemUpdateAltOutlinedIcon from "@mui/icons-material/SystemUpdateAltOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import AvatarModal from './AvatarModal'; // Import the modal component
import "./LoginIcon.css";

const LoginIcon = () => {
  const [dropdownActive, setDropdownActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const iconRef = useRef(null);

  const handleIconClick = () => {
    setDropdownActive(!dropdownActive);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen); // Toggle modal visibility
  };

  useEffect(() => {
    if (iconRef.current) {
      const currentIconRef = iconRef.current;
      currentIconRef.addEventListener("click", handleIconClick);

      return () => {
        if (currentIconRef) {
          currentIconRef.removeEventListener("click", handleIconClick);
        }
      };
    }
  }, [dropdownActive]);

  return (
    <div className="login-icon-wrapper">
      <div
        ref={iconRef}
        className="login-icon-container"
        onClick={toggleModal} // Open modal on click
      >
        <AccountCircle className="login-icon" />
      </div>
      <div className={`login-dropdown ${dropdownActive ? "active" : ""}`}>
        <div className="dropdown-header">
          <AccountCircle 
            className="login-icon" 
            style={{ fontSize: "60px", cursor: "pointer" }} // Add cursor pointer
            onClick={toggleModal} // Trigger modal on click
          />
          <select className="status-dropdown">
            <option value="online">🟢 Online</option>
            <option value="away">🌙 Away</option>
            <option value="busy">⛔ Busy</option>
            <option value="offline">⚪ Offline</option>
          </select>
          <ContentCopyOutlinedIcon className="copy-icon" />
        </div>
        <hr className="dropdown-divider" />
        <ul className="dropdown-options">
          <li className="dropdown-option">
            <ManageAccountsIcon className="manage-account-icon" />
            Account
            <OpenInNewIcon style={{ fontSize: "14px", marginLeft: "auto" }} />
          </li>
          <li className="dropdown-option">
            <ForumIcon className="forum-icon" />
            Forums
            <OpenInNewIcon style={{ fontSize: "14px", marginLeft: "auto" }} />
          </li>
          <li className="dropdown-option">
            <HelpOutlineOutlinedIcon className="help-icon" />
            Support
            <OpenInNewIcon style={{ fontSize: "14px", marginLeft: "auto" }} />
          </li>
          <hr className="dropdown-divider" />
          <li className="dropdown-option">
            <SystemUpdateAltOutlinedIcon className="system-update-icon" />
            Synergy Client Updates
          </li>
          <li className="dropdown-option">
            <SettingsIcon className="settings-icon" />
            Settings
          </li>
          <hr className="dropdown-divider" />
          <li className="dropdown-option">
            <LogoutOutlinedIcon className="logout-icon" />
            Sign Out
          </li>
          <li className="dropdown-option">
            <ClearOutlinedIcon className="clear-icon" />
            Exit
          </li>
        </ul>
        <hr className="dropdown-divider" />
        <div className="social-media-buttons">
          <TwitterIcon className="social-icon" />
          <FacebookIcon className="social-icon" />
          <YouTubeIcon className="social-icon" />
          <InstagramIcon className="social-icon" />
          <LinkedInIcon className="social-icon" />
        </div>
      </div>
      <AvatarModal isOpen={isModalOpen} onClose={toggleModal} /> {/* Include the modal */}
    </div>
  );
};

export default LoginIcon;
