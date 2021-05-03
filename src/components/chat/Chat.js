import { Avatar,Card,IconButton} from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons'
import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import db from '../../firebase'
import { useStateValue } from '../../StateProvider'
import './Chat.css'
import firebase from 'firebase'

function Chat() {
    // const [seed,setSeed] = useState('')
    const [input,setInput] =useState('')
    const { roomId } = useParams()
    const [roomName,setRoomName] =useState('')
    const [messages,setMessages] =useState([])
    const [{user}, dispatch] = useStateValue()
    // dependent on the roomId.Pulls room messages for different rooms
    useEffect(()=>{
        if(roomId){
            db.collection('rooms')
            .doc(roomId)
            .onSnapshot((snapshot) => setRoomName
            (snapshot.data().name))

            db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp','asc')
            .onSnapshot((snapshot) => 
            setMessages(snapshot.docs.map((doc)=>
            doc.data()))
            )
        }
    },[roomId])
    
    // useEffect(()=>{
    //     setSeed(Math.floor(Math.random()*5000))
    // },[])

    const sendMessage=(e)=>{
        e.preventDefault();
        console.log('you typed' ,input)

        // add inputted messages to database
        db.collection('rooms')
        .doc(roomId)
        .collection('messages').add({
            message:input,
            name:user.displayName,
            // get the server timestamp
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        setInput('');
    }
    return (
        <Card className='chat'>
 
            <div className='chat__header'>
                <Avatar  src={`https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random()*5000)}.svg`}/>
                <div className='chat__headerInfo'>
                    <h3>{roomName}</h3>
                    <p>Last seen at {' '}  {new Date(messages[messages.length -1]?.timestamp?.toDate()).toUTCString()}</p>
                </div>
                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                        <AttachFile/>
                    </IconButton>
                    <IconButton>
                        <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className='chat__body'>
                {messages.map((message) =>(
                    <p className={`chat__message ${message.name === user.displayName && 'chat__receiver'}`}>
                    <span className='chat__name'>{message.name}</span>
                    {message.message}
                    <span className='chat__timestamp'>
                        {new Date(message.timestamp?.toDate()).toUTCString()}
                    </span>
                    </p>
                ))}
                {/* if the user is signed in,the message background turns green */}
                
            </div>
            <div className='chat__footer'>
                <IconButton>
                    <InsertEmoticon/>
                </IconButton>
                <form>
                    <input 
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        type='text'
                        placeholder='Type a message'
                    />
                    <button 
                        type='submit'
                        onClick={sendMessage}
                    >Send a message</button>
                </form>
                <Mic/>
            </div>
        
        </Card>
       
    )
}

export default Chat
