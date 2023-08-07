import { Routes, Route } from "react-router-dom"
import "./App.css"
import "./main.css"
import "./950.css"
import Header from "./components/Header"
import Home from "./components/Home"
import Swap from "./components/Swap"
import Launch from "./components/Launch"
import Portfolio from "./components/Portfolio"
import Errorpage from "./components/Errorpage"

function App() {
    return (
        <>
            <Header />
            <div className="background-overlay index-last theme-background-light"></div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/swap" element={<Swap />} />
                <Route path="/launch" element={<Launch />} />
                <Route path="/portfolia" element={<Portfolio />} />
                <Route path="*" element={<Errorpage />} />
            </Routes>
        </>
    )
}

export default App
