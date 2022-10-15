import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import Home from '../pages/Home'
import Play from '../pages/Play'
import Leaderboard from '../pages/Leaderboard'

function Main() {
    
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/home" element={<Home />} />
                <Route path="/play" element={<Play />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Main;
