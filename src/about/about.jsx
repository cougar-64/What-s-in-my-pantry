// import React from 'react';
import './about.css'
import React, { useEffect, useState } from "react";

export function About() {

   function RandomDuck() {
     const [duck, setDuck] = useState(null);
   
     useEffect(() => {
      async function fetchDuck() {
         try {
            const res = await fetch('api/ducks/quack');
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            const data = await res.json();
            setDuck(data);
            
         } catch (err) {
           console.error("Error fetching duck:", err);
         }
       }
       
   
       fetchDuck();
     }, []);
   
     if (!duck) return <p>Loading...</p>;
   
     return (
       <div>
         <h2>Random Duck</h2>
         <img src={duck.url} alt="A random duck" width="300" />
         <button onClick={() => window.location.reload()}>Show another</button>
       </div>
     );
   }
   
    

   return (
      <main>
      <span>Have you ever been at the store and seen something that wasn't on your list and said to yourself "dang it!
          I can't remember if I have this in my pantry or not". You don't think you have it so you buy it, go home, 
          and find you already had 9 containers off-brand sour cream and you just bought a tenth? Well, no more sour cream surprises!
           "What's in my pantry' will keep track of all the food in your house and keep track of how the quantities 
           adjust when you buy more or use some of it.</span>
      <RandomDuck />
   </main>
   )
}