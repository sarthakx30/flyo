import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import Player from './components/player';
import ReactPlayer from 'react-player';
import Stations from './components/stations';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [stations, setStations] = useState([
    {
      name: "Lofi Vibes",
      url: 'https://www.youtube.com/embed/-4GM6U0UteA',
    },
    {
      name: "Lofi Girl",
      url: 'https://www.youtube.com/embed/jfKfPfyJRdk',
    },
    {
      name: "SpongeBob Lofi",
      url: 'https://www.youtube.com/embed/d_t5nnK9Rn4',
    }
  ])
  const [currentStation, setCurrentStation] = useState(stations[1]);

  //Getting Stations From Local Storage
  useEffect(() => {
    if (localStorage.getItem('stations')) {
      setStations(JSON.parse(localStorage.getItem('stations')));
    }
    else {
      localStorage.setItem('stations', JSON.stringify([
        {
          name: "Lofi Vibes",
          url: 'https://www.youtube.com/embed/-4GM6U0UteA',
        },
        {
          name: "Lofi Girl",
          url: 'https://www.youtube.com/embed/jfKfPfyJRdk',
        },
        {
          name: "SpongeBob Lofi",
          url: 'https://www.youtube.com/embed/d_t5nnK9Rn4',
        }
      ]));
    }
    // console.log(JSON.parse(localStorage.getItem('stations')));
    // localStorage.setItem('stations', JSON.stringify(stations));
  }, [])


  //Writing Stations to Local Storage
  useEffect(() => {
    if (JSON.stringify(stations) !== JSON.stringify([
      {
        name: "Lofi Vibes",
        url: 'https://www.youtube.com/embed/-4GM6U0UteA',
      },
      {
        name: "Lofi Girl",
        url: 'https://www.youtube.com/embed/jfKfPfyJRdk',
      },
      {
        name: "SpongeBob Lofi",
        url: 'https://www.youtube.com/embed/d_t5nnK9Rn4',
      }
    ])) {
      localStorage.setItem('stations', JSON.stringify(stations));
    }
    // console.log(JSON.parse(localStorage.getItem('stations')));
  }, [stations])

  return (
    <div className="App">
      <div style={{background:"rgba(0,0,0,0.6)",height:"100vh",width:"100vw"}}>
        {/* <p style={{ color: "white" }}>{currentStation.name}</p> */}
        <ReactPlayer style={{position:"relative",overflow:"hidden", objectFit: "cover", opacity: "100%",zIndex:"-1",bottom:"128px" }} width="1200px" height="125vh" playing={isPlaying} url={currentStation.url} />
      </div>
      <Stations stations={stations} setStations={setStations} />
      <Player stations={stations} currentStation={currentStation} setCurrentStation={setCurrentStation} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default App;
