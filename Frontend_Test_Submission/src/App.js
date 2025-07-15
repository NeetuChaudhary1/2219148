import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShortenPage from "./pages/ShortenPage";
import StatsPage from "./pages/StatsPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ShortenPage />} />
        <Route path="/stats" element={<StatsPage />} />
        <Route path="/:shortcode" element={<ShortenPage />} />
      </Routes>
    </Router>
  );
}

export default App;
