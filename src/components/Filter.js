import React, {useState} from "react";

function Filter({ onCategoryChange, onSearchChange, inputValue}) {
  // const [inputValue, setInputValue] = useState("")
  // function onSearchChange(e){
  //   setInputValue(e.target.value)
  // }
  return (
    <div className="Filter">
      <input type="text" name="search" placeholder="Search..." value={inputValue} onChange={onSearchChange}/>
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
