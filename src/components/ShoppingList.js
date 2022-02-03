import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategoy, setSelectCategory] = useState('All');
 
  function handleFilterChange(event){
    setSelectCategory(event.target.value)
  }
  const filterItems = items.filter(item => {
    if(selectedCategoy === 'All'){
      return true
    }else if (selectedCategoy === item.category){
      return true
    }else
    return false
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filterItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
