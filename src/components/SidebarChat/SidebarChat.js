import React,{useState,useEffect} from 'react'
import { Avatar, Card } from '@material-ui/core'
import './SidebarChat.css'
import db from '../../firebase'
import { Link } from 'react-router-dom';

function SidebarChat({id,name,addNewChat}) {
    const [seed,setSeed] =useState('');
    const [messages, setMessages] = useState('');

    useEffect(() => {
        if (id) {
            db.collection('rooms')
            .doc(id)
            .collection('messages')
            .orderBy('timestamp','desc')
            .onSnapshot((snapshot) =>
                setMessages(snapshot.docs.map((doc)=>
                doc.data()))
            );
        }
    },[id]);

    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[])

    const createChat =()=>{
        // enter name for new room
        const roomName = prompt('Please enter name for chat')
    
        if(roomName){
            // add created room to firestore db
            db.collection('rooms').add({
                name:roomName
            })
        }
    };

    return!addNewChat ? (
        // <Card>
            
        // </Card>
        // changes the url of clicked room
        <Link to={`/rooms/${id}`}>
            <Card className='sidebarChat'>
          <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
          <div className='sidebarChat__info'>
              <h2>{name}</h2>
              <p>{messages[0]?.message}</p>
          </div>
        </Card>
        </Link>
       
    ) : (
        <Card 
        onClick={createChat}
        className='sidebarChat'>
        <h3>Add New Chat</h3>
        </Card>
    );
}

export default SidebarChat
