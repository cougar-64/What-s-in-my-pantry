import React from 'react';
import { NavLink } from 'react-router-dom';
import './pantrys.css';

export function Pantrys() {
  const [user, setUser] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    async function loadUser() {
      const storedUser = localStorage.getItem('user');
      if (!storedUser) return setLoading(false);

      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);

      try {
        const res = await fetch('/api/pantry', {
          method: 'GET',
          credentials: 'include',
        });

        if (res.ok) {
          const data = await res.json();
          const updatedUser = { ...parsedUser, pantrys: data.pantrys || [] };
          setUser(updatedUser);
          localStorage.setItem('user', JSON.stringify(updatedUser));
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

  const activePantrys = user?.pantrys || [];

  async function removePantry() {
    await fetch('/api/newPantry')
  }

  async function removeUser() {
    await fetch('/api/auth/logout', {
      method: 'POST',
      credentials: 'include',
    });

    localStorage.removeItem('user');
    setUser(null);
    window.location.href = '/';
  }

  if (loading) return <p>Loading...</p>;

  return (
    <main>
      <h1 className="users">User: {user?.email}</h1>

      <ul className="notification">
        <li className="player-name">Websocket Notification - Johnny created a new pantry</li>
        <li className="player-name">Websocket Notification - Lisa joined 'Work' pantry</li>
        <li className="player-name">Websocket Notification - Wifey subtracted pasta from 'Home' pantry</li>
      </ul>

      <br />
      <h1>Active pantrys:</h1>
      {activePantrys.length > 0 ? (
        <ul>
          {activePantrys.map((p) => (
            <li key={p.ID}>
              <NavLink
                to="/specificPantry"
                onClick={() => localStorage.setItem('currentPantry', JSON.stringify(p))}
              >
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
