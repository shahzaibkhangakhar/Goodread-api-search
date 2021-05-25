import {
  Avatar,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Link
} from '@material-ui/core'
import { Alert } from 'react-alert'

import LockOpenOutlinedIcon from '@material-ui/icons/LockOpenOutlined';
import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {setCurrentUser,clearCurrentUser} from '../userauth/Loginaction'

const Login = () => {
  

  //..............................function.................................

  const dispatch = useDispatch()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false)

  // login the user
  const handleSignIn = e => {
    e.preventDefault()
    if(email === "shahzaibgakhar" && password === "1234") {
      const user={email,password}
      console.log(user)
      localStorage.setItem("token", "11223344");
      setLoggedIn(true);
      dispatch(setCurrentUser(user))
    }
    else {
      alert("Username or password is incorrect");}
  }
  if(loggedIn) {
    return <Redirect to="/" />
  }
  else {
    
   <Redirect to="/login" />
 
  }

  //.......................styling............................
  const paperstyle = {
    padding: 20,
    height: '50vh',
    width: 400,
    margin: '100px auto'
  }
  const avatarstyle = { backgroundColor: 'green' }
  const btnstyle = { margin: '8px 0' };





  //............................form....................................


  return (
    <Grid>
      <Paper elevation={10} style={paperstyle}>
        <Grid align='center'>
          <Avatar style={avatarstyle}>
            <LockOpenOutlinedIcon />
          </Avatar>
          <h2>Sign in</h2>
        </Grid>
        <TextField
        id='username'
          label='Username'
          placeholder='Enter Username'
          fullWidth
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <TextField
        id='password'
          label='Password'
          placeholder='Enter Password'
          type='password'
          fullWidth
          required
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <FormControlLabel
          control={<Checkbox name='checked' color='secondary' />}
          label='Remember me'
        />
        <br />
        <Button
          variant='contained'
          type='submit'
          color='primary'
          fullWidth
          style={btnstyle}
          onClick={handleSignIn}
        >
          Sign in
        </Button>

        <Typography>
          <Link href='#'>Forgot Password!</Link>
        </Typography>
        <Typography>
          Do you have an Account? <Link href='#'>Sign Up</Link>
        </Typography>
      </Paper>
    </Grid>
  )}


export default Login
