import React from 'react';
import { useNavigate } from 'react-router-dom';

export function Login({ setUser }) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigate = useNavigate();

  async function createUser() {
    const response = await fetch('http://localhost:4000/api/auth/create', {
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
    const response = await fetch('http://localhost:4000/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const error = await response.json();
      alert(error.msg || 'Login failed');
      return;
    }

    const userData = await response.json();
    localStorage.setItem('user', JSON.stringify(userData));
    setUser(userData);
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
