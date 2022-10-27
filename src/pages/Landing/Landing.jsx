import styles from './Landing.module.css'

const Landing = ({ user }) => {
  return (
    <main className={styles.container}>
      <h1>Hello, {user ? user.name : 'Summoner.'}</h1>
      <h1>Welcome to Gathering Magic. Here you will be able to build your very own deck for Magic The Gathering.</h1>
      <h2> If you are new here please click the "Sign up" button.</h2> 
      <h2>If you already have an account click "Log In."</h2>
    </main>
  )
}

export default Landing
