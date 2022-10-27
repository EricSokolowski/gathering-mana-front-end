import { Link } from 'react-router-dom'
import styles from "./NavBar.module.css"

const NavBar = ({ user, handleLogout }) => {
  return (
    <nav>
      {user ?
        <ul>
          Welcome, {user.name}
          <Link to="/profiles">Profiles</Link>
          <Link to="" onClick={handleLogout}>LOG OUT</Link>
          <Link to="/changePassword">Change Password</Link>
          <Link to="/new-deck">Build Deck</Link>
          <Link to="/decks-index">Deck Page</Link>
        </ul>
        :
        <ul>
          <Link to="/decks-index">Deck Page</Link>
          <Link to="/login">Log In</Link>
          <Link to="/signup">Sign Up</Link>
        </ul>
      }
    </nav>
  )
}

export default NavBar