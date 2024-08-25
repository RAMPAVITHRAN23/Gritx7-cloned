import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Events from "./pages/Events"
import Register from './pages/Register';
import Team from "./pages/Team"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={< Events />} />
        <Route path="/register" element={<Register />} />
        <Route path="/team" element={<Team />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
