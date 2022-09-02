import React, { useState, useEffect } from 'react';
import { AlarmOutlined, CropLandscapeOutlined } from "@mui/icons-material";
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

const Timer = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const initialMinutes = 0, initialSeconds = 5;
    const [minutes, setMinutes] = useState(initialMinutes);
    const [seconds, setSeconds] = useState(initialSeconds);
    const [count, setCount] = useState(0);
    const [playState, setPlayState] = useState(false);
    const [timerState, setTimerState] = useState('work');
    const [timerStarted, setTimerStarted] = useState(false);

    // useEffect(() => {
    //     if (playState && count < 4) {
    //         let myInterval = setInterval(() => {
    //             if (seconds > 0) {
    //                 setSeconds(seconds - 1);
    //             }
    //             if (seconds === 0) {
    //                 if (minutes === 0) {
    //                     if (timerState === 'work') {
    //                         setTimerState('rest');
    //                         setMinutes(0);
    //                         setSeconds(3);
    //                         setCount(count + 1);
    //                     }
    //                     else {
    //                         setTimerState('work');
    //                         setMinutes(0);
    //                         setSeconds(5);
    //                     }
    //                 } else {
    //                     setMinutes(minutes - 1);
    //                     setSeconds(59);
    //                 }
    //             }
    //         }, 1000)
    //         return () => {
    //             clearInterval(myInterval);
    //         };
    //     }
    //     else {
    //         if (count === 4) {
    //             document.getElementById("timer").style.animationPlayState = 'paused';
    //             document.getElementById('mask').style.animationPlayState = 'paused';
    //             setPlayState(false);
    //             setTimerStarted(false);
    //             setTimerState('work');
    //             setCount(0);
    //             setMinutes(0);
    //             setSeconds(5);
    //         }
    //     }
    // });

    // useEffect(() => {
    //     if (timerState === 'work') {
    //         document.getElementById("timer").style.animationDuration = '5s';
    //         document.getElementById("mask").style.animationDuration = '5s';
    //         document.getElementById('timer').style.background = "-webkit-linear-gradient(left, skyBlue 50%, white 50%)";
    //     }
    //     else {
    //         document.getElementById("timer").style.animationDuration = '3s';
    //         document.getElementById("mask").style.animationDuration = '3s';
    //         document.getElementById('timer').style.background = "-webkit-linear-gradient(left, red 50%, white 50%)";
    //         document.getElementById('mask').style.background = "-webkit-linear-gradient(left, red 50%, white 50%)";
    //     }
    // }, [timerState]);

    const timeLeft = ({ remainingTime }) => {
        let minutes = Math.floor(remainingTime / 60)
        let seconds = remainingTime % 60
        seconds = seconds < 10 ? `0${seconds}` : seconds
        return `${minutes}:${seconds}`
    }

    const [timerColors, setTimerColors] = useState(['#004777', '#F7B801', '#A30000', '#A30000']);

    const [key, setKey] = useState(0);

    return (
        <>
            <button
                onClick={toggleDrawer}
                style={{ position: 'absolute', top: 150, right: '20px', zIndex: 50 }}>
                <AlarmOutlined fontSize="large" style={{
                    color: "#99c5eb",
                    filter: "drop-shadow(0px 1px 3px #47a0ee)"
                }} />
            </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='top'
                size="250px"
            >
                <div style={{ display: 'flex', justifyContent: 'center', position: 'relative', top: '5px' }}>
                    <CountdownCircleTimer
                        key={key}
                        isPlaying={playState}
                        duration={seconds}
                        colors={timerColors}
                        colorsTime={[7, 5, 2, 0]}
                        size={240}
                        // shouldRepeat={true}
                        onComplete={() => {
                            if (count < 4) {
                                if (timerState === 'work') {
                                    setCount(count + 1);
                                    setTimerState('rest');
                                    setSeconds(seconds + 3);
                                    setTimerColors(['#0000FF', '#0000FF', '#0000FF', '#0000FF']);
                                }
                                else {
                                    setTimerState('work');
                                    setSeconds(seconds + 5);
                                    setTimerColors(['#004777', '#F7B801', '#A30000', '#A30000']);
                                }
                                return { shouldRepeat: true }
                            }
                            else {
                                setCount(0);
                                setSeconds(seconds + 5);
                                setPlayState(false);
                                setTimerStarted(false);
                                return { shouldRepeat: true }
                            }
                        }}
                    >
                        {timeLeft}
                    </CountdownCircleTimer>
                    <div style={{ position: "absolute", top: '30px' }}>
                        <p style={{ color: 'black' }}>
                            Work Burst Counter : {count}
                        </p>
                        <p style={{ color: 'black' }}>
                            {playState ? 'Session Started' : timerStarted ? 'Session Paused' : 'Start The Session'}
                        </p>
                        <p style={{ color: 'black' }}>
                            {timerState}
                        </p>
                        <button style={{ color: 'black', background: 'yellow', position: 'relative', top: '10px' }}
                            onClick={() => {
                                setTimerStarted(true);
                                setPlayState(!playState);
                                // if (count === 0) setSeconds(seconds+5);
                            }}
                        >
                            {playState ? 'Pause' : 'Play'}
                        </button>
                    </div>
                </div>
            </Drawer>
        </>
    );
}

export default Timer;