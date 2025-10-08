import React from 'react';
import './app.css';

export default function App() {
   return <div className='app bg-dark text-light'>
      <header className="navbar">
         <h1>What's in my Pantry</h1>
         <nav>
            <menu>
               <li><a href="index.html">Home</a></li>
               <li><a href="pantrys.html">My Pantrys</a></li>
               <li><a href="feedback.html">Submit Feedback!</a></li>
               <li><a href="about.html">About</a></li>
            </menu>
         </nav>

      </header>

      <main>
         App components go here
      </main>

      <footer>
         <span className="author_name">Samuel Bird</span>
         <img src="test2.jpg" width="100" height="75" />
         <br />
         <a href="https://github.com/cougar-64/What-s-in-my-pantry">Github</a>
      </footer>
   </div>
}