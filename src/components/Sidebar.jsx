import React from "react";
import { Avatar } from "@material-ui/core";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => {
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>
        {topic}
      </p>
    </div>;
  };

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="../assets/batman.jpg" alt="batman" />
        <Avatar className="sidebar__avatar" />
        <h3>Abhishek</h3>
        <h4>Founder of Cluster Community</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">54673</p>
        </div>

        <div className="sidebar__stat">
          <p>Views on your Post</p>
          <p className="sidebar__statNumber">54673</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("Programming")}
        {recentItem("Elon Musk")}
        {recentItem("STeve Jobs")}
        {recentItem("Abhishek")}
          
      </div>
    </div>
  );
}

export default Sidebar;
