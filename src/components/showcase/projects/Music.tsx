import React, { useState } from 'react';
// @ts-ignore
import house from '../../../assets/audio/house_master.mp3';
// @ts-ignore
import edge from '../../../assets/audio/edge_unmastered.mp3';
import houseProject from '../../../assets/pictures/projects/audio/houseProject.png';
import { MusicPlayer } from '../../general';

export interface MusicProjectsProps {}

const MusicProjects: React.FC<MusicProjectsProps> = (props) => {
    const [currentSong, setCurrentSong] = useState<string>('');

    return (
        <div className="site-page-content">
            <h1>Music</h1>
            <h3>Come My Way</h3>
            <br />
            <div className="text-block">
                <p>
                    Music has been a lifelong passion of mine; I developed a love for it at the age of seven. That passion burned even brighter as I grew up and discovered Sơn Tùng M-TP—my ultimate musical idol.

His artistic journey, unwavering dedication, and innovative mindset have been an endless source of inspiration for me. Although I did not pursue a professional music career, the distinctive melodies and bold, enterprising spirit of Sơn Tùng serve as a powerful driving force, helping me overcome challenges and remain creative in my own field.

If I were to dedicate a page in my portfolio to my love for music, it would certainly be a space to celebrate his journey. Here, I share a few thoughts on my favorite songs by Sơn Tùng M-TP, and I hope you, too, can feel the incredible energy behind each of them.
                </p>
                <br />
                <p>
                    In 2026, I became deeply fascinated by the use of AI and video editing software in music. Inspired by some of my favorite tracks, I decided to try my hand at creating a complete music video.

I struggled and started over several times, unable to find a visual style and transition rhythm that I was truly happy with. Eventually, however, I succeeded in creating the piece "Come My Way," shown below.
                </p>
                <br />
                <p>
                    Below are some more recent Musical Endeavors I've been
                    working on. I hope you enjoy the music and enjoy the stories
                    behind each of the tracks.
                </p>
            </div>
            <h2>Exploring</h2>
            <br />
            <p>
                In 2026, I went through a phase of feeling deeply inspired by the unique musical style and boundless creativity of my idol, Sơn Tùng M-TP. Motivated by his artistic journey, I decided to take a stab at producing a music project of my own
            </p>
            <br />
            <p>
                I failed a few times as I wasn't really able to nail the exact style and vibe I was going for, but I ultimately ended up creating the piece below.
            </p>
            <br />

            <MusicPlayer
                src={house}
                title="Come My Way"
                subtitle="SonTung M-TP - 2026"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />

            <br />
            <br />
            <div className="captioned-image">
                <img src={houseProject} alt="" />
                <p>
                    <sub>
                        <b>Figure 1:</b> Come My Way
                    </sub>
                </p>
            </div>
            <p>
                There is so much I love about this piece. I am particularly proud of its structure and three-dimensional contrast: the playful, optimistic energy of the opening and the first climax, shifting into an emotionally charged and exhilarating transition, before plunging into the darkness of the finale and the final climax.
            </p>
            <br />
            <h2>Tim Em?</h2>
            <br />
            <p>
                Contrasting with the energy of my previous projects, Tìm em (Find You) explores a softer, more emotional side of my musical journey. This track represents a personal search for harmony and resonance. The process of refining its melodies taught me patience and the art of crafting a deep, atmospheric soundscape.
            </p>
            <br />
            <MusicPlayer
                src={edge}
                title="Tim Em"
                subtitle="HngLe - 2026"
                currentSong={currentSong}
                setCurrentSong={setCurrentSong}
            />
            <br />
            <p>
                Unlike the energetic pace of my previous projects, *Tìm em* serves as an emotional, quiet interlude in my musical journey. Written during still nights, the song carries a touch of nostalgia and personal reflection. It acts as a form of self-expression—a safe space where I can let my mind unwind and momentarily step away from the rigid logic of coding. Every sound and rhythm was carefully crafted to convey a sense of peace tinged with a hint of wistful longing. I hope that as the melody plays, you, too, will find a moment of quiet resonance.
            </p>
            <br />
        </div>
    );
};

// const styles: StyleSheetCSS = {};

export default MusicProjects;
