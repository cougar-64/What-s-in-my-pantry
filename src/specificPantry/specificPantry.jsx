import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export function SpecificPantry() {
   const [pantryName, setPantryName] = useState('default');
   // useEffect(()=>{
   //    if (localStorage.getItem(pantryName))
   // }) 
   return (
      <main>
         <h1>Welcome to {pantryName} </h1>
         <h2>Unique ID: LOAD UNIQUE ID FROM DATABASE</h2>
         <span className="pantry-creator">Pantry creator: - load from database</span>
         <span className="pantry-members">Pantry members: - load from database</span>
         <ul>
               <li className="Pantry-item">load items from database</li>
               <li className="example-item">Pasta 10 
               <span 
                  id="decrease" 
                  style={{ cursor: "pointer", userSelect: "none" }}
               >-</span>

               <span 
                  id="increase" 
                  style={{ cursor: "pointer", userSelect: "none" }}
               >+</span>

               </li>
               <NavLink to="pantrys">
                  <button type="leave-pantry">Leave Pantry</button>
               </NavLink>
               <a href="pantrys.html">
                  <button type="delete-pantry">Delete pantry - only shows up if they are the 
                     creator of that pantry
                  </button>
               </a>
         </ul>
         <NavLink to="index">
               <button type="submit">Logout</button>
            </NavLink>
      </main>
   )
}