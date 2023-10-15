import React, { useState } from 'react';
import  './LogoWithHover.css';
const LogoWithHover = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleUnhover = () => {
    setIsHovered(false);
  };

  return (
    <div className={`logo-container ${isHovered ? 'hovered' : ''}`}>
      <img
        src="your-logo.png" // Replace with your logo image source
        alt="Company Logo"
        className="logo"
        onMouseEnter={handleHover}
        onMouseLeave={handleUnhover}
      />
      {isHovered && <div className="company-name">Your Company Name</div>}
    </div>
  );
};

export default LogoWithHover;
