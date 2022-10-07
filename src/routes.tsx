import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import MainPage from "./pages/MainPage";

function Rout() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rout;