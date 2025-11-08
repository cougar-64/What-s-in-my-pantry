import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Login({ setUser }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  async function createUser() {
    const response = await fetch('http://startup.byu260.click/api/auth/create', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const error = await response.json();
      alert(error.msg || 'Failed to create user');
      return;
    }

    const userData = await response.json();
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
    navigate('/pantrys');
  }

  async function loginUser() {
   const response = await fetch('http://startup.byu260.click/api/auth/login', {
     method: 'POST',
     headers: { 'Content-Type': 'application/json' },
     credentials: 'include',  // send cookies
     body: JSON.stringify({ email, password })
   });
 
   if (!response.ok) {
     const error = await response.json();
     alert(error.msg || 'Login failed');
     return;
   }
 
   const userData = await response.json();
   setUser(userData);
   localStorage.setItem('user', JSON.stringify(userData));
 
   // Fetch pantries for this user
   const pantryResponse = await fetch('http://startup.byu260.click/api/pantry', {
     method: 'GET',
     credentials: 'include'  // important to send the auth cookie
   });
 
   if (pantryResponse.ok) {
     const pantryData = await pantryResponse.json();
     const updatedUser = { ...userData, pantries: pantryData.pantrys };
     setUser(updatedUser);
     localStorage.setItem('user', JSON.stringify(updatedUser));
   } else {
     console.warn('Failed to load pantries');
   }
 
   navigate('/pantrys');
 }
 

  return (
    <main>
      <h1>Welcome! Please login to get started, or create an account</h1>
      <div>
        <span>Email</span>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="username"
        />
        <div></div>
        <span>Password</span>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="********"
        />
      </div>
      <li>
        <button onClick={loginUser} type="button">Login</button>
        <button onClick={createUser} type="button">Create Account</button>
      </li>
    </main>
  );
}
