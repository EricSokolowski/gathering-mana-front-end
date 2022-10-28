import { useState } from "react"
import styles from './SpellSearch.module.css'
import * as spellService from '../../services/spellServices'
import Dropdown from '../Dropdown/Dropdown.jsx'

const SpellSearch = (props) => {
  const [formData, setFormData] = useState({
    spellQuery: "",
    option: "type"
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
    <>
      <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className={styles.container}
      >
      <Dropdown placeHolder='Select...' formData={formData} handleChange={handleChange} />
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
      {results.length ?
      <>
        {results.map((result) => 
          <div key={result.id} >
            {/* {result.name} */}
            <img src={result.imageUrl} alt={result.name} />
            <button className={styles.button} onClick={() => props.handleAddCard(result)}>Add Card</button>
          </div>
          
        )}
      </>
      :
      <>
        <div>No Results</div>
      </>}
    </>
  )
}

export default SpellSearch