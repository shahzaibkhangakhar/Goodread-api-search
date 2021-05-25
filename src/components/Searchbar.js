//.........................................................imports............................................................
import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { Grid, Button } from '@material-ui/core'
import { addTodo } from '../redux/action'
import { useDispatch,useSelector } from 'react-redux'

export default function ComboBox () {
  const history = useHistory()
  const [bookstate, setbookstate] = useState('all')
  const dispatch = useDispatch()
 
  const textfieldstyle = { margin: '100px auto' }
  const btnstyle = { margin: '8px 0' }

  const AllBooks = useSelector(state => state.books)
  // console.log("All books down here in searchbar");  
  // console.log(AllBooks);
 //.....................................hook on every time render.............
  useEffect(() => {
    dispatch(addTodo(bookstate))
  },[bookstate])
//..........................................autocomplete change................
  const handleOptionChange = (e, v) => {
    console.log(v.id)

    if (v.id) {
      history.push(`/Bookdetails/${v.id}`)
    }
  }

  //.......................................on button click..................
  const handleClick = () => {
    console.log(bookstate)
    if (bookstate) {
      history.push(`/AllBooks/${bookstate}`)
    }
  }
  //.........................................return..........................
  return (
    <Grid align='center' style={textfieldstyle}>
      <Autocomplete
        id='combo-box-demo'
        //free solo use krte hai search box me kuch b text add krne k lia wrna auto complete me sirf options wale select ho skte hai.
        freeSolo
        options={AllBooks}
        getOptionLabel={option => option.book_name}
        onChange={handleOptionChange}
        style={{ width: 800 }}
        onInputChange={(event, newInputValue) => {
          setbookstate(newInputValue)
          console.log('yha value change ho gi')
          console.log(newInputValue)
        }}
        inputValue={bookstate}
        renderInput={params => (
          <TextField {...params} label='Combo box' variant='outlined' />
        )}
      />

      <Button
        variant='contained'
        type='submit'
        color='primary'
        style={btnstyle}
        onClick={handleClick}
      >
        Search
      </Button>
    </Grid>
  )
}

