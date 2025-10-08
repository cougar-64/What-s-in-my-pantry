import React from 'react';
import { NavLink } from 'react-router-dom';

export function Pantrys() {
   return (
      <main>
      <h1 className="users">
         User: Username from Database</h1>
      <ul className="notification">
         <li className="player-name">Websocket Notification - Johnny created a new pantry</li>
         <li className="player-name">Websocket Notification - Lisa joined 'Work' pantry</li>
         <li className="player-name">Websocket Notification - Wifey subtracted pasta from 'Home' pantry</li>
         </ul>

         <br />

      <h1>Active pantrys: </h1>
      <ul className="pantrys">
         <li className="my-pantrys">Load from database with unique 4 digit ID</li>
         <li><NavLink to="specificPantry">Each pantry will link to this html page</NavLink></li>
         <li>
         <NavLink to="/newPantry">
            <button className="add-new-pantry" type="button">Create a new pantry</button>
          </NavLink>
          </li>
      </ul>
      <NavLink to="index">
         <button class="logout" type="submit">Logout</button>
      </NavLink>
      </main>
   )
}