// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import IndexPage from './pages/IndexPage/IndexPage'
import NewDeck from './pages/NewDeck/NewDeck'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
// services
import * as authService from './services/authService'
import * as deckService from './services/deckService'

// styles
import './App.css'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const navigate = useNavigate()
  const [decks, setDecks] = useState([])

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  const handleAddDeck = async (deckData) => {
    const newDeck = await deckService.create(deckData)
    setDecks([newDeck, ...decks])
    navigate('/decks')
  }

  useEffect(() => {
    console.log("The useEffect is running");
    const fetchAllDecks = async () => {
      console.log('The Fetch All Decks function is running')
      const data = await deckService.index()
      setDecks(data)
    }
    if (user) fetchAllDecks()
  }, [user])

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/decks-index"
          element= {
            <IndexPage decks={decks}/>
          }
        />
        <Route
          path="/new-deck"
          element = {
            <NewDeck handleAddDeck={handleAddDeck}/>
          }
        />
      </Routes>
    </>
  )
}

export default App
