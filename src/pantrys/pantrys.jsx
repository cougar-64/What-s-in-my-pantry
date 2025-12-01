import React from 'react';
import { NavLink } from 'react-router-dom';
import './pantrys.css';
import { GameNotifier, GameEvent } from '../notifier.js';

export function Pantrys() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [notifications, setNotifications] = React.useState([]);

  function addNotification(msg) {
    setNotifications((prev) => [...prev, msg]);
  }


  React.useEffect(() => {
    if (!user) return;
  
    const ws = new WebSocket('wss://startup.byu260.click'); // production
    // const ws = new WebSocket('wss://localhost:4000'); // local testing 
  
    ws.onopen = () => {
      console.log('Connected to WebSocket');
    };
  
    ws.onmessage = (message) => {
      try {
        const event = JSON.parse(message.data);
        if (
          event.type === GameEvent.join ||
          event.type === GameEvent.leave ||
          event.type === GameEvent.modify
        ) {
          addNotification(event.value);
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
    async function loadUser() {
      const storedUser = await fetch('https://startup.byu260.click/api/auth/currentMe', {credentials: 'include'});
      if (!storedUser) return setLoading(false);

      const parsedUser = await storedUser.json();
      setUser(parsedUser);

      try {
        const res = await fetch('https://startup.byu260.click/api/pantry', {
          method: 'GET',
          credentials: 'include',
        });

        if (res.ok) {
          const data = await res.json();
          const updatedUser = { ...parsedUser, pantrys: data.pantrys || [] };
          setUser(updatedUser);
          // localStorage.setItem('user', JSON.stringify(updatedUser));
        } else {
          console.warn('Failed to load pantries');
        }
      } catch (err) {
        console.error('Error fetching pantries:', err);
      }

      setLoading(false);
    }

    loadUser();
  }, []);

  React.useEffect(() => {
    if (!user) return;
  
    function handleEvent(event) {
      if (event.type === GameEvent.join || event.type === GameEvent.leave || event.type === GameEvent.modify) {
        addNotification(event.value);
      }
    }

  }, [user]);
  
  

  const activePantrys = user?.pantrys || [];

  async function removePantry() {
    await fetch('https://startup.byu260.click/api/newPantry')
  }

  async function removeUser() {
    await fetch('https://startup.byu260.click/api/auth/logout', {
      method: 'DELETE',
      credentials: 'include',
    });

    // localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  }

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <h1 className="users">User: {user?.email}</h1>

      <div id="notifications">
        {notifications.map((n, i) => (
      <div key={i} className="notification">
         {n}
      </div>
      ))}
    </div>


      <br />
      <h1>Active pantrys:</h1>
      {activePantrys.length > 0 ? (
        <ul>
          {activePantrys.map((p) => (
            <li key={p.ID}>
              <NavLink
                to={`/specificPantry/${p.ID}`}>
                {p.name}
              </NavLink>
            </li>
          ))}
        </ul>
      ) : (
        <p>No active pantrys</p>
      )}

      <NavLink to="/newPantry">
        <button className="add-new-pantry" type="button">
          Create a new pantry
        </button>
      </NavLink>

      <NavLink to="/">
        <button onClick={removeUser} className="logout" type="submit">
          Logout
        </button>
      </NavLink>
    </main>
  );
}
