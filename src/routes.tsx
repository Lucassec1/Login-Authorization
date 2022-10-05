import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./Login";
import MainPage from "./MainPage";

function Rout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rout;