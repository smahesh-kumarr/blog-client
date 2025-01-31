import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Connect.css';

const Connect = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:4000/users');
                setUsers(response.data);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
        fetchUsers();
    }, []);

    const handleContactClick = (email) => {
        window.location.href = `mailto:${email}`;
    };

    return (
        <div className="connect-container">
            <h2>Connect with Other Bloggers</h2>
            <div className="users-grid">
                {users.map((user) => (
                    <div key={user._id} className="user-card">
                        <div className="user-image">
                            <img 
                                src={user.profileImage || 'https://via.placeholder.com/150'} 
                                alt={user.username}
                            />
                        </div>
                        <div className="user-info">
                            <h3>{user.username}</h3>
                            <p className="user-email">{user.email}</p>
                            <div className="user-interests">
                                <h4>Interests:</h4>
                                <div className="interests-tags">
                                    {user.interests && user.interests.map((interest, index) => (
                                        <span key={index} className="interest-tag">
                                            {interest}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <button 
                                className="contact-button"
                                onClick={() => handleContactClick(user.email)}
                            >
                                Contact
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Connect;
