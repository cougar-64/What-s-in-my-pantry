import React from 'react';
import { NavLink } from 'react-router-dom';

export function Login() {
   return (
      <main>
         <h1>Welcome! Please login to get started, or create an account</h1>
         <form method="get" action="pantrys.html">
            <div>
               <span>Username</span>
               <input type="text" placeholder="username" />

            </div>
            <div>
               <span>Password</span>
               <input type="password" plaeholder="********" />
            </div>
            <li>
               <NavLink to='/pantrys'><button type="button">Login</button></NavLink>
               <NavLink to='/pantrys'><button type="button">Create Account</button></NavLink>
            </li>
         </form>
      </main>
   )
}