import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/account/Login';
import Register from './components/account/Register';
import Booking from './components/booking/Booking';

export default function App() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/booking" element={<Booking />} />
                </Routes>
            </Router>
        </>
    )
}
