export const resumeData = {
    personalInfo: {
        name: "JAYDITCH BALANSI",
        title: "Full-Stack Developer & AI Automation Engineer",
        location: "Tuding Proper, Itogon, Benguet, 2604",
        phone: "(+63) 968 338 5913",
        email: "balansijayditch@gmail.com",
        linkedin: "linkedin.com/in/jayditch-b-694a521b6",
    },
    summary: `Full-stack developer with 4+ years of experience building and maintaining scalable web applications. I’ve worked on high-traffic platforms, developing robust backend systems with Node.js, Laravel, and MySQL, and crafting responsive, modern frontends using React.js and Material-UI (MUI). Skilled in designing efficient database schemas and integrating RESTful APIs.

Actively leveraging AI-driven development tools like Antigravity and Cursor to streamline full-stack engineering across both frontend and backend, while building custom AI automation solutions and multi-agent workflows to enhance productivity and streamline complex processes.`,
    skills: {
        frameworks: ["Laravel", "React.js", "Node.js", "Material UI"],
        databases: ["MySQL", "MariaDB", "MongoDB"],
        apis: ["n8n", "Make.com", "OpenAI (fine-tuning)", "RAG (Retrieval-Augmented Generation)", "AI Chatbots", "REST APIs", "Socket.io", "Automation"],
        infrastructure: ["Docker", "CI/CD", "AWS (S3, EC2, RDS, Route 53)", "Redis"],
        languages: ["PHP", "JavaScript", "Python (Learning)"],
        versionControl: ["Git", "GitHub", "GitLab"],
        aiTools: ["Antigravity", "Cursor"],
    },
    skillDescriptions: {
        frameworks: "Frontend and backend frameworks for building scalable apps.",
        databases: "Relational and document databases used in production systems.",
        apis: "Workflow automation, AI agents, and system orchestration.",
        infrastructure: "Cloud services, containerization, and deployment pipelines.",
        languages: "High-level programming languages for modern web development. Currently expanding my expertise with Python.",
        versionControl: "Source code management and team collaboration tools.",
        aiTools: "Advanced AI-powered environments like Antigravity and Cursor for accelerated Front and Back-end development.",
    },
    experience: [
        {
            company: "POP AI Technologies",
            role: "AI Automation Engineer",
            type: "Full-time | Office-based",
            period: "March 2025 - Present",
            location: "Baguio City",
            summary: "Implemented multi-agent architectures with clear role separation (intent parsing, validation, execution, and response handling) to avoid hallucination and workflow conflicts.",
            projects: [

                {
                    name: "Automation",
                    technologies: ["n8n",
                        "OpenAI fine-tuning",
                        "JavaScript",
                        "LLMs",
                        "Meta",
                        "Google (Sheet, Drive, Gmail, Calendar)",
                        "Other Third-party APIs"],
                    details: [
                        "Architected multi-agent workflows with clear role separation (intent parsing, validation, execution, response generation).",
                        "Built intent-parsing agents to strictly classify user requests (availability checks, event queries, schedule summaries) without hallucination or over-inference.",
                        "Designed and implemented agent-based workflows for real-world automation and decision-making use cases.",
                        "Implemented strict input validation and schema enforcement to prevent prompt drift and unreliable outputs.",
                        "Integrated agents with Google Calendar, Webhooks, Google Sheets, and internal APIs for live data-driven actions.",
                        "Optimized workflows to reduce latency and avoid agent overlap or duplicated execution under load."
                    ],
                },
            ],
        },
        {
            company: "New Media Services",
            role: "Programmer",
            type: "Full-time | Office-based",
            period: "August 2021 - Present",
            location: "Baguio City",
            summary: "Developed and maintained backend systems for content moderation and human resource platforms, focusing on performance, data integrity, and scalability.",
            projects: [
                {
                    name: "Content Moderation",
                    technologies: [
                        "Laravel",
                        "MySQL",
                        "Node.js",
                        "React.js",
                        "MaterialUI",
                        "Redis",
                        "Socket.io",
                        "Docker",
                        "AWS S3-Bucket",
                        "AWS SES",
                    ],
                    details: [
                        "Developed a high-performance platform to facilitate efficient content moderation.",
                        "Optimized heavy database queries to improve platform responsiveness and handle large datasets.",
                        "Created automated reporting tools to track moderation metrics and system health.",
                        "Reduced processing delays by using Redis and Socket.io for real-time communication.",
                        "Integrated AI tools through APIs to automate content flagging.",
                        "Acted as Project maintainer, participating in project meetings and key decisions.",
                        "Assisted clients with system integration and ensured smooth implementation.",
                    ],
                },
                {
                    name: "Human Resource System",
                    technologies: [
                        "Laravel",
                        "MySQL",
                        "PHP",
                        "Docker",
                        "React.js",
                        "MaterialUI",
                    ],
                    details: [
                        "Designed and developed a comprehensive HR management system (onboarding, leave, payroll, performance).",
                        "Contributed major enhancements across key HR system modules, including Employee Management, Attendance, and Finance, while helping integrate AI-driven automation.",
                        "Architected the database schema for efficient data storage and retrieval.",
                        "Ensured secure handling of sensitive employee data with optimized queries.",
                    ],
                },
                {
                    name: "Lead Generation System",
                    technologies: [
                        "Docker",
                        "Laravel",
                        "React.js",
                        "MaterialUI",
                        "Redis",
                        "MySQL",
                        "AWS SES",
                    ],
                    details: [
                        "Developed a system to automate collecting, managing, and tracking potential customer leads from multiple channels.",
                        "Designed the database schema for efficient filtering, segmentation, and reporting.",
                        "Implemented validation and deduplication logic.",
                        "Implemented Google OAuth for secure user authentication.",
                    ],
                },
                {
                    name: "Recruitment System",
                    technologies: [
                        "Laravel",
                        "React.js",
                        "MySQL",
                        "Docker",
                        "Rest APIs",
                        "MaterialUI"
                    ],
                    details: [
                        "Led the development of full-stack features to modernize the recruitment process, building intuitive user interfaces and robust backend logic.",
                        "Integrated advanced AI-driven automation to assist in filtering and evaluating candidate applications, significantly cutting down manual screening time.",
                        "Successfully bridged the platform with various third-party APIs to handle external candidate data and automated communication flows.",
                        "Collaborated on refining the recruitment pipeline, ensuring a smooth and responsive experience for both recruiters and applicants."
                    ],
                }

            ],
        },
        {
            role: "Laravel Developer | AI Automation Engineer",
            company: "iBestDesign",
            type: "Part-time | Home-based",
            period: "April 2022 - December 2025",
            location: "Canada",
            summary: "Pioneered AI integration into existing Laravel workflows and built specialized tools for media generation and social data processing.",
            projects: [
                {
                    name: "Image Generator and Editor",
                    technologies: ["Laravel", "Replicate AI", "React", "MySQL", "NextJS", "MaterialUI"],
                    details: [
                        "Users can search for YouTube thumbnails using a third-party API.",
                        "Allow users to select a region of an image and send edit instructions using Replicate AI.",
                        "Use Replicate AI to generate images based on text prompts.",
                        "Display AI-generated images in a gallery.",
                        "Users can upload images from their device.",
                    ],
                },
                {
                    name: "Instagram and Tiktok reels data fetcher and analyzer",
                    technologies: ["Meta API", "PHP", "Laravel", "React", "n8n", "OpenAI", "Third-party API"],
                    details: [
                        "Integrated Meta’s official API to search for Instagram users.",
                        "Utilized a third-party API to fetch Instagram and TikTok Reels content.",
                        "Created an n8n workflow that fetches Instagram and TikTok reels then analyzes them (extracting hooks, identifying topics, rewriting scripts, etc.).",
                        "Designed and implemented a system to search, analyze, and display Reels based on user queries.",
                        "Optimized data-fetching and AI analysis for speed and reliability.",
                    ],
                },
            ],
            otherResponsibilities: [
                "Integrated WordPress APIs to enable real-time data displays.",
                "Resolved bugs across various systems.",
                "Created comprehensive API documentation.",
                "AI integrations (OpenAI Fine-tuning, Speech to Text).",
            ],
        },
        {
            role: "Software Developer",
            company: "Jigzen Technologies",
            type: "Full-time | Home-based",
            period: "November 2020 - May 2021",
            location: "Baguio City",
            summary: "Built and maintained full-stack web applications, focusing on social platforms and robust backend infrastructure.",
            projects: [
                {
                    name: "Social Media Site",
                    technologies: ["React", "Express", "Node.js", "MongoDB"],
                    details: [
                        "Assisted in developing a full-stack social media application with real-time features.",
                        "Maintained a System.",
                        "Debugged and resolved Issues.",
                        "Added new features (video upload, file streaming).",
                    ],
                },
                {
                    name: "ERP System Development and Enhancement",
                    technologies: ["Laravel", "Bootstrap", "MySQL", "Jquery"],
                    details: [
                        "Contributed to ongoing development and maintenance.",
                        "Implemented new features to enhance system functionality.",
                    ],
                },
            ],
            otherResponsibilities: ["Code Documentation", "Assist across platforms"],
        },
        {
            role: "Independent Learner",
            company: "Personal Projects",
            type: "Self-Paced",
            period: "Ongoing",
            location: "Remote",
            summary: "Building tools to learn Python and agentic AI frameworks.",
            projects: [
                {
                    name: "Facebook Job Ad Poster",
                    technologies: ["Python", "Agno", "AI Agents"],
                    details: [
                        "Built an automated tool to post job ads on Facebook using Python.",
                        "Leveraged the Agno framework to implement agentic behaviors.",
                        "This is a learning project demonstrating initial proficiency with Python and AI agents.",
                    ]
                }
            ]
        },
    ],
    education: [
        {
            school: "Saint Louis University",
            degree: "Bachelor of Science in Information and Technology",
            period: "June 2015 - January 2020",
        },
    ],
};
