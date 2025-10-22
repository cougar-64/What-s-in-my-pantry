import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export function SpecificPantry() {
   const [currentPantry, setCurrentPantry] = React.useState(null);
   const [newItem, setNewItem] = React.useState('');
   const [newQuantity, setnewQuantity] = React.useState('');
   const [user, setUser] = React.useState('');
   React.useEffect(() => {
      const storedPantry = localStorage.getItem('currentPantry');
      const user = localStorage.getItem('user');
      if (user)
         setUser(JSON.parse(user));
      if (storedPantry)
         setCurrentPantry(JSON.parse(storedPantry));
}, []);
   function addItem() {
      const updatedItems = [
         ...currentPantry.items,
         { name: newItem, quantity: newQuantity }
      ];
      const updatedPantry = { ...currentPantry, items: updatedItems };
      setCurrentPantry(updatedPantry);
      const updatedUserPantrys = user.pantrys.map(p =>
         p.ID === updatedPantry.ID ? updatedPantry : p
      );
      const updatedUser ={ ...user, pantrys: updatedUserPantrys };
      setUser(updatedUser);
   
      localStorage.setItem('currentPantry', JSON.stringify(updatedPantry));
      localStorage.setItem('user', JSON.stringify(updatedUser));
   }

   function increaseItem(index) {
      const updatedItems = [...currentPantry.items];
      updatedItems[index].quantity = Number(updatedItems[index].quantity) + 1;
      const updatedPantry = { ...currentPantry, items: updatedItems };
      setCurrentPantry({...currentPantry, items: updatedItems});
      const updatedUser = {
         ...user,
         pantrys: user.pantrys.map(p => p.ID === updatedPantry.ID ? updatedPantry : p)
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
   }
   function decreaseItem(index) {
      const updatedItems = [...currentPantry.items];
      if (updatedItems[index].quantity > 1) {
         updatedItems[index].quantity = Number(updatedItems[index].quantity) - 1;
      }
      else {
         updatedItems.splice(index, 1);
      }
      const updatedPantry = { ...currentPantry, items: updatedItems };
      setCurrentPantry({...currentPantry, items: updatedItems});
      const updatedUser = {
         ...user, 
         pantrys: user.pantrys.map(p => p.ID === updatedPantry.ID ? updatedPantry : p)
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));

      
   }

   function removeUser() {
      localStorage.removeItem('user');
      setUser(null);
      window.location.href = '/';
   }

   if (!currentPantry) return <div>Loading pantry...</div>;


   return (
      <main>
         <h1>Welcome to {currentPantry.name} </h1>
         <h2> UNIQUE ID: {currentPantry.ID}</h2>
         <span className="pantry-creator">Pantry creator: {currentPantry.creator}</span>
         <span className="pantry-members">Pantry members: {currentPantry.members}</span>
         <ul>
            {currentPantry.items.map((item, index) => (
            <li key={index} className="Pantry-item">
               {item.name}: 
               <span onClick={() => decreaseItem(index)}>-</span>{item.quantity}
               <span onClick={() => increaseItem(index)}>+</span>
            </li>
            ))}
         </ul>
               <li>
            <div>
               <input value={newItem} type="text" placeholder="item type" size="7" onChange={(e) => setNewItem(e.target.value)}/>
               <input value={newQuantity} type="text" placeholder="quantity" size="6" onChange={(e) => setnewQuantity(e.target.value)}/>
               <button onClick={addItem}>add</button>
            </div>
               <NavLink to="/pantrys">
                  <button type="button">Leave Pantry</button>
               </NavLink>
               {user === currentPantry.creator && (
               <NavLink to="/pantrys">
                  <button type="button">Delete pantry
                  </button>
               </NavLink>
               )}
               </li>
         <NavLink to="/">
               <button onClick={removeUser} type="button">Logout</button>
            </NavLink>
      </main>
   )
}