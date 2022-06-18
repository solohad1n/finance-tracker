import { Routes, Route, Navigate, } from 'react-router-dom'
import { Navbar } from './components'
import { useAuthContext } from './Hooks/useAuthContext'
import { Home, Login, Signup } from "./pages"

function App() {
  const { isReady, user } = useAuthContext();
  return (
    <div className="App">
      {isReady && (
        <>
          <Navbar />
          <Routes>
            <Route path='/' element={!user ? <Navigate to='/login' /> : <Home />} />
            <Route path='/login' element={!user ? <Navigate to='/' /> : <Login />} />
            <Route path='/signup' element={!user ? <Navigate to='/login' /> : <Signup />} />
          </Routes>
        </>
      )}
    </div >
  )
}

export default App
