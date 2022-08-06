import React, { useState, useEffect } from 'react';
import AddStation from './addStation';
import Station from './station';
import { DeleteOutlined } from "@mui/icons-material"

const Stations = ({ currentStation, setCurrentStation, stations, setStations }) => {

    return (
        <div id="stations"
            className="stations"
            style={{ display: "flex", flexDirection: "column", textAlign: "left" }}
        >
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