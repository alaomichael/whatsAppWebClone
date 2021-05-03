import React,{useState} from 'react'
import './App.css'
import Chat from './components/chat/Chat'
import Sidebar from './components/sidebar/Sidebar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/login/Login'
import { useStateValue } from './StateProvider'
import {ThemeProvider, createMuiTheme, Paper, Card} from '@material-ui/core'



function App() {
    const [darkMode,setDarkMode] =useState(false)
    
    const theme= createMuiTheme({
      palette:{
        type: darkMode ? 'dark' : 'light'
      }
    })

  const [{user}, dispatch] = useStateValue()
  return (
<ThemeProvider theme={theme}>
  <Paper style={{height:'100vh',overflow:'scroll'}}>
    
  {/* <Card className={darkMode ? "dark-mode app"  : "light-mode app"}> */}
  <Card className= 'app'>
       {!user ? (
         <>
    
           {/* <label className="switch">
            <input type="checkbox"  checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label> */}
          <div className='toggleContainer'>
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
            <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
          </div>
         
          <Login/>
         </>
     
    ):(
      <>
     <div className='toggleContainer'>
          <span style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</span>
            <div className="switch-checkbox">
          <label className="switch">
            <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
            <span className="slider round"> </span>
          </label>
        </div>
        <span style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</span>
          </div>
      <div className='app__body'>
      
      <Router>
      <Sidebar/>
        <Switch>
          <Route path='/rooms/:roomId'>
            <Chat/>
          </Route>
          <Route path='/'>
          <Chat/>
          </Route>
          </Switch>
        </Router>
    </div>
    </>
    )}  
    </Card>
   
  </Paper>
</ThemeProvider>
   

  )
}

export default App
