import { Avatar,IconButton} from '@material-ui/core'
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons'
import React,{useState,useEffect} from 'react'
import './Chat.css'

function Chat() {
    const [seed,setSeed] = useState('')
    const [input,setInput] =useState('')
    
    useEffect(()=>{
        setSeed(Math.floor(Math.random()*5000))
    },[])

    const sendMessage=(e)=>{
        e.preventDefault();
        console.log('you typed' ,input)
        setInput('');
    }
    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar  src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`}/>
                <div className='chat__headerInfo'>
                    <h3>Room name</h3>
                    <p>Last seen at ...</p>
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
                {/* if the user is signed in,the message background turns green */}
                <p className={`chat__message ${true && 'chat__receiver'}`}>
                <span className='chat__name'>John</span>
                Hey
                <span className='chat__timestamp'>3.49pm</span>
                </p>
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
        </div>
    )
}

export default Chat
