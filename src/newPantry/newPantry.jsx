import React from 'react';

export function NewPantry() {
   const handleSubmit = async (event) => {
      event.preventDefault();
      window.location.href="/specificPantry";
      localStorage.setItem((pantryName), pantryName)
   }
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
         <form onSubmit={handleSubmit}>
            <input type="text" name="pantryName" />
            <button type="submit">Submit</button>
          </form>
      </main>
   );
}