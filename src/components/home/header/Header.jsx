import React from 'react';
import headerBg from 'assets/images/headerBg.jpg'
const Header = () => {
    return (
        <div className="header_component">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleBg">Blog</span>
            </div>
            <img className="headerImg" src={headerBg} alt="" />
        </div>
    );
};

export default Header;