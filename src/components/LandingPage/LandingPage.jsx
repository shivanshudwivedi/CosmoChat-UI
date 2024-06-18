import React from 'react';
import './LandingPage.css';
import { assets } from '../../assets/assets';

const LandingPage = ({ onStartChat }) => {
    return (
        <div className="landing-page-container">
            <h1>Welcome to CosmoChat</h1>
            <img src={assets.chatbot_icon} alt="Chatbot Icon" className="chatbot-image" />
            <button onClick={onStartChat}>
                Start Chat
            </button>
        </div>
    );
};

export default LandingPage;