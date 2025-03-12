import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Registration from './Registration';
import Profile from './Profile';

function App() {
    const [user, setUser] = useState(null);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login setUser={setUser} />} />
                <Route path="/register" element={<Registration />} />
                <Route path="/profile" element={<Profile user={user} />} />
            </Routes>
        </Router>
    );
}

export default App;
