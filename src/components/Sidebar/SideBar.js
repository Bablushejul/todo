import React from "react";
import { FaUser, FaThList, FaShare } from "react-icons/fa";

import "./Sidebar.css";

const SideBar = () => {
  return (
    <div className="left__block">
      <div style={{ textAlign: "center", height: "10vh" }}>
        <h1>
          <FaUser />
          Name
        </h1>
      </div>
      <div style={{ height: "70vh" }}>
        <h1>
          <FaThList />
          Home
        </h1>
        <h1>
          <FaShare />
          Section 1
        </h1>
        <h1>
          <FaShare />
          Section 2
        </h1>
        <h1>
          <FaShare />
          Section 8
        </h1>
        <h1>
          <FaShare />
          Section 8
        </h1>
      </div>
      <div>
        <span
          style={{
            display: "felx",
            float: "left",
            width: "5vw",
            marginRight: "20px",
            border: "2px solid #808080",
            background: "#808080",
          }}
        >
          <h2>$0.90</h2>
        </span>
        <span
          style={{
            display: "felx",
            float: "left",
            width: "8vw",
            marginRight: "20px",
            border: "2px solid #808080",
            background: "#808080",
          }}
        >
          <h2>Buy XYZ</h2>
        </span>
      </div>
    </div>
  );
};

export default SideBar;
