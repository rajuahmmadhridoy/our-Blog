import Sidebar from 'components/common/sidebar/Sidebar';
import React from 'react';
import SinglePost from '../singlePost/SinglePost';

const Single = () => {
    return (
        <div className="single_component">
            <SinglePost />
            <Sidebar />
        </div>
    );
};

export default Single;