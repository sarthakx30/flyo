import React, { useState, useEffect } from 'react';
import { PlayArrowOutlined, PauseOutlined, ArrowBackIosOutlined, ArrowForwardIosOutlined, VolumeUpOutlined, VolumeDownOutlined, VolumeOffOutlined, VolumeMuteOutlined } from '@mui/icons-material';

const Player = ({ volume, setVolume, isPlaying, setIsPlaying, currentStation, setCurrentStation, stations }) => {
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
            <div>
                <button onClick={goBack}><ArrowBackIosOutlined className="icon" fontSize="large" /></button>
                <button onClick={handlePlay}>
                    {
                        isPlaying ? <PauseOutlined className="icon" fontSize="large" /> : <PlayArrowOutlined className="icon" fontSize="large" />
                    }
                </button>
                <button onClick={goForward}><ArrowForwardIosOutlined className="icon" fontSize="large" /></button>
            </div>
            <div className="volumeSection">
                {
                    volume == 0 ?
                        <VolumeOffOutlined style={{
                            color: "rgb(167, 227, 222)",
                            filter: " drop-shadow(0px 1px 2px rgb(0, 255, 234))"
                        }} />
                        :
                        volume <= 20 ?
                            <VolumeMuteOutlined style={{
                                color: "rgb(167, 227, 222)",
                                filter: " drop-shadow(0px 1px 2px rgb(0, 255, 234))"
                            }} />
                            : volume <= 60 ?
                                <VolumeDownOutlined style={{
                                    color: "rgb(167, 227, 222)",
                                    filter: " drop-shadow(0px 1px 2px rgb(0, 255, 234))"
                                }} />
                                :
                                <VolumeUpOutlined style={{
                                    color: "rgb(167, 227, 222)",
                                    filter: " drop-shadow(0px 1px 2px rgb(0, 255, 234))"
                                }} />
                }
                <div className="volumeBar">
                    <input type="range" min="0" max="100" value={volume} onChange={(e) => setVolume(e.target.value)} />
                    <progress min="0" max="100" value={volume} />
                </div>
                <p style={{
                    fontSize:"20px",
                    marginBottom:"24px",
                    color: "rgb(167, 227, 222)",
                    filter: " drop-shadow(0px 1px 2px rgb(0, 255, 234))"
                }}>{volume}</p>
            </div>
        </div>
    )
}

export default Player;