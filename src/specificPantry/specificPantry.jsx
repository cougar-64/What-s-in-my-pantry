import React from 'react';
import { NavLink } from 'react-bootstrap';

export function SpecificPantry() {
   return (
      <main>
         <h1>Welcome to (LOAD PANTRY NAME FROM DATABSE) Pantry</h1>
         <h2>Unique ID: LOAD UNIQUE ID FROM DATABASE</h2>
         <span className="pantry-creator">Pantry creator: - load from database</span>
         <span className="pantry-members">Pantry members: - load from database</span>
         <ul>
               <li className="Pantry-item">load items from database</li>
               <li className="example-item">Pasta 10 
                  <span id="decrease" style="cursor: pointer; user-select: none;">-</span> /
                  <span id="increase" style="cursor: pointer; user-select: none;">+</span>
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