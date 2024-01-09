import React from 'react'
import Message from './Message'

const Chatbox = () => {
    const message = [
        {
            id: 1,
            text: "hello there"
        },
        {
            id:2,
            text:"hii"
        }
    ]
  return (
    <div className='pb-44 pt-20 containerWarp'>
      {message.map(message => (
        <Message key={message.id} message={message}/>
      ))}
    </div>
  )
}

export default Chatbox
