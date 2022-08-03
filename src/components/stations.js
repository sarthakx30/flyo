import React, { useState, useEffect } from 'react';
import AddStation from './addStation';
import Station from './station';
import { DeleteOutlined } from "@mui/icons-material"

const Stations = ({ currentStation, setCurrentStation, stations, setStations }) => {
    console.log(stations);
    // useEffect(()=>{
    //     setStations(stations);
    // },[stations])

    return (
        <div id="stations" className="stations" onLoad={() => { document.getElementById("stations").classList.add('stations-active') }} style={{ display: "flex", flexDirection: "column", width: "50%", textAlign: "left" }}>
            {stations.map((station, index) => (
                <Station
                    className="station"
                    currentStation={currentStation}
                    setCurrentStation={setCurrentStation}
                    station={station}
                    key={index}
                    stations={stations}
                    setStations={setStations}
                />
            ))}
            <AddStation stations={stations} setStations={setStations} />
        </div>
    )
}

export default Stations;