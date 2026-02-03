import React, { useState, useRef, useLayoutEffect } from 'react';
import { resumeData } from '../data/resume';
import '../styles/Projects.css';
import FadeInSection from './FadeInSection';

const ProjectCard = ({ project }) => {
    const listRef = useRef(null);
    const [hasOverflow, setHasOverflow] = useState(false);

    // Measure only the content's natural scrollHeight.
    // We compare it to a fixed safe threshold (280px) which is the max space
    // available for bullets in a standard 480px card height.
    // This measurement is persistent and doesn't change when the card expands.
    useLayoutEffect(() => {
        const checkOverflow = () => {
            if (listRef.current) {
                const contentHeight = listRef.current.scrollHeight;
                // Threshold is based on 480px total - header (100px) - footer (100px) = ~280px
                setHasOverflow(contentHeight > 260);
            }
        };

        const timer = setTimeout(checkOverflow, 100);
        window.addEventListener('resize', checkOverflow);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', checkOverflow);
        };
    }, [project.details]);

    return (
        <div className="project-card-wrapper">
            <div className={`project-card ${hasOverflow ? 'is-expandable' : ''}`}>
                <div className="card-header">
                    <h3 className="card-title">{project.name}</h3>
                    <span className="project-role">{project.company}</span>
                </div>

                <div className={`card-body ${hasOverflow ? 'is-overflowing' : ''}`}>
                    <ul className="project-details" ref={listRef}>
                        {project.details.map((detail, idx) => (
                            <li key={idx}>
                                {detail}
                            </li>
                        ))}
                    </ul>

                    {/* The hint is absolutely positioned at the bottom of card-body */}
                    {hasOverflow && (
                        <div className="hover-hint mobile-hidden">
                            <span>Hover to see more...</span>
                        </div>
                    )}
                </div>

                <div className="card-footer">
                    <div className="tech-tags">
                        {project.technologies.map((tech, idx) => (
                            <span
                                key={idx}
                                className={`tech-badge ${idx >= 4 ? 'desktop-hidden' : ''}`}
                            >
                                {tech}
                            </span>
                        ))}

                        {project.technologies.length > 4 && (
                            <div className="tech-badge more-tech mobile-hidden">
                                +{project.technologies.length - 4}
                                <div className="tooltip">
                                    {project.technologies.slice(4).map((tech, idx) => (
                                        <span key={idx} className="tooltip-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const allProjects = resumeData.experience.flatMap(exp =>
        exp.projects ? exp.projects.map(proj => ({ ...proj, company: exp.company })) : []
    );

    return (
        <section id="projects" className="section projects-section">
            <FadeInSection className="container">
                <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>

                <div className="projects-grid">
                    {allProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </FadeInSection>
        </section>
    );
};

export default Projects;
