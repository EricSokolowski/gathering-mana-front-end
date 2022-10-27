import { Link } from 'react-router-dom'
import styles from "./NavBar.module.css"

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          <li>Welcome, {user.name}</li>
          <li><Link to="/profiles">Profiles</Link></li>
          <li><Link to="" onClick={handleLogout}>LOG OUT</Link></li>
          <li><Link to="/changePassword">Change Password</Link></li>
          <li><Link to="/new-deck">Build Deck</Link></li>
          <li><Link to="/decks-index">Deck Page</Link></li>
        </ul>
        :
        <ul>
          <li><Link to="/decks-index">Deck Page</Link></li>
          <li><Link to="/login">Log In</Link></li>
          <li><Link to="/signup">Sign Up</Link></li>
        </ul>
      }
    </nav>
  )
}

export default NavBar