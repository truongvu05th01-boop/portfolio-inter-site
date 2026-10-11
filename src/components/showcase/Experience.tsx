import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Hutech</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://hutech.edu.vn/'}
                        >
                            <h4>www.hutech.edu.vn</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Frontend Developer</h3>
                        <b>
                            <p>Summer 2023 - Summer 2027</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    With the goal of training well-rounded Software Engineering professionals, the curriculum at the Faculty of Information Technology – HUTECH provides a foundation of in-depth knowledge regarding system architecture alongside practical, hands-on skills. The learning process and project implementation incorporate modern technologies such as React, Node.js, Python, and AI models.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            I have designed and developed full-stack software systems from scratch, notably architecting a real-time monitoring application capable of stably handling high-volume data streams.
                        </p>
                    </li>
                    <li>
                        <p>
                            Design and implement database architectures and RESTful APIs to enhance application availability while ensuring system quality, maintainability, and scalability in accordance with rigorous technical standards.
                        </p>
                    </li>
                    <li>
                        <p>
                            Collaborated on implementing algorithm optimization and source code refactoring for specialized projects, significantly improving software performance while eliminating unnecessary re-rendering operations and API call flows.
                        </p>
                    </li>
                    <li>
                        <p>
                            Spearheaded and implemented a centralized source code management workflow using Git/GitHub for development teams, significantly reducing the time required for new feature development, version control, bug fixing, and dependency synchronization.
                        </p>
                    </li>
                    <li>
                        <p>
                            Developed web platforms using React and integrated them directly with computer vision models (AI/Computer Vision), enabling users to interact with the system and receive data analysis results directly within web and mobile environments.
                        </p>
                    </li>
                </ul>
            </div>
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>FPT Software</h1>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href={'https://fptsoftware.com/'}
                        >
                            <h4>www.fptsoftware.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Company Tour</h3>
                        <b>
                            <p>Summer 2023</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Join the FPT Software company tour and experience a leading, professional technology work environment. Discover international-standard software development processes and the technology systems currently in active operation.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Gain insight into and directly observe the professional software project management process based on the Agile/Scrum model, as well as how engineering teams operate through Daily Stand-up meetings.
                        </p>
                    </li>
                    <li>
                        <p>
                            Analyze enterprise-scale system architecture and explore how engineers build complex UIs (using React/front-end technologies) and handle data structures for millions of users.
                        </p>
                    </li>
                    <li>
                        <p>
                            Hear from experts about solutions for algorithm optimization, data packaging, and the implementation of synchronized storage on cloud computing platforms (AWS).
                        </p>
                    </li>
                    <li>
                        <p>
                            Experience a dynamic corporate culture, understand the career path for a Full-Stack Developer, and gain practical experience to apply directly to your specialized project.
                        </p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
