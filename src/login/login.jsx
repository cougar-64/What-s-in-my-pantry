import React from 'react';
import { NavLink } from 'react-router-dom';

export function Login({ setUser }) {
   const [text, setText] = React.useState('');
   function loginUser(){
      localStorage.setItem('user', text);
      setUser(text);
   }

   function textChange(e) {
      setText(e.target.value);
   }
   return (
      <main>
         <h1>Welcome! Please login to get started, or create an account</h1>
         <form method="get" action="pantrys.html">
            <div>
               <span>Username</span>
               <input onChange={textChange} type="text" placeholder="username" />

            </div>
            <li>
               <NavLink to='/pantrys'><button onClick={loginUser} type="button">Login</button></NavLink>
               <NavLink to='/pantrys'><button type="button">Create Account</button></NavLink>
            </li>
         </form>
      </main>
   )
}