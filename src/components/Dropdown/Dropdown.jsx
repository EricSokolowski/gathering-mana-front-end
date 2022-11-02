import { React } from "react"
import './Dropdown.module.css'

const Dropdown = ({ formData, handleChange }) => {

  return (
    <select name="option" value={formData.option} onChange={handleChange}>
      <option value="type">Type</option>
      <option value="name">Name</option>
      <option value="color">Color</option>
    </select>
  );
};

export default Dropdown;