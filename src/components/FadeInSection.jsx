import React from 'react';
import useScrollObserver from '../hooks/useScrollObserver';

const FadeInSection = ({ children, className = '', delay = 0 }) => {
    const [ref, isVisible] = useScrollObserver();

    return (
        <div
            ref={ref}
            className={`fade-up-section ${isVisible ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default FadeInSection;
