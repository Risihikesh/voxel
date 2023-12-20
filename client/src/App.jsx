import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Navbar from "./components/Navbar";
import Navbar from "./components/Navbar";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
     <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <Router>
        <Routes>
          <Route path="/" element={<Home searchQuery={searchQuery} />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
