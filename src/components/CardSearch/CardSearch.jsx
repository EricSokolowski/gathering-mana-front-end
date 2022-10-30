import { useState } from "react"
import styles from './CardSearch.module.css'
import * as cardService from '../../services/cardService'
import Dropdown from '../Dropdown/Dropdown.jsx'

const CardSearch = (props) => {
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
      const resultData = await cardService.search(formData)
      setResults(resultData)
      } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className={styles.container}
    >
      <h1>Search Cards</h1>
      <form
      autoComplete="off"
      onSubmit={handleSubmit}
      >
        <Dropdown placeHolder='Select...' formData={formData} handleChange={handleChange} />
        {/* <div className={styles.inputContainer}> */}
          <input
            placeholder="Search for spell"
            type="text"
            autoComplete="off"
            id="spell-query"
            value={formData.spellQuery}
            name="spellQuery"
            onChange={handleChange}
          />
        {/* </div> */}
        
        {/* <div> */}
          <button className={styles.button}>Search</button>
        {/* </div> */}
      </form>
      {results.length ?
        <>
          {results.map((result) => result.imageUrl &&
            <div key={result.id} >
              <img src={result.imageUrl} alt={result.name} />
              <button className={styles.button} onClick={() => props.handleAddCard(result)}>Add Card</button>
            </div>
          )}
        </>
      :
        <>
          <div>No Results</div>
        </>
      }
    </section>
  )
}

export default CardSearch

// {results.filter(result => result.includes(result.imageUrl)).map(filteredResult => (
//<div key={result.id}>
//  <button 
//    onClick={() => props.handleAddCard(result)}>
//      <img src={result.imageUrl} alt={result.name />
//  </button>
//))}