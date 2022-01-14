import React from 'react';
import { FaPinterest } from "react-icons/fa";
import img from "assets/images/headerBg.jpg";
const SinglePost = () => {
    return (
        <div className="single_post">
            <div className="singlePostWrapper">
                <img src={img} alt="" />
                    <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit, amet 
                    <div className="singlePostEdit">
                        <FaPinterest />
                        <FaPinterest />
                    </div>
                    </h1>
                <div className="singlePostInfo">
                    <span>Author: <b>Safak</b></span>
                    <span>1 hour ago</span>
                </div>
                <p className="singlePostDis">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem recusandae blanditiis, consectetur suscipit deleniti, atque iste culpa harum reprehenderit voluptate voluptas impedit sit ab optio voluptatum aliquid quasi ut laudantium?</p>
            </div>
        </div>
    );
};

export default SinglePost;