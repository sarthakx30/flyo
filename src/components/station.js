import React, { useState } from 'react';
import { DeleteOutlined } from "@mui/icons-material";

const Station = ({currentStation, setCurrentStation, station, key, stations, setStations }) => {
    const [active, setActive] = useState(false);
    return (
        <div
            style={{ display: "flex" }}>
            <p
                // style={{ color: "grey", "&:focus":{color:"white"} }}
                className={active ? "active" : "notActive"}
                onClick={() => {
                    setCurrentStation(station)
                    // stations.map((el)=>{
                    //     if(el===station){
                    //         setActive(false)
                    //     }
                    // })
                    // setActive(true)
                }}
                onMouseEnter={() => {
                    setActive(true);
                }}
                onMouseLeave={() => {
                    setActive(false);
                }}
            >{station.name}</p>
            <button onClick={() => {
                setStations(stations.filter((el) => el !== station))
            }}><DeleteOutlined style={{color:"rgb(167, 227, 222)",filter: "drop-shadow(0px 2px 2px rgb(0, 255,234)"}} /></button>
        </div>
    )
}

export default Station;