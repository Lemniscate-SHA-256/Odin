import React from 'react';

const TopBar = () => {
  return (
    <header className="top-bar">
      <div className="logo">Graph Thinking</div>
      <div className="user-profile">
        <img src="profile-pic.jpg" alt="User" />
        <span>Username</span>
      </div>
    </header>
  );
};

export default TopBar;
