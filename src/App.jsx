import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Events from "./pages/Events"
import Register from './pages/Register';
import CINIMAX from './pages/Event Pages/Cinimax/Cinimax';
import UiUxForge from './pages/Event Pages/UI UX Forge/UiUxForge';
import PITCHXPERFECT from './pages/Event Pages/PITCHXPERFECT/PITCHXPERFECT';
import XSCAPEROOM from './pages/Event Pages/XSCAPE ROOM/XSCAPEROOM';
import VOICEVAULT from './pages/Event Pages/VOICE VAULT/VOICEVAULT';
import EPICSANDEPISODES from './pages/Event Pages/EPICS AND EPISODES/EPICSANDEPISODES';
import FROZENFRAMES from './pages/Event Pages/FROZEN FRAMES/FROZENFRAMES';
import MONTAJE from './pages/Event Pages/MONTAJE/MONTAJE';
import TECHXPLORE from './pages/Event Pages/TECHXPLORE/TECHXPLORE';
import CampusAmbassador from './pages/Event Pages/CAMPUS AMBASSADOR/CampusAmbassador';
import SprintX from './pages/Event Pages/SprintX/SprintX';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={< Events />} />
        <Route path="/register" element={<Register />} />
        {/* EVENTS */}
        <Route path="/cinimax" element={<CINIMAX />} />
        <Route path="/uiux" element={<UiUxForge />} />
        <Route path="/pitchperfect" element={<PITCHXPERFECT />} />
        <Route path="/xscaperoom" element={<XSCAPEROOM />} />
        <Route path="/voicevault" element={<VOICEVAULT />} />
        <Route path="/epicsandepisodes" element={<EPICSANDEPISODES />} />
        <Route path="/frozenframes" element={<FROZENFRAMES />} />
        <Route path="/montaje" element={<MONTAJE />} />
        <Route path="/techxplore" element={<TECHXPLORE />} />
        <Route path="/campusambassador" element={<CampusAmbassador />} />
        <Route path="/sprintx" element={<SprintX />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
