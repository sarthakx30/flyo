import React, { useState, useEffect } from 'react';
import { useVisibilityChange } from 'use-visibility-change';
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Logo from "./images/Flio_Logo.PNG";
import './App.css';
import Player from './components/player';
import ReactPlayer from 'react-player';
import Stations from './components/stations';
import DrawerComponent from "./components/drawerComponent";
import Timer from "./components/timer";
import { CancelRounded } from '@mui/icons-material';

function App() {
  const [firstUse, setFirstUse] = useState(false);

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
      name: "Good Life 🌊",
      url: "https://www.youtube.com/embed/36YnV9STBqc"
    },
    {
      name: "Nature 💧",
      url: "https://youtu.be/6oAdJjzXQS8"
    },
    {
      name: 'Focus 🌛',
      url: 'https://youtu.be/Jf7UIivyr9s'
    }
  ])

  const [currentStation, setCurrentStation] = useState(stations[1]);

  //Getting Stations From Local Storage
  useEffect(() => {
    if (localStorage.getItem('stations')) {
      setStations(JSON.parse(localStorage.getItem('stations')));
    }
    else {
      setFirstUse(true);
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
          name: "Good Life 🌊",
          url: "https://www.youtube.com/embed/36YnV9STBqc"
        },
        {
          name: "Nature 💧",
          url: "https://youtu.be/6oAdJjzXQS8"
        },
        {
          name: 'Focus 🌛',
          url: 'https://youtu.be/Jf7UIivyr9s'
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
        name: "Good Life 🌊",
        url: "https://www.youtube.com/embed/36YnV9STBqc"
      },
      {
        name: "Nature 💧",
        url: "https://youtu.be/6oAdJjzXQS8"
      },
      {
        name: 'Focus 🌛',
        url: 'https://youtu.be/Jf7UIivyr9s'
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
          <>
            <a href="https://www.buymeacoffee.com/sarthak30" target="_blank">
              <img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style={{ height: "50px", width: "200px", position: "absolute", bottom: "20px", right: "20px" }} />
            </a>
            <ReactPlayer loop={true} volume={volume / 100} style={{ position: "relative", overflow: "hidden", objectFit: "cover", opacity: "100%", zIndex: "-1", bottom: "135px", left: "-10%" }} width="140vw" height="145vh" playing={isPlaying} url={currentStation.url} />
            <Stations className="stations" currentStation={currentStation} setCurrentStation={setCurrentStation} stations={stations} setStations={setStations} />
            <Timer style={{position: 'absolute',top: 100,right: 50}}/>
          </>
          :
          <>
            <a href="https://www.buymeacoffee.com/sarthak30" target="_blank">
              <img src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png" alt="Buy Me A Coffee" style={{ height: "40px", width: "150px", position: "absolute", bottom: "10px", right: "20px" }} />
            </a>
            <ReactPlayer loop={true} volume={volume / 100} style={{ position: "relative", overflow: "hidden", objectFit: "cover", opacity: "100%", zIndex: "-1", bottom: "80px", left: "-150%" }} width="1800px" height="1100px" playing={isPlaying} url={currentStation.url} />
            <DrawerComponent currentStation={currentStation} setCurrentStation={setCurrentStation} stations={stations} setStations={setStations} />
            <Timer style={{}}/>
          </>
        }
      </div>
      <Player volume={volume} setVolume={setVolume} stations={stations} currentStation={currentStation} setCurrentStation={setCurrentStation} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      {firstUse ?
        <div style={{
          textAlign: 'justify',
          textJustify: 'inter-word',
          padding: '0px 20px',
          fontFamily: "'Source Code Pro', monospace",
          position: 'absolute',
          width: '250px',
          margin: '0 auto',
          top: '35%',
          left: 0,
          right: 0,
          border: '2px solid cyan',
          background: 'rgba(0,0,0,0.4)'
        }}>
          <p style={{
            color: 'rgb(167, 227, 222)',
            filter: 'drop-shadow(1px 1px 2px rgb(0, 255, 234))'
          }}>
            Welcome to Flio. A Music Player built to help you concentrate and stay focused on your work while listening to our curated selection of Stations in the background, or add your own to the playlist while using the Podomoro Timer.
          </p>
          <button
            onClick={(e) => {
              e.preventDefault();
              setFirstUse(false);
            }
            }
            style={{
              position: 'absolute',
              top: "-20px",
              right: '-25px',
            }}>
            <CancelRounded fontSize="large" style={{
              color: 'rgb(200, 20, 50)',
              filter: 'drop-shadow(0px 0px 3px rgb(200, 20, 50))'
            }} />
          </button>
        </div>
        : <></>}
    </div>
  );
}

export default App;
