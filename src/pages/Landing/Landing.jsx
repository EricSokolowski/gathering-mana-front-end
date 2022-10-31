import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Hello, {user ? user.name : 'Summoner!'}</h1>
      <h2> {user ? 'Welcome to Gathering Magic. Here you will be able to build your very own Magic: The Gathering deck!' : ''}</h2>
      <h2> {user ? 'Head to the Build Deck page to creatue you own or take a look at decks other users have made in the Decks page!' : '' }</h2>
      <h2> { user ? '' : `If you are new here please click the "Sign up" button.`}</h2> 
      <h2>{ user ? '' : `If you already have an account click "Log In."`}</h2> 
    </main>
  )
}

export default Landing
