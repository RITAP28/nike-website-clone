import React from 'react';
import './AboveNav.css';

export default function Above__nav() {
    return (
        <div className="container__abovenav">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/37/Jumpman_logo.svg/1200px-Jumpman_logo.svg.png" alt="Air Jordan" />
            <ul>
                <li>Find a store</li>
                <li>|</li>
                <li>Help</li>
                <li>|</li>
                <li>Join Us</li>
                <li>|</li>
                <li>Sign in</li>
            </ul>
        </div>
    );
};