import React, { useEffect, useRef, useState } from "react";
import shoppingCartIcon from "../assets/shopping-cart-icon.png";
import "./ShoppingCartIcon.css";

const ShoppingCartIcon = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const iconRef = useRef(null);

  useEffect(() => {
    const handleIconClick = () => {
      setDropdownVisible(!dropdownVisible);
    };

    const handleClickOutside = (event) => {
      if (iconRef.current && !iconRef.current.contains(event.target)) {
        setDropdownVisible(false);
      }
    };

    if (iconRef.current) {
      const currentIconRef = iconRef.current;
      currentIconRef.addEventListener("click", handleIconClick);
    }

    document.addEventListener("click", handleClickOutside);

    return () => {
      if (iconRef.current) {
        iconRef.current.removeEventListener("click", handleIconClick);
      }
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownVisible]);

  return (
    <div ref={iconRef} className="shopping-cart-icon-container">
      <div className="shopping-cart-icon-circle">
        <img
          src={shoppingCartIcon}
          alt="Shopping Cart"
          className="shopping-cart-icon"
        />
      </div>
      {dropdownVisible && (
        <div className="shopping-cart-dropdown">
          <div className="dropdown-header">Your Cart</div>
          <hr />
        </div>
      )}
    </div>
  );
};

export default ShoppingCartIcon;
