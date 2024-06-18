import React from 'react';
import './UserModal.css';

const UserModal = ({ show, onClose, onExit }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>User Details</h2>
                <p>Name: Test User</p>
                <p>Email: test.user@gmail.com</p>
                <button className="close-button" onClick={onClose}>Close</button>
                <button className="exit-button" onClick={onExit}>Exit</button>
            </div>
        </div>
    );
};

export default UserModal;
