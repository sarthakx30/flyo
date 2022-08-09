import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { Add, ArrowDropDownCircleOutlined } from '@mui/icons-material';

const AddStation = ({ stations, setStations }) => {

    const [stationName, setStationName] = useState('');
    const [stationUrl, setStationUrl] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setStationName(stationName.trim());
        setStationUrl(stationUrl.trim());
        console.log(ReactPlayer.canPlay(stationUrl));
        if (stationName !== null && stationName !== "" && stationUrl !== null && stationUrl !== "" && ReactPlayer.canPlay(stationUrl)) {
            setStations([...stations, { name: stationName, url: stationUrl }]);
            setStationName('');
            setStationUrl('');
            document.getElementById("form").style.display = 'none';
            document.getElementById("addStation").style.display = "flex";
        }
        else {
            alert("Check Station Name Or URL Validity");
        }
    }

  const { innerWidth, innerHeight } = window;

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
            <form id="form" style={{ display: "none", justifyContent: "center", marginTop: "10px", alignItems: "center",flexDirection: "column", }} onSubmit={handleSubmit}>
                <p>Add from Youtube or Soundcloud</p>
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