import Sidebar from 'components/common/sidebar/Sidebar';
import React from 'react';
import { FaUser } from "react-icons/fa";
import img from "assets/images/headerBg.jpg";
const Settings = () => {
    return (
        <div className="settings_component">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form action="" className="settingsForm">
                    <label htmlFor="">Profile picture</label>
                    <div className="settingsPP">
                        <img src={img} alt="" />
                        <label htmlFor="fileInput">
                        <FaUser />
                        </label>
                        <input type="file" id="fileInput" style={{display:"none"}} />
                    </div>
                    <label htmlFor="userName">User Name</label>
                    <input placeholder="your name" type="text" name="userName" id="userName" />
                    <label htmlFor="email">Your Email</label>
                    <input placeholder="email@.com" type="email" name="email" id="email" />
                    <label htmlFor="password">Password</label>
                    <input placeholder="your name" type="text" name="password" id="password" />
                    <button className="settingSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    );
};

export default Settings;