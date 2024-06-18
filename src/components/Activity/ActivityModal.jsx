import React from 'react';
import './ActivityModal.css';
import { Bar, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

const ActivityModal = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    const chatData = JSON.parse(localStorage.getItem('chatData')) || [];

    const barData = {
        labels: chatData.map((_, index) => `Chat ${index + 1}`),
        datasets: [
            {
                label: 'Number of Chats',
                data: chatData.map(data => data.chats),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const pieData = {
        labels: chatData.map((_, index) => `Chat ${index + 1}`),
        datasets: [
            {
                data: chatData.map(data => data.chats),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                ],
            },
        ],
    };

    const options = {
        animation: {
            duration: 2000, // Animation duration in milliseconds
            easing: 'easeInOutQuad', // Animation easing function
        },
    };

    return (
        <div className="modal-backdrop">
            <div className="modal-content">
                <h2>Activity</h2>
                <div className="chart-container">
                    <Bar data={barData} options={options} />
                </div>
                <div className="chart-container">
                    <Pie data={pieData} options={options} />
                </div>
                <button className="close-button" onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default ActivityModal;
