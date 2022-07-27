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
        <div style={{ position:"absolute", left:20, top:150, display: "flex", flexDirection: "column", width: "50%",textAlign: "left"  }}>
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