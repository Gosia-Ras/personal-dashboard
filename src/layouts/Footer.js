// Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="app-footer">
            <p>&copy; {new Date().getFullYear()} My React App</p>
            <div>
                <a href="/terms">Terms of Service</a>
                <a href="/privacy">Privacy Policy</a>
            </div>
        </footer>
    );
}

export default Footer;
