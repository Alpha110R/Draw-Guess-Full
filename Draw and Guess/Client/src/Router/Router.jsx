import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";
import WelcomePage from '../components/WelcomePage/WelcomePage';
import WaitingPage from '../components/WaitingPage/WaitingPage';
import GenerateWordPage from '../components/GenerateWordPage/GenerateWordPage';
import DrawPage from '../components/DrawPage/DrawPage';
import GuessPage from '../components/GuessPage/GuessPage';

export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="waitingPage" element={<WaitingPage />} />
            <Route path="generateWordPage" element={<GenerateWordPage />} />
            <Route path="drawPage" element={<DrawPage />} />
            <Route path="guessPage" element={<GuessPage />} />
            <Route path="*" element={<WelcomePage />} />
        </Routes>
  </BrowserRouter>
  );
}
