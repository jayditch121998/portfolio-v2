import React from 'react';
import { resumeData } from '../data/resume';
import '../styles/PersonalProjects.css';

import FadeInSection from './FadeInSection';

const PersonalProjects = () => {
    const { personalProjects } = resumeData;

    return (
        <section id="side-projects" className="section side-projects-section">
            <FadeInSection className="container">
                <h2 className="section-title">Side <span className="text-gradient">Projects</span></h2>

                <div className="side-projects-grid">
                    {personalProjects.map((project) => (
                        <article key={project.name} className="side-project-card">
                            <div className="side-project-header">
                                <h3>{project.name}</h3>
                                {project.repo && (
                                    <a href={project.repo} target="_blank" rel="noreferrer" className="side-project-link">
                                        Source ↗
                                    </a>
                                )}
                            </div>

                            <p className="side-project-description">{project.description}</p>

                            {project.highlights && (
                                <ul className="side-project-highlights">
                                    {project.highlights.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            )}

                            <div className="side-project-tech">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="side-project-tag">{tech}</span>
                                ))}
                            </div>
                        </article>
                    ))}
                </div>
            </FadeInSection>
        </section>
    );
};

export default PersonalProjects;
