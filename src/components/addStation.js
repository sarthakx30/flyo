import React, { useState } from 'react';
import { Add, ArrowDropDownCircleOutlined } from '@mui/icons-material';

const AddStation = ({ stations, setStations }) => {

    const [stationName, setStationName] = useState('');
    const [stationUrl, setStationUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStationName(stationName.trim());
        setStationUrl(stationUrl.trim());
        if (stationName !== null && stationName !== "" && stationUrl !== null && stationUrl !== "") {
            setStations([...stations, { name: stationName, url: stationUrl }]);
            setStationName('');
            setStationUrl('');
            document.getElementById("form").style.display = 'none';
            document.getElementById("addStation").style.display = "flex";
        }
    }

    return (
        <div style={{ display: "flex", width: "200px" }}>
            <div id="addStation" style={{ display: "flex", alignItems: "center" }}>
                <p style={{ marginRight: "5px" }}>Add Station</p>
                <button onClick={() => {
                    document.getElementById("form").style.display = 'flex';
                    document.getElementById("addStation").style.display = "none";
                }}>
                    <ArrowDropDownCircleOutlined
                        fontSize="large"
                        style={{ color: "rgb(167, 227, 222)" }}
                    />
                </button>
            </div>
            <form id="form" style={{ display: "none", justifyContent: "center", marginTop: "10px" }} onSubmit={handleSubmit}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <input value={stationName} onChange={(e) => setStationName(e.target.value)} type="text" placeholder="Station Name" />
                    <input value={stationUrl} onChange={(e) => setStationUrl(e.target.value)} type="text" placeholder="Station URL" />
                </div>
                <button type="submit"><Add fontSize="large" style={{ color: "rgb(167, 227, 222)" }} /></button>
            </form>
        </div>
    )
}

export default AddStation;