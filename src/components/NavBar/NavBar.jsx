import { Link } from 'react-router-dom'
import styles from "./NavBar.module.css"

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul className="link">
          Welcome, {user.name}
          <Link to="/profiles" 
            style={{ textDecoration: 'none' }}>Profiles</Link>
          <Link to="/decks-index" 
            style={{ textDecoration: 'none'}}>Deck Page</Link>
          <Link to="/new-deck" 
            style={{ textDecoration: 'none' }}>Build Deck</Link>
          <Link to="/changePassword" 
            style={{ textDecoration: 'none' }}>Change Password</Link>
          <Link to="" onClick={handleLogout} 
            style={{ textDecoration: 'none' }}>LOG OUT</Link>
        </ul>
        :
        <ul className="link">
          <Link to="/decks-index" 
          style={{ textDecoration: 'none' }}>Deck Page</Link>
          <Link to="/login" 
          style={{ textDecoration: 'none' }}>Log In</Link>
          <Link to="/signup" 
          style={{ textDecoration: 'none' }}>Sign Up</Link>
        </ul>
      }
    </nav>
  )
}

export default NavBar