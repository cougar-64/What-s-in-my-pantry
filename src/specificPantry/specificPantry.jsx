import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export function SpecificPantry() {
   function addItem() {
      console.log("added");
   }
   const [pantryName, setPantryName] = useState('default');
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
               <li>
            <div>
               <input type="text" placeholder="item type" size="7" />
               <input type="text" placeholder="quantity" size="6" />
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
         </ul>
         <NavLink to="/">
               <button type="submit">Logout</button>
            </NavLink>
      </main>
   )
}