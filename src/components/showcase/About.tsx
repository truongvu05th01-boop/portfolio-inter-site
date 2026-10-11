import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Nguyen Duong Truong Vu</h3>
            <br />
            <div className="text-block">
                <p>
                    I am Truong Vu, a passionate Full-Stack developer based in Ho Chi Minh City.
                    Although I am just starting my career, I possess a deep passion for technology
                    and a product-oriented mindset.
                </p>
                <br />
                <p>
                    Thank you for taking the time to check out my portfolio. I
                    really hope you enjoy exploring it as much as I enjoyed
                    building it. If you have any questions or comments, feel
                    free to contact me using{' '}
                    <Link to="/contact">this form</Link> or shoot me an email at{' '}
                    <a href="mailto:truongvu05th01@gmail.com">
                        truongvu05th01@gmail.com
                    </a>
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    Ever since I was young, I have been curious about how things
                    work. This naturally led to a deep fascination with coding
                    and websites. I used to try to figure out how to build
                    beautiful, unique websites on my own—though without formal
                    training, it wasn't possible at the time—but that was when I
                    first truly fell in love with programming. I graduated from
                    high school in 2023, and below is a photo from my high school
                    days.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Actual photo from graduation :)
                        </sub>
                    </p>
                </div>

                <p>
                    I began programming in earnest during my university years,
                    starting with learning how to scrape data and interact with
                    websites. Subsequently, I undertook numerous group
                    projects—many alongside one of my closest friends, My. We
                    collaborated on a variety of initiatives, including
                    chatbots, games, applications, and more. You can view one of
                    these projects on my{' '}
                    <Link to="/projects/software">Software Projects</Link> page.
                </p>
                <br />
                <p>
                    In 2023, I was admitted to the Ho Chi Minh City University of
                    Technology (HUTECH) to major in Information Technology. It was
                    my top choice, and I was thrilled to study at such an
                    excellent institution. By the end of my second year, feeling I
                    hadn't yet found the right opening, I searched online for
                    opportunities; however, I felt the knowledge I had acquired
                    was not yet sufficient. I continued my studies while actively
                    seeking opportunities at events like "IT Open Day," eventually
                    shifting my focus to completing my final-year projects and
                    remaining coursework as I entered my last year.
                </p>
                <br />
                <br />
                <div style={{}}>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Hobbies</h3>
                        <br />
                        <p>
                            Beyond software, I have many other hobbies I enjoy
                            pursuing in my free time. One specific interest of mine
                            is music production; you can read more about this on
                            the dedicated page within my projects section. Other
                            hobbies include dining out, going to the movies, and—
                            unsurprisingly—playing video games.
                        </p>
                        <br />
                        <p>
                            During my university years, I was an active member of a
                            fraternity, where I had the opportunity to socialize and
                            learn a great deal of interesting and valuable things. I
                            really enjoyed being part of that group.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Me, June 2026
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for reading about me! I hope that you enjoy exploring
                    the rest of my portfolio website and everything it has to
                    offer. Good luck and have fun!
                </p>
                <br />
                <p>
                    If you have any questions or comments I would love to hear
                    them. You can reach me through the{' '}
                    <Link to="/contact">contact page</Link> or shoot me an email
                    at{' '}
                    <a href="mailto:truongvu05th01@gmail.com">
                        truongvu05th01@gmail.com
                    </a>
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
