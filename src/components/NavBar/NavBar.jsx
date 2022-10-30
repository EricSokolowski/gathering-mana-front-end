import { Link } from 'react-router-dom'
import styles from "./NavBar.module.css"

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          Welcome, {user.name}
          <Link to="/decks-index" 
            style={{ textDecoration: 'none', color:'white'}}>Decks</Link>
          <Link to="/new-deck" 
            style={{ textDecoration: 'none', color:'white' }}>Build Deck</Link>
          <Link to="/change-password" 
            style={{ textDecoration: 'none', color:'white' }}>Change Password</Link>
          <Link to="" onClick={handleLogout} 
            style={{ textDecoration: 'none', color:'white' }}>LOG OUT</Link>
        </ul>
        :
        <ul className="link">
          <Link to="/login" 
          style={{ textDecoration: 'none', color:'white' }}>Log In</Link>
          <Link to="/signup" 
          style={{ textDecoration: 'none', color:'white' }}>Sign Up</Link>
        </ul>
      }
    </nav>
  )
}

export default NavBar