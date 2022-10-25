import { useState } from "react"
import styles from './SpellSearch.module.css'

const SpellSeacrh = () => {
  const [formData, setFormData] = useState({
    spellQuerry: ""
  })
  const handleChange = e => {
    
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      // await api call
      //use result of Api call
      
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <div className={styles.inputContainer}>
        <input
          placeholder="Search for spell"
          type="text"
          autoComplete="off"
          id="spell-querry"
          value={formData.spellQuery}
          name="spell-querry"
          onChange={handleChange}
        />
      </div>
      
      <div>
        <button className={styles.button}>Search</button>
      </div>
    </form>
  )
}

export default SpellSeacrh