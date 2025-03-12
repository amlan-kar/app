import React, { useState } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:5000";

function Registration() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async () => {
        await axios.post(`${API_URL}/register`, { username, email, password });
        alert('Registration successful! Please login.');
    };

    return (
        <div>
            <h2>Register</h2>
            <input type="text" placeholder="Username" onChange={e => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
}

export default Registration;
