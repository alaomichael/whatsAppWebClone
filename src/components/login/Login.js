import { Button, Card } from '@material-ui/core'
import React from 'react'
import { auth, provider } from '../../firebase'
import { actionTypes } from '../../reducer'
import { useStateValue } from '../../StateProvider'
import logo from '../Images/whatsappLogo.png'
import './Login.css'

function Login() {
    const [{}, dispatch] = useStateValue()
    const signIn = ()=>{
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        })
        .catch((error) => alert(error.message));
    };

    return (
        <Card className='login'>
                <Card className='login__container'>
                <img src={logo} alt='logo'/>
                <div className='login__text'>
                    <h1>Sign in to WhatsApp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign in With Google
                </Button>
                </Card>    
        </Card>
    )
}

export default Login
