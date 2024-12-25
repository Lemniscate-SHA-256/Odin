import React from 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <button className="tool">Add Node</button>
      <button className="tool">Add Edge</button>
      <button className="tool">AI Suggestions</button>
      <button className="tool">Graph Settings</button>
    </aside>
  );
};

export default Sidebar;
