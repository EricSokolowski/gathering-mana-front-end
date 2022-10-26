import { React, useEffect, useState } from "react";
import './Dropdown.css'

const Dropdown = ({ placeHolder, formData, handleChange }) => {

  return (
    <select name="option" value={formData.option} onChange={handleChange}>
      <option value="type">Type</option>
      <option value="name">Name</option>
      <option value="color">Color</option>
    </select>
  );
};

export default Dropdown;