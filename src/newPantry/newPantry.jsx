import React from 'react';

export function NewPantry() {
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

         <h1>New Pantry Name: </h1>
         <form action="specificPantry.html" method="get">
            <input type="text" name="pantryName" />
            <button type="submit">Submit</button>
          </form>
      </main>
   );
}