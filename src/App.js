import React, { useState, useEffect } from 'react';
import { useVisibilityChange } from 'use-visibility-change';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Logo from "./images/Flio_Logo.PNG";
import './App.css';
import Player from './components/player';
import ReactPlayer from 'react-player';
import Stations from './components/stations';

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(50);
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
      name: "Relax 🍀",
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
      name: "Sleepy 💤",
      url: 'https://www.youtube.com/watch?v=ff5lO8TkVX8&ab_channel=Musicchill',
    },
    {
      name: "Jazz Radio 🌱",
      url: 'https://www.youtube.com/watch?v=kgx4WGK0oNU&ab_channel=%E9%98%BF%E9%B2%8DAbao',
    },
    {
      name:"Good Life 🌊",
      url:"https://www.youtube.com/embed/36YnV9STBqc"
    },
    {
      name:"Nature 💧",
      url:"https://youtu.be/6oAdJjzXQS8"
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
          url: 'https://www.youtube.com/embed/zgh4W4FMYtE',
        },
        {
          name: "Lofi Girl",
          url: 'https://www.youtube.com/embed/jfKfPfyJRdk',
        },
        {
          name: "Relax 🍀",
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
          name: "Sleepy 💤",
          url: 'https://www.youtube.com/watch?v=ff5lO8TkVX8&ab_channel=Musicchill',
        },
        {
          name: "Jazz Radio 🌱",
          url: 'https://www.youtube.com/watch?v=kgx4WGK0oNU&ab_channel=%E9%98%BF%E9%B2%8DAbao',
        },
        {
          name:"Good Life 🌊",
          url:"https://www.youtube.com/embed/36YnV9STBqc"
        },
        {
          name:"Nature 💧",
          url:"https://youtu.be/6oAdJjzXQS8"
        }
      ]));
    }
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
        name: "Relax 🍀",
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
        name: "Sleepy 💤",
        url: 'https://www.youtube.com/watch?v=ff5lO8TkVX8&ab_channel=Musicchill',
      },
      {
        name: "Jazz Radio 🌱",
        url: 'https://www.youtube.com/watch?v=kgx4WGK0oNU&ab_channel=%E9%98%BF%E9%B2%8DAbao',
      },
      {
        name:"Good Life 🌊",
        url:"https://www.youtube.com/embed/36YnV9STBqc"
      },
      {
        name:"Nature 💧",
        url:"https://youtu.be/6oAdJjzXQS8"
      }
    ])) {
      localStorage.setItem('stations', JSON.stringify(stations));
    }
  }, [stations])

  const onShow = () => {
  }
  const onHide = () => {
    if (isPlaying === true) {
      setIsPlaying(true);
    }
  }
  useVisibilityChange({ onShow, onHide });

  const { innerWidth, innerHeight } = window;
  return (
    <div className="App">
      <img id="logo" className="logoAnimation" onLoad={() => { document.getElementById("logo").classList.add('logoAnimation-active') }} src={Logo} />
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
        {innerWidth > 700 ?
          <ReactPlayer loop="true" volume={volume / 100} style={{ position: "relative", overflow: "hidden", objectFit: "cover", opacity: "100%", zIndex: "-1", bottom: "135px", left: "-10%" }} width="140vw" height="145vh" playing={isPlaying} url={currentStation.url} />
          :
          <ReactPlayer loop="true" volume={volume / 100} style={{ position: "relative", overflow: "hidden", objectFit: "cover", opacity: "100%", zIndex: "-1", bottom: "80px", left: "-150%" }} width="1800px" height="1100px" playing={isPlaying} url={currentStation.url} />
        }
      </div>
      <Stations className="stations" currentStation={currentStation} setCurrentStation={setCurrentStation} stations={stations} setStations={setStations} />
      <Player volume={volume} setVolume={setVolume} stations={stations} currentStation={currentStation} setCurrentStation={setCurrentStation} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
    </div>
  );
}

export default App;
