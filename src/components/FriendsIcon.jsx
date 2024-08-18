
import React, { useRef, useEffect, useState } from "react";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import "./FriendsIcon.css";

const FriendsIcon = ({ onCloseOtherDropdowns, activeDropdown }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const iconRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !iconRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    if (dropdownVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownVisible]);

  const handleIconClick = () => {
    if (!dropdownVisible) {
      onCloseOtherDropdowns(); // Close other dropdowns
    }
    setDropdownVisible(!dropdownVisible);
  };

  useEffect(() => {
    if (activeDropdown !== "friends") {
      setDropdownVisible(false);
    }
  }, [activeDropdown]);

  return (
    <div ref={iconRef} className="friends-icon-container" onClick={handleIconClick}>
      <GroupAddIcon className="friends-icon" />
      {dropdownVisible && (
        <div ref={dropdownRef} className="friends-dropdown active">
          <div className="dropdown-header">Friends</div>
          <ul>
            <li>Find Friends</li>
            <li>Friend Requests</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default FriendsIcon;
