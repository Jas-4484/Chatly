import { useState } from 'react'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Chatroom from './pages/Chatroom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navbar/>
        {/* <Login/> */}
        <Chatroom/>
    </>
  )
}

export default App
