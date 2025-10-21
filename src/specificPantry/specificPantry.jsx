import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export function SpecificPantry() {
   const [newItem, setNewItem] = React.useState('');
   const [newQuantity, setnewQuantity] = React.useState('');
   const [items, setItems] = React.useState([]);
   React.useEffect(() => {
      const currentPantry = localStorage.getItem('currentPantry');
      const storedItems =JSON.parse(localStorage.getItem(`pantryItems_${currentPantry}`)) || [];
      setItems(storedItems);
   }, []);
   function addItem() {
      const updatedItems = [
         ...items,
         { name: newItem, quantity: newQuantity }
      ];
      setItems(updatedItems);
      localStorage.setItem(
        `pantryItems_${currentPantry}`,
        JSON.stringify(updatedItems)
      );
   }
   const [pantryName, setPantryName] = React.useState(localStorage.getItem('currentPantry' || 'default'));
   return (
      <main>
         <h1>Welcome to {pantryName} </h1>
         <h2>Unique ID: LOAD UNIQUE ID FROM DATABASE</h2>
         <span className="pantry-creator">Pantry creator: - load from database</span>
         <span className="pantry-members">Pantry members: - load from database</span>
         <ul>
               <li className="Pantry-item">load items from database</li>
               <li className="example-item">Pasta 
               <span 
                  id="decrease" 
                  style={{ cursor: "pointer", userSelect: "none" }}
               > - </span>
               10
               <span 
                  id="increase" 
                  style={{ cursor: "pointer", userSelect: "none" }}
               > +</span>

               </li>
         </ul>
               <li>
            <div>
               <input value={newItem} type="text" placeholder="item type" size="7" onChange={(e) => setNewItem(e.target.value)}/>
               <input value={newQuantity} type="text" placeholder="quantity" size="6" onChange={(e) => setnewQuantity(e.target.value)}/>
               <button onClick={addItem}>add</button>
            </div>
               <NavLink to="/pantrys">
                  <button type="button">Leave Pantry</button>
               </NavLink>
               <NavLink to="/pantrys">
                  <button type="button">Delete pantry - only shows up if they are the 
                     creator of that pantry
                  </button>
               </NavLink>
               </li>
         <NavLink to="/">
               <button type="submit">Logout</button>
            </NavLink>
      </main>
   )
}