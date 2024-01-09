import React, { useState } from 'react';


const SendMessage = () => {
     const[value, setValue]= useState("");
     const handleSendMessage=(e)=>{
        e.preventDefault();
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
