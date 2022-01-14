import React from 'react';
import headerBg from 'assets/images/headerBg.jpg'
const Post = () => {
    return (
        <div className="post">
            <img src={headerBg} alt="" />
            <div className="postInfo">
                <div className="postCats">
                    <span>Music</span>
                    <span>Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                </span>
                <hr />
                <span className="postDate">1 hour ago...</span>
                <p className="postDesc">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla aliquam ratione ipsum repellendus quisquam molestias excepturi, totam expedita eligendi facere perferendis ut consequuntur! Excepturi in, mollitia blanditiis atque aut nisi
                </p>
            </div>
        </div>
    );
};

export default Post;