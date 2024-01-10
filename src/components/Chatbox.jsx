import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import { collection, query, where, onSnapshot, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase";
const Chatbox = () => {
  const messageEndRef= useRef();
  const [messages,setMassages]= useState([]);
  const scrollToBottom = ()=>{
    messageEndRef.current.scrollIntoView({behavior:"smooth"})
  }
  useEffect(scrollToBottom,[messages])

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt"),
      limit(50)
      );
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({...doc.data(),id: doc.id});
      });
      setMassages(messages);
    });

    return()=>{
      unsubscribe;
    }
  }, []);
  return (
    <div className="pb-44 pt-20 containerWarp">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      <div ref={messageEndRef}></div>
    </div >
  );
};

export default Chatbox;
