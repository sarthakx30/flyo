import React, { useState, useRef, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Logo from "./images/Flio_Logo.PNG";
import './App.css';
import Player from './components/player';
import ReactPlayer from 'react-player';
import Stations from './components/stations';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [stations, setStations] = useState([
    {
      name: "Lofi Vibes",
      url: 'https://www.youtube.com/embed/zgh4W4FMYtE',
    },
    {
      name: "Lofi Girl",
      url: 'https://www.youtube.com/embed/jfKfPfyJRdk',
    },
    {
      name: "SpongeBob Lofi",
      url: 'https://www.youtube.com/embed/d_t5nnK9Rn4',
    },
    {
      name: "STEEZYASFUCK",
      url: "https://www.youtube.com/watch?v=-5KAN9_CzSA&ab_channel=STEEZYASFUCK"
    },
    {
      name: "Anime Lofi",
      url: 'https://www.youtube.com/watch?v=WDXPJWIgX-o&ab_channel=nostalgic',
    },
    {
      name: "ＳＬＥＥＰＹ 💤",
      url: 'https://www.youtube.com/watch?v=ff5lO8TkVX8&ab_channel=Musicchill',
    },
    {
      name: "Jazz Radio 🌱",
      url: 'https://www.youtube.com/watch?v=kgx4WGK0oNU&ab_channel=%E9%98%BF%E9%B2%8DAbao',
    }
  ])
  const [currentStation, setCurrentStation] = useState(stations[1]);
  // const [songPlaying,setSonPlaying]=useState('highlight');
  //Getting Stations From Local Storage
  useEffect(() => {
    if (localStorage.getItem('stations')) {
      setStations(JSON.parse(localStorage.getItem('stations')));
    }
    else {
      localStorage.setItem('stations', JSON.stringify([
        {
          name: "Lofi Vibes",
          url: 'https://www.youtube.com/embed/zgh4W4FMYtE',
        },
        {
          name: "Lofi Girl",
          url: 'https://www.youtube.com/embed/jfKfPfyJRdk',
        },
        {
          name: "SpongeBob Lofi",
          url: 'https://www.youtube.com/embed/d_t5nnK9Rn4',
        },
        {
          name: "STEEZYASFUCK",
          url: "https://www.youtube.com/watch?v=-5KAN9_CzSA&ab_channel=STEEZYASFUCK"
        },
        {
          name: "Anime Lofi",
          url: 'https://www.youtube.com/watch?v=WDXPJWIgX-o&ab_channel=nostalgic',
        },
        {
          name: "ＳＬＥＥＰＹ 💤",
          url: 'https://www.youtube.com/watch?v=ff5lO8TkVX8&ab_channel=Musicchill',
        },
        {
          name: "Jazz Radio 🌱",
          url: 'https://www.youtube.com/watch?v=kgx4WGK0oNU&ab_channel=%E9%98%BF%E9%B2%8DAbao',
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
        url: 'https://www.youtube.com/embed/zgh4W4FMYtE',
      },
      {
        name: "Lofi Girl",
        url: 'https://www.youtube.com/embed/jfKfPfyJRdk',
      },
      {
        name: "SpongeBob Lofi",
        url: 'https://www.youtube.com/embed/d_t5nnK9Rn4',
      },
      {
        name: "STEEZYASFUCK",
        url: "https://www.youtube.com/watch?v=-5KAN9_CzSA&ab_channel=STEEZYASFUCK"
      },
      {
        name: "Anime Lofi",
        url: 'https://www.youtube.com/watch?v=WDXPJWIgX-o&ab_channel=nostalgic',
      },
      {
        name: "ＳＬＥＥＰＹ 💤",
        url: 'https://www.youtube.com/watch?v=ff5lO8TkVX8&ab_channel=Musicchill',
      },
      {
        name: "Jazz Radio 🌱",
        url: 'https://www.youtube.com/watch?v=kgx4WGK0oNU&ab_channel=%E9%98%BF%E9%B2%8DAbao',
      }
    ])) {
      localStorage.setItem('stations', JSON.stringify(stations));
    }
    // console.log(JSON.parse(localStorage.getItem('stations')));
  }, [stations])

  const { innerWidth, innerHeight } = window;
  // console.log(innerWidth, innerHeight)

  return (
    <div className="App">
      <img id="logo" className="logoAnimation" onLoad={()=>{document.getElementById("logo").classList.add('logoAnimation-active')}} src={Logo} />
      <div style={{ background: "rgba(0,0,0,0.6)", height: "100vh", width: "100vw" }}>
        <div style={{ overflow: "hidden" }}>
          <TransitionGroup
            style={{ position: "absolute", bottom: 150, width: "100vw" }}
          >
            <CSSTransition
              key={currentStation.name}
              timeout={1000}
              classNames="playingStation"
            >
              <p className="playingStationText">{currentStation.name}</p>
            </CSSTransition>
          </TransitionGroup>
        </div>
        {innerWidth > 750 ?
          <ReactPlayer onReady={()=>{if(!isPlaying)setIsPlaying(true)}} style={{ position: "relative", overflow: "hidden", objectFit: "cover", opacity: "100%", zIndex: "-1", bottom: "135px", left: "-10%" }} width="140vw" height="145vh" playing={isPlaying} url={currentStation.url} />
          :
          <ReactPlayer style={{ position: "relative", overflow: "hidden", objectFit: "cover", opacity: "100%", zIndex: "-1", bottom: "80px", left: "-150%" }} width="1800px" height="1100px" playing={isPlaying} url={currentStation.url} />
        }
      </div>
      <Stations className="stations" currentStation={currentStation} setCurrentStation={setCurrentStation} stations={stations} setStations={setStations} />
      <Player stations={stations} currentStation={currentStation} setCurrentStation={setCurrentStation} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default App;
