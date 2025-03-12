import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API_URL = "http://localhost:5000";

function Login({ setUser }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async () => {
        const res = await axios.post(`${API_URL}/login`, { email, password });
        setUser(res.data);
        navigate('/profile');
    };

    return (
        <div>
            <h2>Login</h2>
            <input type="email" placeholder="Email" onChange={e => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
            <p>New user? <a href="/register">Register here</a></p>
        </div>
    );
}

export default Login;
