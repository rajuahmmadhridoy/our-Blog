import React from "react";
import { ImFacebook } from "react-icons/im";
import {
  AiOutlineSearch,
  AiOutlineInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaPinterest } from "react-icons/fa";
import headerBg from "assets/images/headerBg.jpg";
const Sidebar = () => {
  return (
    <div className="sideBar_component">
      <div className="sidebarItem">
        <span>ABOUT ME</span>
        <img src={headerBg} alt="" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde dolorem
          non, tempore optio ratione animi! Temporibus illo doloribus libero
          dolorem vitae architecto eum cupiditate, ut dolore aut in beatae ad.
        </p>
      </div>
      <div className="sidebarItem">
        <span>CATEGORIES</span>
        <ul>
          <li>Life</li>
          <li>Music</li>
          <li>Style</li>
          <li>Sport</li>
          <li>Tech</li>
          <li>Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span>FOLLOW US</span>
        <div className="sidebarSocial">
          <a href="">
            <ImFacebook />
          </a>
          <a href="">
            <AiOutlineInstagram />
          </a>
          <a href="">
            <AiOutlineTwitter />
          </a>
          <a href="">
            <FaPinterest />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
