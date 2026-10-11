import React from 'react';
import portfolioLanding from '../../../assets/pictures/projects/software/portfolioLanding.png';
import examProject from '../../../assets/pictures/projects/software/saga-repository.png';
import ResumeDownload from '../ResumeDownload';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>truongvu05th01.netlify.app</h2>
                <br />
                <p>
                    truongvu05th01.netlify.app is the website showcasing my personal projects—the very site you are visiting right now. Building this project was a source of great joy for me, while also presenting both technical and creative challenges. Early in 2026, I decided to create an interactive portfolio site to support my job search. I came up with the concept in early September and began development at the start of October. I worked on this site while simultaneously completing my final semester at school; the fact that you are reading this means the project is essentially complete!
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src={portfolioLanding}
                        alt="Portfolio landing page"
                        style={styles.image}
                    />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> Personal introduction website
                        </sub>
                    </p>
                </div>
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://truongvu05th01.netlify.app"
                        >
                            <p>
                                <b>[3D Site]</b> - truongvu05th01.netlify.app
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://henryheffernan.vercel.app/"
                        >
                            <p>
                                <b>[OS Site]</b> - henryheffernan.vercel.app
                            </p>
                        </a>
                    </li>
                    {/* GitHub links - Coming soon
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="#"
                        >
                            <p>
                                <b>[GitHub]</b> - 3D Site Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="#"
                        >
                            <p>
                                <b>[GitHub]</b> - OS Site Repository
                            </p>
                        </a>
                    </li>
                    */}
                </ul>
                <p>
                    I'm skipping over a lot of details in exchange for brevity,
                    but I do plan on doing a more in depth breakdown for those
                    interested sometime in the future.
                </p>
            </div>
            <div className="text-block">
                <h2>Online exam cheating detection system</h2>
                <br />
                <p>
                    Designed and developed a comprehensive online exam monitoring system—an automated, simple, and effective solution to ensure exam integrity. Built using Python with the PyTorch framework, the YOLOv11 model, OpenCV, and FastAPI.
                </p>
                <br />
                <div className="captioned-image">
                    <img
                        src={examProject}
                        alt="GitHub repository for the online exam cheating detection system"
                        style={styles.image}
                    />
                    <div style={{ ...styles.caption, textAlign: 'center' }}>
                        <p>
                            <sub>
                                <b>Figure 2:</b> GitHub repository for the
                                online exam cheating detection system.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    Manage project timelines and handle large-scale video/image datasets for model training.

Develop a real-time recognition architecture using YOLOv11 to detect unauthorized items (e.g., phones, documents) and the presence of a second person in the frame.

Create algorithms to process webcam streams, extract frames, and automatically trigger fraud alerts via API.

Implement optimizations for model inference performance on GPU environments, ensuring real-time processing with minimal latency.
                    overall.
                </p>
                <br />
                <h3>Links:</h3>
                <ul>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/nguyenchitu2005-jpg/Doancoso"
                        >
                            <p>
                                <b>[GitHub]</b> - Online Exam Cheating Detection System
                                Repository
                            </p>
                        </a>
                    </li>
                    <li>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://github.com/nguyenchitu2005-jpg/Doancoso/tree/main/data"
                        >
                            <p>
                                <b>[GitHub]</b> - Online Exam Cheating Detection System
                                Assets Repository
                            </p>
                        </a>
                    </li>
                </ul>
                <p>
                    Unfortunately, the system currently is not in a releasable
                    state and so there is no demo available online. If this ever
                    changes, however, a link to the system will be added here.
                </p>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    image: {
        width: '100%',
    },
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
