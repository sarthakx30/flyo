import React, { useState, useEffect } from 'react';
import AddStation from './addStation';
import Station from './station';
import { DeleteOutlined } from "@mui/icons-material"

const Stations = ({ stations, setStations }) => {
    console.log(stations);
    // useEffect(()=>{
    //     setStations(stations);
    // },[stations])
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "50%", margin: "0 auto" }}>
            {stations.map((station, index) => (
                <Station
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