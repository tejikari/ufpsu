import Home from './pages/Home/Home'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import

import './App.css'
import { NavBar } from './components/NavBar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App