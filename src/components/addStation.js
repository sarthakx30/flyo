import React, { useState } from 'react';
import {Add} from '@mui/icons-material';

const AddStation = ({stations,setStations}) => {

    const [stationName,setStationName] = useState('');
    const [stationUrl,setStationUrl]=useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        // stations.push({name:stationName,url:stationUrl});
        // console.log({stationName,stationUrl});
        setStationName(stationName.trim());
        setStationUrl(stationUrl.trim());
        if(stationName!==null && stationName!=="" && stationUrl!==null && stationUrl!=="") setStations([...stations,{name:stationName,url:stationUrl}]);
    }

    return (
        <form style={{display:"flex",alignItems: "center",justifyContent: "center",flexDirection: "column"}} onSubmit={handleSubmit}>
            <input value={stationName} onChange={(e)=>setStationName(e.target.value)} type="text" placeholder="Add a New Station"/>
            <button style={{position:"absolute",right:70}} type="submit"><Add fontSize="large" style={{color:"blue"}} /></button>
            <input value={stationUrl} onChange={(e)=>setStationUrl(e.target.value)} type="text" placeholder="Add a New Station"/>
        </form>
    )
}

export default AddStation;