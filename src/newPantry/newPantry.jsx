import React from 'react';
import { useNavigate } from 'react-router-dom';

export function NewPantry() {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchUser() {
      try {
        const res = await fetch('https://startup.byu260.click/api/auth/currentMe', { credentials: 'include' });
        if (!res.ok) throw new Error('Unauthorized');
        const user = await res.json();
        setUser(user);
      } catch (err) {
        setUser(null);
      }
    }
    fetchUser();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user) return alert("User not loaded");

    const pantryName = event.target.pantryName.value;
    const uniqueID = Math.floor(1000 + Math.random() * 9000);

    const pantryData = {
      name: pantryName,
      ID: uniqueID,
      creator: user.email,
      members: [user.email],
      items: []
    };

   const response = await fetch('https://startup.byu260.click/api/pantry', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json'
      },
      credentials: 'include',
      body: JSON.stringify(pantryData)
   });

   if (!response.ok) {
      const error = await response.json();
      return alert(error.msg || "Failed to create pantry");
   }

   const data = await response.json();

   const updatedUser = { ...user, pantrys: data.pantrys };
   setUser(updatedUser);
  //  localStorage.setItem('user', JSON.stringify(updatedUser));
  //  localStorage.setItem('currentPantry', JSON.stringify(pantryData));

  navigate("/specificPantry");
  };

  return (
    <main>
      <h1 className="users">User: {user?.email}</h1>
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
