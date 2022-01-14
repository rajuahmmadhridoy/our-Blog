import Header from 'components/home/header/Header';
import TopBar from 'components/common/topBar/TopBar';
import React from 'react';
import Posts from 'components/home/posts/Posts';
import Sidebar from 'components/common/sidebar/Sidebar';

const Home = () => {
    return (
        <>
            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </>
    );
};

export default Home;