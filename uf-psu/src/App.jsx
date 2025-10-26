import Home from './pages/Home/Home'
import "./App.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'
import { NavBar } from './components/NavBar.jsx'

function App() {
  return (
    /*<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} /> 
      </Routes>
    </BrowserRouter>
    
    </>
    */
    <div>
      <NavBar />
    </div>
  )
}

export default App
