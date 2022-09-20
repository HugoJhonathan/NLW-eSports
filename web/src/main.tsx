import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { GameDuo } from './Components/GameDuo';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="games/:id/ads" element={<GameDuo />} />
      </Routes>
    </Router>
  </React.StrictMode>
)
