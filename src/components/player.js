import React, { useState } from 'react';
import { PlayArrowOutlined, PauseOutlined, ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';

const Player = ({ isPlaying, setIsPlaying, currentStation, setCurrentStation, stations }) => {
    const handlePlay = () => {
        setIsPlaying(!isPlaying);
    }
    const goBack = () => {
        var indexOfCurrentStation = 0;
        stations.map((Station, index) => {
            if (Station.name === currentStation.name) {
                indexOfCurrentStation = index;
            }
        });
        if (indexOfCurrentStation === 0) indexOfCurrentStation = stations.length
        // console.log(indexOfCurrentStation, '->', indexOfCurrentStation - 1);
        setCurrentStation(stations[indexOfCurrentStation - 1]);
    }
    const goForward = () => {
        var indexOfCurrentStation = 0;
        stations.map((Station, index) => {
            if (Station.name === currentStation.name) {
                indexOfCurrentStation = index;
            }
        });
        // console.log(indexOfCurrentStation, '->', (indexOfCurrentStation + 1) % stations.length);
        setCurrentStation(stations[(indexOfCurrentStation + 1) % stations.length]);

    }
    return (
        <div className="player">
            <button onClick={goBack}><ArrowBackIosOutlined /></button>
            <button onClick={handlePlay}>
                {
                    isPlaying ? <PauseOutlined /> : <PlayArrowOutlined />
                }
            </button>
            <button onClick={goForward}><ArrowForwardIosOutlined /></button>
        </div>
    )
}

export default Player;