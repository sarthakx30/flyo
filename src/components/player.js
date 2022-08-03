import React, { useState } from 'react';
import { PlayArrowOutlined, PauseOutlined, ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@mui/icons-material';

const Player = ({ isPlaying, setIsPlaying, currentStation, setCurrentStation, stations }) => {
    const [buttonActive, setButtonActive] = useState(false);
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
            <button onClick={goBack}><ArrowBackIosOutlined className="icon" fontSize="large" /></button>
            <button onClick={handlePlay}>
                {
                    isPlaying ? <PauseOutlined className="icon"  fontSize="large"/> : <PlayArrowOutlined className="icon"  fontSize="large"/>
                }
            </button>
            <button onClick={goForward}><ArrowForwardIosOutlined className="icon"  fontSize="large"/></button>
        </div>
    )
}

export default Player;