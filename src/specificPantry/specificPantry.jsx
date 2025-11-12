import React, { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

export function SpecificPantry() {
  const { id } = useParams();
  console.log(id);
   const [currentPantry, setCurrentPantry] = React.useState(null);
   const [newItem, setNewItem] = React.useState('');
   const [newQuantity, setnewQuantity] = React.useState('');
   const [user, setUser] = React.useState('');
   React.useEffect(() => {
    async function loadPantry() {
      const userRes = await fetch('https://startup.byu260.click/api/auth/currentMe', { credentials: 'include' });
      if (!userRes.ok) return setUser(null);
      const userData = await userRes.json();
      setUser(userData);

      const pantryRes = await fetch(`https://startup.byu260.click/api/pantry/${id}`, { credentials: 'include' });
      console.log("pantry status:", pantryRes.status());
      if (!pantryRes.ok) return;

      const { pantry } = await pantryRes.json();
      setCurrentPantry(pantry);

    }
    loadPantry();
  }, [id]);


function addItem() {
  const updatedItems = [...currentPantry.items, { name: newItem, quantity: Number(newQuantity) }];
  updatePantry(updatedItems);
}

function increaseItem(index) {
  const updatedItems = [...currentPantry.items];
  updatedItems[index].quantity += 1;
  updatePantry(updatedItems);
}

function decreaseItem(index) {
  const updatedItems = [...currentPantry.items];
  if (updatedItems[index].quantity > 1) {
    updatedItems[index].quantity -= 1;
  } else {
    updatedItems.splice(index, 1);
  }
  updatePantry(updatedItems);
}


async function updatePantry(updatedItems) {
  const updatedPantry = { ...currentPantry, items: updatedItems };

  try {
    const res = await fetch(`https://startup.byu260.click/api/pantry/${updatedPantry.ID}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(updatedPantry),
    });
    if (!res.ok) throw new Error('Failed to update pantry');

    const { pantry } = await res.json();
    setCurrentPantry(pantry);

    const updatedUser = {
      ...user,
      pantrys: user.pantrys.map(p => p.ID === pantry.ID ? pantry : p)
    };
    setUser(updatedUser);

  } catch (err) {
    console.error(err);
  }
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

               </li>
         <NavLink to="/">
               <button onClick={removeUser} type="button">Logout</button>
            </NavLink>
      </main>
   )
}