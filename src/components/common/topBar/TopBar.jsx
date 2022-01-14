import React from 'react';
import { ImFacebook } from 'react-icons/im';
import {AiOutlineSearch, AiOutlineInstagram,AiOutlineTwitter } from 'react-icons/ai';
import { FaPinterest } from 'react-icons/fa';
import logo from'assets/images/clint2.png'
import { Link } from 'react-router-dom';
const TopBar = () => {
    const user = false;
    return (
        <div className="top_coponent">
            <div className="topLeft">
                <a href=""><ImFacebook /></a>
                <a href=""><AiOutlineInstagram /></a>
                <a href=""><AiOutlineTwitter /></a>
                <a href=""><FaPinterest /></a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem"><Link to="/">WRITE</Link></li>
                    <li className="topListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="topRight">
                <img src={logo} alt="" />
                <AiOutlineSearch />
            </div>
        </div>
    );
};

export default TopBar;