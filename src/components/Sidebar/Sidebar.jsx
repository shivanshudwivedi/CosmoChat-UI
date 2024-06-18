import React, { useState, useContext } from 'react'; // Import useState and useContext together
import './Sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../context/context';

export const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, previousPrompts, setRecentPrompt, newChat } = useContext(Context); // Corrected imports at the top
    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    }

    return (
        <div className='sidebar'>
            <div className='top'>
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt='' />
                <div onClick={newChat} className="new-chat">
                    <img src={assets.plus_icon} alt='' />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended && (
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        {previousPrompts.map((item, index) => ( // Corrected map function to not use return statement outside of a function block
                            <div onClick={() => loadPrompt(item)} key={index} className='recent-entry'> {/* Added key prop for list items */}
                                <img src={assets.message_icon} alt='' />
                                <p>{item.slice(0, 18)}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className='bottom'>
                <div className="bottom-item">
                    <img src={assets.question_icon} alt="" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item">
                    <img src={assets.history_icon} alt="" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item">
                    <img src={assets.setting_icon} alt="" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
};
