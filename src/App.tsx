/* eslint-disable */
import { BrowserRouter as Router, Routes, Route, BrowserRouter, useLocation } from "react-router-dom";
import React, { useEffect, useState, lazy } from "react";
import ReactGA from "react-ga4";
import ReactRouter from "react-router";

import { getData } from "./data/productList";
import { AuthProvider } from "./components/context/AuthProvider";

import "./App.css";

import Homepage from "./components/Homepage/Homepage";
import CalendarPage from "./components/Calendar/CalendarPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/">
        <AuthProvider>
          <Routes>
            <Route path={`/`} element={<Homepage />} />
            <Route path="/calendar/:spotId" element={<CalendarPage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
