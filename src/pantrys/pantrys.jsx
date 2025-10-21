import React from 'react';
import { NavLink } from 'react-router-dom';
import './pantrys.css';

export function Pantrys() {
   const [user, setUser] = React.useState(null);
   React.useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
         setUser(storedUser);
   }
   }, []);
   const activePantrys = user?.pantrys || [];

   function removeUser() {
      localStorage.removeItem('user');
      setUser(null);
      window.location.reload();
   }


   return (
      <main>
      <h1 className="users">
         User: {user}</h1>
      <ul className="notification">
         <li className="player-name">Websocket Notification - Johnny created a new pantry</li>
         <li className="player-name">Websocket Notification - Lisa joined 'Work' pantry</li>
         <li className="player-name">Websocket Notification - Wifey subtracted pasta from 'Home' pantry</li>
      </ul>

         <br />
      <h1>Active pantrys: </h1>
      {activePantrys.length > 0 ? (
          <ul>
            {activePantrys.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        ) : (
          <p>No active pantrys</p>
        )}
         <NavLink to="/newPantry">
            <button className="add-new-pantry" type="button">Create a new pantry</button>
          </NavLink>
      <NavLink to="/">
         <button onClick={removeUser} className="logout" type="submit">Logout</button>
      </NavLink>
      </main>
   )
}