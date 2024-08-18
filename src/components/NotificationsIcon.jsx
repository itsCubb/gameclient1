import React, { useEffect, useRef, useState } from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import "./NotificationIcon.css";

const NotificationIcon = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const iconRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleIconClick = () => {
      setDropdownVisible(!dropdownVisible);
    };

    const handleClickOutside = (event) => {
      // Close the dropdown only if the click happens outside both the icon and dropdown
      if (
        iconRef.current &&
        !iconRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    if (iconRef.current) {
      iconRef.current.addEventListener("click", handleIconClick);
    }

    // Add the event listener to detect clicks outside
    document.addEventListener("click", handleClickOutside);

    return () => {
      if (iconRef.current) {
        iconRef.current.removeEventListener("click", handleIconClick);
      }
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownVisible]);

  return (
    <div ref={iconRef} className="notification-icon-container">
      <div className="notification-icon-circle">
        <NotificationsNoneIcon className="notification-icon" />
      </div>
      {dropdownVisible && (
        <div ref={dropdownRef} className="notification-dropdown active">
          <div className="dropdown-header">Notifications</div>
          <hr />
        </div>
      )}
    </div>
  );
};

export default NotificationIcon;
