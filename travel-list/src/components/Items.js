// import { useState } from "react"

export default function Items({ item, onDeleteItem, onToggleItem }) {
  return (
    <div>
      <li> 
        <input type="checkbox" value={item.packed} 
          onChange = {() => onToggleItem(item.id)}/>
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description} 
        </span>
        <button onClick={() => onDeleteItem(item.id)}> ❌ </button>
      </li>
    </div>
  )
}