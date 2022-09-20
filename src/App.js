import React from 'react';
import "./App.css";
import Logo from './Logo';
import Hospital from './Hospital';
<<<<<<< HEAD
=======
/*import SimpleMap from './SimpleMap';*/
>>>>>>> 8eec1fe95ef4d50c9faaccfa36a3d6f67fd24d00
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