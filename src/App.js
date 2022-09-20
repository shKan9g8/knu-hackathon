import React from 'react';
import "./App.css";
import Logo from './Logo';
import Hospital from './Hospital';
import SimpleMap from './SimpleMap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";


export default function App() {
    return ( 
        <BrowserRouter>
          <AnimatePresence>
            <Routes>
              <Route path="/" element={<Logo />}></Route>
              <Route path="/Main" element={<Hospital />}></Route>
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
    );
}