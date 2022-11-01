import { useState } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'
import styles from './Login.module.css'

const LoginPage = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <section  className={styles.loginImg}>
      <main className={styles.container} >
        <section>
          <h1>Log In</h1>
          <p>{message}</p>
          <LoginForm
            handleSignupOrLogin={props.handleSignupOrLogin}
            updateMessage={updateMessage}
          />
        </section>
      </main>
    </section >
  )
}

export default LoginPage
