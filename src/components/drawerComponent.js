import React, { useState } from 'react';
import Drawer from 'react-modern-drawer';
import 'react-modern-drawer/dist/index.css';
import { MenuRounded } from '@mui/icons-material';
import AddStation from './addStation';
import Station from './station';

const DrawerComponent = ({ currentStation, setCurrentStation, stations, setStations }) => {
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }
    return (
        <>
            <button
                style={{ position: "absolute", top: "60px", right: "20px" }}
                onClick={toggleDrawer}
            >
                <MenuRounded fontSize="large"
                    style={{
                        color: "#99c5eb",
                        filter: "drop-shadow(0px 1px 3px #47a0ee)"
                    }} />
            </button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                size="200px"
                style={{
                    background:"transparent",
                    paddingRight: "12px",
                }}
            >
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
            </Drawer>
        </>
    )
}

export default DrawerComponent;