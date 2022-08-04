import React from 'react';
import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './Pages/home';
import Employee from './Pages/employee';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/employee-list" element={<Employee />} />
            </Routes>
        </Router>
    );
}

export default App;