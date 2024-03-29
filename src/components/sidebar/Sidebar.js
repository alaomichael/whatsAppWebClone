import { Avatar, Card, IconButton } from '@material-ui/core'
import { DonutLarge,Chat, MoreVert, SearchOutlined, Close } from '@material-ui/icons'
import React, { useState,useEffect } from 'react'
import db from '../../firebase'
import { useStateValue } from '../../StateProvider'
import SidebarChat from '../SidebarChat/SidebarChat'
import './Sidebar.css'

function Sidebar({ sidebarOpen, closeSidebar }) {
    const [rooms,setRooms] = useState([])
    const [{user}, dispatch] = useStateValue()
    useEffect(() => {
    const unsubscribe = db.collection('rooms').onSnapshot(snapshot =>(
        setRooms(snapshot.docs.map(doc => ({
            id:doc.id,
            data:doc.data()
        })))
    ))
    return () => {
        unsubscribe();
    }
    },[])
// unsubsribe is used to discontinue the real time snapshot of the db
    return (
        <Card  className= 'sidebar'>
           <div className='sidebar__header'>
                <Avatar src={user?.photoURL}/>
                <div className='sidebar__headerRight'>
                    <IconButton>
                         <DonutLarge/>
                    </IconButton>
                    <IconButton>
                         <Chat/>
                    </IconButton>
                    <IconButton>
                         <MoreVert/>
                    </IconButton>
                   
                    
         
         
                </div>
           </div>
           <Card className='sidebar__search'>
               <div className='sidebar__searchContainer'>
                    <SearchOutlined/>
                    <input 
                        placeholder='Search or start new chat' 
                        type='text'
                    />
               </div>
            </Card>
           <div className='sidebar__chats'>
               <SidebarChat addNewChat/>
              {rooms.map((room) => (
                  <SidebarChat 
                  key={room.id} 
                  id={room.id} 
                  name={room.data.name} />
              ))}
           </div>
        </Card>
       
    )
}

export default Sidebar
