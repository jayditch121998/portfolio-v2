import React from 'react';
import { resumeData } from '../data/resume';
import '../styles/Hero.css';

import FadeInSection from './FadeInSection';

const Hero = () => {
    const { name, title, summary } = resumeData.personalInfo;

    return (
        <section id="about" className="hero">
            <FadeInSection className="container hero-content">
                <h2 className="hero-subtitle">Welcome to my portfolio</h2>
                <h1 className="hero-title">
                    Hi, I'm <span className="hero-name text-gradient">{name}</span>
                </h1>
                <p className="hero-description">
                    {title}
                    <br />
                    <span style={{ fontSize: '0.9em', display: 'block', marginTop: '10px', maxWidth: '600px', marginInline: 'auto' }}>
                        Building scalable web applications and automating workflows with AI.
                    </span>
                </p>

                <div className="hero-cta">
                    <a href="#projects" className="btn btn-primary">
                        View My Work
                    </a>
                    <a href="#contact" className="btn btn-outline">
                        Contact Me
                    </a>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Hero;
