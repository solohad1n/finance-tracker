import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import { Home, Login, Signup } from "./pages"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </div >
  )
}

export default App
