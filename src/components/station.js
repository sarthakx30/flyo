import React from 'react';
import { DeleteOutlined } from "@mui/icons-material";

const Station = ({station,key,stations,setStations}) => {
    return (
        <>
            <p>{station.name}</p>
            <button onClick={() => {
                setStations(stations.filter((el) => el!==station))
            }}><DeleteOutlined style={{ position: "relative", left: "100px", bottom: "40px" }} /></button>
        </>
    )
}

export default Station;