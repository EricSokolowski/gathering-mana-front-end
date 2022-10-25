import { useState } from "react"
import styles from './SpellSearch.module.css'
import * as spellService from '../../services/spellServices'

const SpellSearch = () => {
  const [formData, setFormData] = useState({
    spellQuery: ""
  })

  const [results, setResults] = useState([])
  
  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async evt => {
    evt.preventDefault()
    try {
      const resultData = await spellService.search(formData)
      setResults(resultData)
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
          id="spell-query"
          value={formData.spellQuery}
          name="spellQuery"
          onChange={handleChange}
        />
      </div>
      
      <div>
        <button className={styles.button}>Search</button>
      </div>
    </form>
  )
}

export default SpellSearch