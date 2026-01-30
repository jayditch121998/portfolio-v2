import React from 'react';
import { resumeData } from '../data/resume';
import '../styles/Projects.css';
import FadeInSection from './FadeInSection';

const Projects = () => {
    // Flatten projects from experience
    const allProjects = resumeData.experience.flatMap(exp =>
        exp.projects ? exp.projects.map(proj => ({ ...proj, company: exp.company })) : []
    );

    return (
        <section id="projects" className="section projects-section">
            <FadeInSection className="container">
                <h2 className="section-title">Featured <span className="text-gradient">Projects</span></h2>

                <div className="projects-grid">
                    {allProjects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="card-header">
                                <h3 className="card-title">{project.name}</h3>
                                <span className="project-role">{project.company}</span>
                            </div>

                            <div className="card-body">
                                <ul className="project-details">
                                    {project.details.map((detail, idx) => (
                                        <li
                                            key={idx}
                                            className={idx >= 3 ? 'desktop-hidden' : ''}
                                        >
                                            {detail}
                                        </li>
                                    ))}
                                </ul>
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
                    ))}
                </div>
            </FadeInSection>
        </section>
    );
};

export default Projects;
