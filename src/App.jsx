import { useState } from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Course from "./component/Course";
import Playlists from "./component/Playlists";
import PlaylistDetail from "./component/PlaylistDetail";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <h2>Redux Learning</h2>
          <nav>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/playlist"}>Playlist</NavLink>
          </nav>
        </header>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/course" element={<Course />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/playlist" element={<PlaylistDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
