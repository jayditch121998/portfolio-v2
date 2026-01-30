import React from 'react';
import '../styles/Contact.css'; // Reusing footer styles from Contact css

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-logo">
                    Jayditch<span>.dev</span>
                </div>
                <div className="social-links">
                    {/* Add social icons later if needed */}
                </div>
                <p style={{ color: 'var(--text-muted)' }}>&copy; {new Date().getFullYear()} Jayditch Balansi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
