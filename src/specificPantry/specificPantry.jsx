import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export function SpecificPantry() {
   const [currentPantry, setCurrentPantry] = React.useState(null);
   const [newItem, setNewItem] = React.useState('');
   const [newQuantity, setnewQuantity] = React.useState('');
   React.useEffect(() => {
      const storedPantry = localStorage.getItem('currentPantry');
      if (storedPantry)
      setCurrentPantry(JSON.parse(storedPantry));
}, []);
   function addItem() {
      const updatedItems = [
         ...currentPantry.items,
         { name: newItem, quantity: newQuantity }
      ];
      const updatedPantry = { ...currentPantry, items: updatedItems };
      setCurrentPantry(updatedPantry);
      localStorage.setItem('currentPantry', JSON.stringify(updatedPantry));
   }
   if (!currentPantry) return <div>Loading pantry...</div>;


   return (
      <main>
         <h1>Welcome to {currentPantry.name} </h1>
         <h2> UNIQUE ID: {currentPantry.ID}</h2>
         <span className="pantry-creator">Pantry creator: {currentPantry.creator}</span>
         <span className="pantry-members">Pantry members: {currentPantry.members}</span>
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