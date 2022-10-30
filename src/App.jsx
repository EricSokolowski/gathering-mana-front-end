// npm modules
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import IndexPage from './pages/IndexPage/IndexPage'
import NewDeck from './pages/NewDeck/NewDeck'
import DeckDetails from './components/DeckDetails/DeckDetails'
import EditDeck from './pages/EditDeck/EditDeck'

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

  const handleUpdateDeck = async (deckData) => {
    const updatedDeck = await deckService.update(deckData)
    setDecks(decks.map((b) => deckData._id === b._id ? updatedDeck : b))
    navigate('/decks-index')
  }

  const handleDeleteDeck = async (id) => {
    const deletedDeck = await deckService.deleteDeck(id)
    setDecks(decks.filter(d => d._id !== deletedDeck._id))
    navigate('/decks-index')
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
            <ProtectedRoute user={user}>
              <IndexPage decks={decks}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/new-deck"
          element = {
            <ProtectedRoute user={user}>
              <NewDeck handleAddDeck={handleAddDeck}/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/decks/:id"
          element={
            <ProtectedRoute user={user}>
              <DeckDetails user={user} handleDeleteDeck={handleDeleteDeck} />
            </ProtectedRoute>
          }
        />
        <Route 
          path="/decks/:id/edit" 
          element={
            <ProtectedRoute user={user}>		    
              <EditDeck handleUpdateDeck={handleUpdateDeck} />	          
            </ProtectedRoute>
          }   
        />
      </Routes>
    </>
  )
}

export default App
