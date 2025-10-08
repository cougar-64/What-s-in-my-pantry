import React from 'react';

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
               <input type="password" placeholder="********" />
            </div>
            <button type="submit">Login</button>
            <button type="submit">Create Account</button>
         </form>
      </main>
   )
}