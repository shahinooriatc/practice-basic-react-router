import React from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";

const Header = () => {
    return (
        <div className="Header">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/user/:userid">User</Link>
            </li>
            <li>
                <Link to="/">Country</Link>
            </li>
           
        </div>
    );
};

export default Header;