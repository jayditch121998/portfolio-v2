import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import '../styles/Chatbot.css';
import { resumeData } from '../data/resume';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { type: 'bot', text: "Hi there! I'm Jayditch's AI assistant. Ask me anything about his skills, projects, or experience!" }
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);

    const toggleChat = () => setIsOpen(!isOpen);

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const generateResponse = async (userQuery) => {
        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: [
                        ...messages.slice(-10).filter(m => m.type !== 'error').map(m => ({
                            role: m.type === 'user' ? 'user' : 'assistant',
                            content: m.text
                        })),
                        { role: "user", content: userQuery }
                    ]
                })
            });

            const data = await response.json();

            if (!response.ok || data.error) {
                console.error("API Error:", data.error || response.statusText);
                // Fallback to local logic if server fails or is offline
                return getFallbackResponse(userQuery);
            }

            return data.choices[0].message.content;

        } catch (error) {
            console.error("Chatbot Error:", error);
            // Fallback for network errors
            return getFallbackResponse(userQuery);
        }
    };

    const getFallbackResponse = (query) => {
        const lowerQuery = query.toLowerCase();

        // Greetings
        if (lowerQuery.match(/\b(hi|hello|hey|yo|greetings)\b/)) {
            return "Hello! I am currently running in offline mode. How can I help you today?";
        }

        // Contact Info
        if (lowerQuery.match(/\b(contact|email|phone|reach|location|address)\b/)) {
            const { email, phone, location } = resumeData.personalInfo || {};
            return `You can reach Jayditch via email (check resume) or find him in ${location || 'Philippines'}.`;
        }

        // Skills / Tech Stack
        if (lowerQuery.match(/\b(skill|stack|technology|tech|framework|language|tool)\b/)) {
            const allFrameworks = resumeData.skills.frameworks.join(", ");
            const allLanguages = resumeData.skills.languages.join(", ");
            return `Jayditch is proficient in:
            \n- Languages: ${allLanguages}
            \n- Frameworks: ${allFrameworks}
            \n- AI Tools: ${resumeData.skills.aiTools.join(", ")}`;
        }

        // Specific Tech Checks
        if (lowerQuery.includes('react') || lowerQuery.includes('javascript') || lowerQuery.includes('node')) {
            return "Yes! Jayditch has extensive experience with the React/Node.js ecosystem. Check out his projects section for examples.";
        }

        if (lowerQuery.includes('php') || lowerQuery.includes('laravel')) {
            return "Absolutely. Jayditch has used Laravel for several enterprise-level projects, including HR and Content Moderation systems.";
        }

        if (lowerQuery.includes('python')) {
            return "Jayditch is currently learning Python to expand his capabilities in AI and data science.";
        }

        if (lowerQuery.includes('supabase')) {
            return "Jayditch recently added Supabase to his stack! He's using it for real-time databases and modern backend-as-a-service features.";
        }

        // Expanded Projects Context from Fallback
        if (lowerQuery.match(/\b(project|portfolio|build|app|website)\b/)) {
            return "He has built various projects like a Content Moderation Platform, HR Systems, and AI Image Generators. Ask about specific stats!";
        }

        return "I'm currently offline and can only answer basic questions. Please add an OpenAI API Key to chat with my full AI brain!";
    };

    const handleSend = async () => {
        if (!inputValue.trim() || isTyping) return;

        const userText = inputValue;
        setMessages(prev => [...prev, { type: 'user', text: userText }]);
        setInputValue("");
        setIsTyping(true);

        // Process response
        const botResponse = await generateResponse(userText);

        setIsTyping(false);
        setMessages(prev => [...prev, { type: 'bot', text: botResponse }]);
    };

    return (
        <div className="chatbot-container">
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3>
                            <span className="status-dot"></span>
                            Jayditch Assistant
                        </h3>
                        <button className="close-btn" onClick={toggleChat}>&times;</button>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div key={index} className={`message ${msg.type}`}>
                                <ReactMarkdown>{msg.text}</ReactMarkdown>
                            </div>
                        ))}
                        {isTyping && (
                            <div className="typing-indicator">
                                <span className="typing-dot"></span>
                                <span className="typing-dot"></span>
                                <span className="typing-dot"></span>
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chatbot-input-area">
                        <div className="input-wrapper">
                            <input
                                type="text"
                                className="chatbot-input"
                                placeholder={isTyping ? "AI is thinking..." : "Ask a question..."}
                                value={inputValue}
                                onChange={(e) => setInputValue(e.target.value)}
                                onKeyDown={handleKeyDown}
                                disabled={isTyping}
                                maxLength={300}
                            />
                            <span className="char-count">{inputValue.length}/300</span>
                        </div>
                        <button
                            className="send-btn"
                            onClick={handleSend}
                            disabled={!inputValue.trim() || isTyping}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            )}

            <button className="chatbot-toggle" onClick={toggleChat} aria-label="Toggle Chat">
                {!isOpen && (
                    <span className="chat-tooltip">Ask the assistant!</span>
                )}
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                )}
            </button>
        </div>
    );
};

export default Chatbot;
