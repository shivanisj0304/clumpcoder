import React,{useState} from 'react';
import {GoogleLogin,GoogleLogout} from 'react-google-login';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        position:'absolute',
        top:'50%',
        left:'50%',
        marginTop: '-50px',
        marginLeft: '-50px',
      }
}))


export default function Login(){
    const classes = useStyles();
   const [showLoginButton,setShowLoginButton]=useState(true);
   const [showLogoutButton,setShowLogoutButton]=useState(false);
    const clientId="239411701975-jb7b7glg9i1oksk2vhetqi236o8tlif6.apps.googleusercontent.com";

    const onLoginSuccess = (res) =>{
        console.log('Login success:',res.profileObj);
        setShowLoginButton(false);
        setShowLogoutButton(true);
    }

    const onFailureSuccess =(res)=>{
        console.log('Login fail:',res);
    }

    const onSignoutSuccess =()=>{
        alert("Sign out successfully");
        setShowLoginButton(true);
        setShowLogoutButton(false);
    }

    return(
      <div className={classes.root}>
   {showLoginButton ?
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={onLoginSuccess}
      onFailure={onFailureSuccess}
      cookiePolicy={'single_host_origin'}
    /> :null
    }

   {showLogoutButton ?
  <GoogleLogout
      clientId={clientId}
      buttonText="Logout"
      onLogoutSuccess={onSignoutSuccess}
    >
    </GoogleLogout> : null 
     }

    </div>)
}