import React, { useState } from 'react';
import LandingPage from './components/LandingPage/LandingPage';
import { Sidebar } from './components/Sidebar/Sidebar';
import { Main } from './components/Main/Main';
import './index.css';

const App = () => {
    const [showChat, setShowChat] = useState(false);

    const handleStartChat = () => {
        setShowChat(true);
    };

    return (
        <>
            {showChat ? (
                <div className="chat-container">
                    <Sidebar />
                    <Main />
                </div>
            ) : (
                <LandingPage onStartChat={handleStartChat} />
            )}
        </>
    );
};

export default App;
