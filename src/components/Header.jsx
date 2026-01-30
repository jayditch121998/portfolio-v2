import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import '../styles/Header.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'About', href: '#about' },
        { label: 'Experience', href: '#experience' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ];

    return (
        <>
            <header className={`header ${scrolled ? 'scrolled' : ''}`}>
                <div className="container header-container">
                    <a href="#" className="logo">
                        Jayditch<span>.dev</span>
                    </a>

                    {/* Desktop Nav */}
                    {/* Desktop Nav */}
                    <nav className="nav-desktop">
                        {navItems.map((item) => (
                            <a key={item.label} href={item.href} className="nav-link">
                                {item.label}
                            </a>
                        ))}
                        <div style={{ marginLeft: '1rem' }}>
                            <ThemeToggle />
                        </div>
                    </nav>

                    {/* Mobile Toggle */}
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div className="mobile-only-toggle" style={{ display: 'none' }}>
                            {/* Hidden by default, handled in menu or via CSS if needed, but let's put it in the menu for now */}
                        </div>
                        <button
                            className={`mobile-toggle ${isOpen ? 'open' : ''}`}
                            onClick={toggleMenu}
                            aria-label="Toggle navigation"
                        >
                            <span className="bar"></span>
                            <span className="bar"></span>
                            <span className="bar"></span>
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <aside className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                <div className="mobile-nav-items">
                    {navItems.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className="mobile-nav-link"
                            onClick={closeMenu}
                            style={{ transitionDelay: `${index * 100}ms` }} // Stagger animation
                        >
                            {item.label}
                        </a>
                    ))}
                </div>

                <div className="mobile-menu-footer">
                    <ThemeToggle />
                </div>
            </aside>
        </>
    );
};

export default Header;
