import { Avatar, Grid, Paper } from '@material-ui/core'

import AssignmentIcon from '@material-ui/icons/LockOpenOutlined'

import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import {  useEffect } from 'react'
import { useParams } from 'react-router-dom'
import {  booksbyid } from '../redux/action'

const Bookdetails = () => {
  
  const paperstyle = {
    padding: 20,
    height: '80vh',
    width: 400,
    margin: '20px auto'
  }
  const avatarstyle = { backgroundColor: 'green' }


  let params = useParams()
  const dispatch = useDispatch()
  console.log("book details here")
  const Bookdetail = useSelector(state => state.book)
  console.log(Bookdetail);
  console.log("Single book details here")
  

  useEffect(() => {
    console.log(params)
    dispatch(booksbyid(params.id))
  },[params.id] )
  return (
    <Grid>
      <Paper elevation={20} style={paperstyle}>
        <Grid align='center'>
          <Avatar style={avatarstyle}>
            <AssignmentIcon />
          </Avatar>
          <h2>Book Details</h2>
        </Grid>
        <Grid className='Books-preview'>
          <h1>
            Book Name: <br/>
          </h1>
          <h3> {Bookdetail.book} </h3>
          <h2>Author Name: </h2> <h3>{Bookdetail.author}</h3>
          <center><img src={Bookdetail.image} alt="Loading..." ></img></center>
        </Grid>
      </Paper>
    </Grid>
  )
}

export default Bookdetails
