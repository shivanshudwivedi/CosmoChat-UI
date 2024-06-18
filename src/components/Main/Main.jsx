import React, { useContext, useState } from 'react';
import './Main.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';
import UserModal from './UserModal';
import ActivityModal from '../Activity/ActivityModal';

export function Main() {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
    const [showUserModal, setShowUserModal] = useState(false);
    const [showActivityModal, setShowActivityModal] = useState(false);

    const handleUserIconClick = () => {
        setShowUserModal(true);
    };

    const handleActivityClick = () => {
        setShowActivityModal(true);
    };

    const handleCloseModal = () => {
        setShowUserModal(false);
        setShowActivityModal(false);
    };

    const handleExit = () => {
        window.location.reload(); // Redirects to the landing page
    };

    return (
        <div className='main'>
            <div className='nav'>
                <p>Cosmo Chat</p>
                <div className='icons'>
                    <img src={assets.activity_icon} alt='Activity Icon' className='activity-icon' onClick={handleActivityClick} />
                    <img src={assets.user_icon} alt='User Icon' className='user-icon' onClick={handleUserIconClick} />
                </div>
            </div>
            <div className='main-container'>
                {!showResult ? (
                    <>
                        <div className='greet'>
                            <p><span>Hello, User.</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming trip?</p>
                                <img src={assets.compass_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Briefly summarize the concept: urban planning</p>
                                <img src={assets.bulb_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Brainstorm team bonding activities for our work retreat</p>
                                <img src={assets.message_icon} alt="" />
                            </div>
                            <div className="card">
                                <p>Improve the reliability of the following code</p>
                                <img src={assets.code_icon} alt="" />
                            </div>
                        </div>
                    </>
                ) : (
                    <div className='result'>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? (
                                <div className="loader">
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder='Enter a prompt here'></input>
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img onClick={() => onSent()} src={assets.send_icon} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <UserModal show={showUserModal} onClose={handleCloseModal} onExit={handleExit} />
            <ActivityModal show={showActivityModal} onClose={handleCloseModal} />
        </div>
    );
}

export default Main;
