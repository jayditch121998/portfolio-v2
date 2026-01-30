import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { resumeData } from '../data/resume';
import '../styles/Contact.css';

import FadeInSection from './FadeInSection';

const Contact = () => {
    const { email, phone, location, linkedin } = resumeData.personalInfo;
    const [formData, setFormData] = useState({ user_name: '', user_email: '', message: '' });
    const [status, setStatus] = useState(''); // 'sending', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus('sending');

        // Construct the email params manually to ensure the sender's email is visible
        const templateParams = {
            user_name: formData.user_name,
            user_email: formData.user_email,
            subject: `Portfolio Contact from ${formData.user_name}`, // Subject line for the email
            // Append details to message so they are always visible in the body
            message: `${formData.message}\n\n--- Sender Details ---\nName: ${formData.user_name}\nEmail: ${formData.user_email}`,
        };

        // Replace with your actual Service ID, Template ID, and Public Key
        emailjs.send('service_rv4nnr9', 'template_8gffnqk', templateParams, 'TG9yRBa9iHf8T1uHn')
            .then((result) => {
                console.log(result.text);
                setStatus('success');
                setFormData({ user_name: '', user_email: '', message: '' }); // Reset form
                setTimeout(() => setStatus(''), 5000);
            }, (error) => {
                console.log(error.text);
                setStatus('error');
            });
    };

    return (
        <section id="contact" className="section contact-section">
            <FadeInSection className="container">
                <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>

                <div className="contact-wrapper">
                    {/* Contact Info Cards */}
                    <div className="contact-info-column">
                        <div className="contact-header-text">
                            <h3>Let's Work Together</h3>
                        </div>

                        <div className="contact-cards-grid">
                            <div className="contact-card">
                                <span className="icon">📧</span>
                                <div>
                                    <span className="label">Email</span>
                                    <span className="value">{email}</span>
                                </div>
                            </div>
                            <div className="contact-card">
                                <span className="icon">📱</span>
                                <div>
                                    <span className="label">Phone</span>
                                    <span className="value">{phone}</span>
                                </div>
                            </div>
                            <div className="contact-card">
                                <span className="icon">📍</span>
                                <div>
                                    <span className="label">Location</span>
                                    <span className="value">{location}</span>
                                </div>
                            </div>

                            {/* LinkedIn Card - Clickable */}
                            <a href={`https://${linkedin}`} target="_blank" rel="noreferrer" className="contact-card clickable-card">
                                <span className="icon">💼</span>
                                <div>
                                    <span className="label">LinkedIn</span>
                                    <span className="value">Connect on LinkedIn</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="contact-form-column">
                        <form onSubmit={sendEmail} className="glass-form">
                            <div className="form-group">
                                <label className="form-label">Name</label>
                                <input
                                    type="text"
                                    name="user_name"
                                    className="form-input"
                                    required
                                    placeholder="Your Name"
                                    value={formData.user_name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="user_email"
                                    className="form-input"
                                    required
                                    placeholder="your.email@example.com"
                                    value={formData.user_email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label className="form-label">Message</label>
                                <textarea
                                    name="message"
                                    className="form-textarea"
                                    required
                                    placeholder="How can I help you?"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <button type="submit" className={`submit-btn ${status}`} disabled={status === 'sending'}>
                                {status === 'sending' ? 'Sending...' : status === 'success' ? 'Message Sent!' : 'Send Message'}
                            </button>

                            {status === 'error' && <p className="error-msg">Failed to send. Please try again.</p>}
                        </form>
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Contact;
