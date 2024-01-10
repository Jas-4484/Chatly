import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import { collection, serverTimestamp } from 'firebase/firestore';
import { addDoc } from 'firebase/firestore';
import { db } from '../firebase';
const SendMessage = () => {
     const[value, setValue]= useState("");
     const {currentUser} = UserAuth();

     const handleSendMessage=async(e)=>{
        e.preventDefault();

        if(value.trim()=== ""){
          alert("Enter valid Message");
          return;
        }
        try {
          const {uid, displayName,photoURL} = currentUser;
          await addDoc(collection(db,"messages"),{
            text:value,
            name:displayName,
            avatar:photoURL,
            uid,
            createdAt: serverTimestamp()
          });
        } catch (error) {
          console.log(error);
        }
        console.log(value);
        setValue("");
     }
  return (
    <div>
      <div className='bg-gray-200 fixed bottom-0 w-full py-10 shadow-lg px-2'>
        <form onSubmit={handleSendMessage} className='containerWarp flex '>
            <input  value ={value} onChange={ e =>setValue(e.target.value)} className='input w-full focus:outline-none bg-gray-100 rounded-r-none' type="text"></input>
            <button type="submit" className='w-auto bg-gray-500 text-white font-bold rounded-r-lg px-5 text-sm'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default SendMessage
