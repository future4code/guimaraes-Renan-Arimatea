import React from "react";
import {Routes, Route} from "react-router-dom"

import Home from "../pages/Home"
import Playlists from "../pages/Playlists";
import AboutUs from "../pages/AboutUs";
import ShowPlaylists from "./ShowPlaylists";
import CreatePlaylist from "./CreatePlaylist";

class Trail extends React.Component {
    render () {
        return (
            <div>
                <Routes>
                    <Route exact path="/" element={<Home/>}/>
                    <Route path="/playlists" element={<Playlists/>}/>
                    <Route path="/aboutus" element={<AboutUs/>}/>
                </Routes>
            </div>
        )
    }
}

export default Trail
