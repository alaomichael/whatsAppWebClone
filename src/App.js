import React from 'react'
import './App.css'
import Chat from './components/chat/Chat'
import Sidebar from './components/sidebar/Sidebar'
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <div className='app'>
      <div className='app__body'>
      <Sidebar/>
      <Chat/>
        {/* Main Chat */}
      </div>
    </div>


  )
}

export default App
