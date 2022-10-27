import { Link } from 'react-router-dom'
import styles from "./NavBar.module.css"

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          Welcome, {user.name}
          <Link to="/profiles" 
            style={{ textDecoration: 'none', color:'white' }}>Profiles</Link>
          <Link to="/decks-index" 
            style={{ textDecoration: 'none', color:'white'}}>Deck Page</Link>
          <Link to="/new-deck" 
            style={{ textDecoration: 'none', color:'white' }}>Build Deck</Link>
          <Link to="/changePassword" 
            style={{ textDecoration: 'none', color:'white' }}>Change Password</Link>
          <Link to="" onClick={handleLogout} 
            style={{ textDecoration: 'none', color:'white' }}>LOG OUT</Link>
        </ul>
        :
        <ul className="link">
          <Link to="/decks-index" 
          style={{ textDecoration: 'none', color:'white' }}>Deck Page</Link>
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