import React, { useEffect } from 'react';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { About } from './about/about';
import { Feedback } from './feedback/feedback';
import { Pantrys } from './pantrys/pantrys';
import { NewPantry } from './newPantry/newPantry';
import { SpecificPantry } from './specificPantry/specificPantry';

export default function App() {
   const [user, setUser] = React.useState('');
   React.useEffect(() => {
      const user = localStorage.getItem('user');
      if (user)
         setUser(user);
      else
         setUser(null);
   }, [])
   return (
   <BrowserRouter>
   <div className='app bg-dark text-light'>
      <header className="navbar">
         <h1>What's in my Pantry</h1>
         <nav>
            <menu>
               <li><NavLink to="/">Home</NavLink></li>
               {user && <li><NavLink to="pantrys" >My Pantrys</NavLink></li>}
               <li><NavLink to="feedback">Submit Feedback!</NavLink></li>
               <li><NavLink to="about">About</NavLink></li>
            </menu>
         </nav>

      </header>

      <Routes>
         <Route path='/' element={<Login setUser={setUser}/>} exact />
         <Route path='/about' element={<About />} />
         <Route path='/feedback' element={<Feedback />} />
         <Route path='/newPantry' element={<NewPantry />} />
         <Route path='/pantrys' element={<Pantrys />} />
         <Route path='/specificPantry/:id' element={<SpecificPantry />} />
         <Route path='*' element={<NotFound />} />
      </Routes>

      <footer>
         <span className="author_name">Samuel Bird</span>
         <img src="/test2.jpg" width="100" height="75" />
         <br />
         <a href="https://github.com/cougar-64/What-s-in-my-pantry">Github</a>
      </footer>
   </div>
   </BrowserRouter>
   );
}


function NotFound() {
   return <main className='container-fluid bg-secondary text-center'>404: I don't know what you're trying to do</main>
}