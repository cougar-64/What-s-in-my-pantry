import React from 'react';
import { useNavigate } from 'react-router-dom';

export function NewPantry() {
  const [user, setUser] = React.useState(null);
  const navigate = useNavigate();
  const [notifications, setNotifications] = React.useState([]);




  React.useEffect(() => {
    if (!user) return;
  
    const ws = new WebSocket('wss://startup.byu260.click');
  
    ws.onopen = () => console.log('Connected to WebSocket');
  
    ws.onmessage = (message) => {
      try {
        const event = JSON.parse(message.data);
        // Only handle join/leave/modify events
        if (['join','leave','modify'].includes(event.type)) {
          setNotifications((prev) => [...prev, event.value]);
        }
      } catch (err) {
        console.error('Error parsing WebSocket message', err);
      }
    };
  
    ws.onclose = () => console.log('WebSocket disconnected');
    ws.onerror = (err) => console.error('WebSocket error', err);
  
    return () => ws.close();
  }, [user]);

  



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

  navigate(`/specificPantry/${uniqueID}`);
  };

  return (
    <main>
      <h1 className="users">User: {user?.email}</h1>
      <ul className="notification">
        {notifications.map((msg, i) => (
        <li key={i} className="player-name">{msg}</li>
        ))}
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
