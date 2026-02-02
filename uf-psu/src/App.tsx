/*import Home from './pages/Home/Home.jsx'
import Board from './pages/Board/Board.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Events from './pages/Events/Events.jsx'
import Statements from './pages/Statements/Statements.jsx'*/
import { Board, Contact, Home, Events, Statements } from './index.js'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './components/NavBar.jsx'

function App() {
  return (
  <div>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/board" element={<Board />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/events" element={<Events />} />
      <Route path="/statements" element={<Statements />} />
    </Routes>
  </div>
  );
}

export default App