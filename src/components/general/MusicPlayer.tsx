import React, { useState, useRef, useEffect } from 'react';
import PlayIcon from '../../assets/icons/play.png';
import PauseIcon from '../../assets/icons/pause.png';
import RewindIcon from '../../assets/icons/rewind.png';
import ForwardIcon from '../../assets/icons/forward.png';
import CDIcon from '../../assets/icons/cd.png';
import colors from '../../constants/colors';

import { motion, Variants } from 'framer-motion';

export interface MusicPlayerProps {
    src?: string;
    title: string;
    subtitle: string;
    currentSong: string;
    setCurrentSong: React.Dispatch<React.SetStateAction<string>>;
}

const MusicPlayer: React.FC<MusicPlayerProps> = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(
        props.src ? new Audio(props.src) : null
    );
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(1);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const updateTime = () => {
            setCurrentTime(audio.currentTime);
            setDuration(audio.duration);
            if (audio.currentTime === audio.duration) {
                setIsPlaying(false);
            }
        };

        audio.addEventListener('timeupdate', updateTime);
        return () => audio.removeEventListener('timeupdate', updateTime);
    }, []);

    const fastForward = () => {
        if (audioRef.current) audioRef.current.currentTime += 15;
    };

    const fastRewind = () => {
        if (audioRef.current) audioRef.current.currentTime = 0;
    };

    const togglePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            setIsPlaying(false);
        } else {
            setIsPlaying(true);
            props.setCurrentSong(props.title);
        }
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (props.currentSong === props.title) {
            audio.play();
            setIsPlaying(true);
        } else {
            audio.pause();
            setIsPlaying(false);
        }
    }, [props.currentSong, props.title]);

    // format current time
    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time - minutes * 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        if (isPlaying) audio.play();
        else audio.pause();
    }, [isPlaying]);

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        audio.currentTime = 0;
        return () => {
            audio.pause();
        };
    }, []);

    return (
        <div
            style={styles.musicPlayerContainer}
            className="music-controller-container "
        >
            <div style={styles.playerStart}>
                <div>
                    <motion.img
                        variants={vars}
                        animate={isPlaying ? 'play' : 'pause'}
                        src={CDIcon}
                        style={
                            audioRef.current
                                ? styles.cd
                                : Object.assign({}, styles.cd, styles.disabledControl)
                        }
                        onMouseDown={audioRef.current ? togglePlay : undefined}
                        alt=""
                    />
                </div>
            </div>
            <div style={styles.playerInfo}>
                <div style={styles.progressContainer}>
                    <p style={styles.time}>
                        <b>{formatTime(currentTime)}</b>
                    </p>

                    <div style={styles.progressBarContainer}>
                        <div
                            style={Object.assign({}, styles.progress, {
                                // transform scaleX = currentTime / duration
                                transform: `scaleX(${currentTime / duration})`,
                            })}
                        />
                    </div>
                    <p style={styles.time}>
                        <b>{duration === 1 ? '..:..' : formatTime(duration)}</b>
                    </p>
                </div>
                <div style={styles.playerBottom}>
                    <div style={styles.info}>
                        <h3>{props.title}</h3>
                        <p>{props.subtitle}</p>
                    </div>
                    <div style={styles.playerControls}>
                        <div
                            style={
                                audioRef.current
                                    ? styles.controlButton
                                    : Object.assign(
                                          {},
                                          styles.controlButton,
                                          styles.disabledControl
                                      )
                            }
                            className="site-button"
                            onMouseDown={audioRef.current ? fastRewind : undefined}
                            aria-disabled={!audioRef.current}
                        >
                            <img
                                src={RewindIcon}
                                style={styles.controlIcon}
                                alt=""
                            />
                        </div>
                        <div
                            style={
                                audioRef.current
                                    ? styles.controlButton
                                    : Object.assign(
                                          {},
                                          styles.controlButton,
                                          styles.disabledControl
                                      )
                            }
                            className="site-button"
                            onMouseDown={audioRef.current ? togglePlay : undefined}
                            aria-disabled={!audioRef.current}
                        >
                            <img
                                src={isPlaying ? PauseIcon : PlayIcon}
                                style={styles.controlIcon}
                                alt=""
                            />
                        </div>
                        <div
                            style={
                                audioRef.current
                                    ? styles.controlButton
                                    : Object.assign(
                                          {},
                                          styles.controlButton,
                                          styles.disabledControl
                                      )
                            }
                            className="site-button"
                            onMouseDown={audioRef.current ? fastForward : undefined}
                            aria-disabled={!audioRef.current}
                        >
                            <img
                                src={ForwardIcon}
                                style={styles.controlIcon}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const vars: Variants = {
    play: {
        rotate: 360,
        transition: { repeat: Infinity, duration: 0.9, ease: 'linear' },
    },
    pause: {
        rotate: -360,
        transition: {
            duration: 0.6,
            ease: 'easeOut',
        },
    },
};

const styles: StyleSheetCSS = {
    musicPlayerContainer: {
        flexDirection: 'row',
        width: '100%',
        borderRadius: 4,
    },
    playerControls: {
        justifyContent: 'center',
        alignItems: 'center',
        background: 'red',
    },
    progress: {
        width: '100%',
        transform: `scaleX(0)`,
        height: 6,
        background: colors.black,
        transformOrigin: 'left',
    },
    progressBarContainer: {
        width: '100%',
        height: 6,
        background: colors.lightGray,
        marginLeft: 8,
        marginRight: 8,
    },
    progressContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    playerInfo: {
        flex: 1,
        overflow: 'hidden',
        border: `1px solid ${colors.darkGray}`,
        borderTopWidth: 0,
        flexDirection: 'column',
        borderBottomWidth: 0,
        padding: 16,
        paddingTop: 18,
    },
    info: {
        flexDirection: 'column',
    },
    playerBottom: {
        paddingTop: 2,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    playerStart: {
        flexShrink: 1,

        justifyContent: 'center',
        alignItems: 'center',
        width: 96,
    },
    controlButton: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    controlIcon: {
        width: 20,
        height: 20,
    },
    time: {
        fontSize: 14,
    },
    cd: {
        width: 56,
        height: 56,
        cursor: 'pointer',
    },
    disabledControl: {
        cursor: 'not-allowed',
        opacity: 0.55,
        pointerEvents: 'none',
    },
};

export default MusicPlayer;
