import React, { useState } from 'react';
import { resumeData } from '../data/resume';
import '../styles/Experience.css';

import FadeInSection from './FadeInSection';

const Experience = () => {
    const { skills, experience } = resumeData;
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleExpand = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="experience" className="section skills-experience">
            <FadeInSection className="container">
                <h2 className="section-title">Technical Focus & <span className="text-gradient">Experience</span></h2>

                {/* Skills Section */}
                <div className="skills-container">
                    <div className="skills-wrapper bento-grid">
                        {Object.entries(skills).map(([category, items]) => {
                            const icons = {
                                frameworks: "�️",
                                databases: "🗄️",
                                apis: "⚡",
                                infrastructure: "�️",
                                languages: "�",
                                versionControl: "🌱",
                                aiTools: "🤖"
                            };

                            const isWide = category === 'frameworks' || category === 'apis';

                            return (
                                <div key={category} className={`skill-card ${isWide ? 'bento-wide' : ''}`}>
                                    <h3 className="skill-category-title">
                                        <span className="category-icon">{icons[category]}</span>
                                        {category === 'apis' ? 'APIs & Automation' :
                                            category === 'infrastructure' ? 'Infrastructure' :
                                                category === 'aiTools' ? 'AI Development Tools' :
                                                    category.charAt(0).toUpperCase() + category.slice(1).replace(/([A-Z])/g, ' $1')}
                                    </h3>
                                    {resumeData.skillDescriptions[category] && (
                                        <p className="skill-one-liner">{resumeData.skillDescriptions[category]}</p>
                                    )}
                                    <div className="skill-tags">
                                        {items.map((skill) => (
                                            <span
                                                key={skill}
                                                className="skill-tag"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Experience Timeline */}
                <div className="timeline">
                    {experience.map((job, index) => {
                        const isExpanded = expandedIndex === index;

                        return (
                            <div
                                key={index}
                                className={`timeline-item ${isExpanded ? 'is-expanded' : ''}`}
                                onClick={() => toggleExpand(index)}
                            >
                                <div className="timeline-dot"></div>
                                <div className="timeline-content">
                                    <div className="content-header">
                                        <div className="role-meta">
                                            <h3 className="role">{job.role}</h3>
                                            <span className="company">{job.company}</span>
                                            <span className="period">{job.period}</span>
                                        </div>
                                        <div className="expand-icon">
                                            {isExpanded ? "−" : "+"}
                                        </div>
                                    </div>

                                    <div className="content-body">
                                        {!isExpanded && (
                                            <div className="preview-content">
                                                <p className="summary-text">{job.summary}</p>
                                                {job.projects && (
                                                    <p className="preview-text">
                                                        Highlights: {job.projects.slice(0, 2).map(p => p.name).join(', ')}
                                                    </p>
                                                )}
                                            </div>
                                        )}

                                        {isExpanded && (
                                            <div className="expanded-details">
                                                {job.projects && (
                                                    <div className="projects-grid-internal">
                                                        {job.projects.map((project, pIdx) => (
                                                            <div key={pIdx} className="project-detail-item">
                                                                <h4 className="project-name-small">{project.name}</h4>
                                                                <ul className="bullet-list">
                                                                    {project.details.map((detail, dIdx) => (
                                                                        <li key={dIdx}>{detail}</li>
                                                                    ))}
                                                                </ul>
                                                                <div className="project-tech-mini">
                                                                    {project.technologies.map((tech, tIdx) => (
                                                                        <span key={tIdx} className="mini-tag">{tech}</span>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {job.otherResponsibilities && (
                                                    <div className="other-resp">
                                                        <h4 className="section-subtitle">Additional Responsibilities</h4>
                                                        <ul className="bullet-list">
                                                            {job.otherResponsibilities.map((resp, rIdx) => (
                                                                <li key={rIdx}>{resp}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    <div className="content-footer">
                                        <span className="click-hint">
                                            {isExpanded ? "Click to collapse" : "Click to view details"}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </FadeInSection>
        </section>
    );
};

export default Experience;
