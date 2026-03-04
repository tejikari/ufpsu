import Home from './pages/Home/Home'
import Contact from './pages/Contact/Contact'
import Events from './pages/Events/Events'
import Board from './pages/Board/Board'
import Statements from './pages/Statements/Statements'
import { NavBar } from './components/NavBar'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/events" element={<Events />} />
        <Route path="/board" element={<Board />} />
        <Route path="/statements" element={<Statements />} />
      </Routes>
    </BrowserRouter>


export default App