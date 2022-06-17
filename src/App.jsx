import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './Firebase/config'
import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './components'
import { useAuthContext } from './Hooks/useAuthContext'
import { Home, Login, Signup } from "./pages"

function App() {
  const { dispatch } = useAuthContext();
  useEffect(() => {
    const cancel = onAuthStateChanged(auth, (_user) => {
      dispatch({ type: 'LOGIN', payload: _user })
    })
    return () => cancel();
  }, [])
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
