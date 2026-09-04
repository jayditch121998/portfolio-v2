import React, { useState, useRef, useLayoutEffect } from 'react';
import { resumeData } from '../data/resume';
import '../styles/Projects.css';
import FadeInSection from './FadeInSection';

const ProjectCard = ({ project }) => {
    const listRef = useRef(null);
    const [hasOverflow, setHasOverflow] = useState(false);

    // Multi-domain projects size to their own content, so they never clip
    // and never need the hover-to-expand behaviour.
    const hasModules = Boolean(project.modules);

    // Measure only the content's natural scrollHeight.
    // We compare it to a fixed safe threshold (280px) which is the max space
    // available for bullets in a standard 480px card height.
    // This measurement is persistent and doesn't change when the card expands.
    useLayoutEffect(() => {
        const checkOverflow = () => {
            if (hasModules) {
                setHasOverflow(false);
                return;
            }

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
    }, [project.details, project.modules, hasModules]);

    return (
        <div className={`project-card-wrapper ${hasModules ? 'has-modules' : ''}`}>
            <div className={`project-card ${hasOverflow ? 'is-expandable' : ''}`}>
                <div className="card-header">
                    <h3 className="card-title">{project.name}</h3>
                    <span className="project-role">{project.company}</span>
                </div>

                <div className={`card-body ${hasOverflow ? 'is-overflowing' : ''}`}>
                    <div className="card-content" ref={listRef}>
                        {project.tagline && (
                            <p className="project-tagline">{project.tagline}</p>
                        )}

                        <ul className="project-details">
                            {project.details.map((detail, idx) => (
                                <li key={idx}>
                                    {detail}
                                </li>
                            ))}
                        </ul>

                        {project.modules && (
                            <div className="project-modules-row">
                                {project.modules.map((module, mIdx) => (
                                    <div className="project-module" key={mIdx}>
                                        <h4 className="module-title">{module.name}</h4>
                                        <ul className="project-details">
                                            {module.details.map((detail, idx) => (
                                                <li key={idx}>{detail}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

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
