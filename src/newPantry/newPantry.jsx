import React from 'react';

export function NewPantry() {
   const [user, setUser] = React.useState(null);
   React.useEffect(() => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
         setUser(storedUser);
      }
   }, []);
   const handleSubmit = async (event) => {
      event.preventDefault();
      const pantryName = event.target.pantryName.value;
      const uniqueID = Math.floor(1000 + Math.random() * 9000);
      const pantryData = {
         name: pantryName,
         ID: uniqueID,
         creator: user,
         members: [user],
         items: []
      };
      window.location.href="/specificPantry";
      localStorage.setItem('currentPantry', JSON.stringify(pantryData));
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

         <h1>New Pantry Name: </h1>
         <form onSubmit={handleSubmit}>
            <input type="text" name="pantryName" />
            <button type="submit">Submit</button>
          </form>
      </main>
   );
}