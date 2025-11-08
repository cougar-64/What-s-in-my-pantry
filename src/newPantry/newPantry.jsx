import React from 'react';

export function NewPantry() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
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

   const response = await fetch('/api/pantry', {
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

   const updatedUser = { ...user, pantrys: [...(user.pantrys || []), pantryData] };
   setUser(updatedUser);
   localStorage.setItem('user', JSON.stringify(updatedUser));
   localStorage.setItem('currentPantry', JSON.stringify(pantryData));

   window.location.href = "/specificPantry";
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
