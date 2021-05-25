import { Link } from 'react-router-dom'

import React from 'react'
import { booksbypageno } from '../redux/action'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'

import CircularProgress from '@material-ui/core/CircularProgress'
import { Waypoint } from 'react-waypoint'

const AllBooks = () => {
  let params = useParams()

  const dispatch = useDispatch()
  const [page, setPage] = useState(1)

  const user = useSelector(state => state.currentUser)
  console.log(user)

  const RelatedBooks = useSelector(state => state.allbooks)

  const pagenoincrease = () => {
    setPage(page + 1)
    dispatch(booksbypageno(params.bookstate, page))
  }

  useEffect(() => {
    dispatch(booksbypageno(params.bookstate, page))
  }, [])
  console.log(page)

  if (!user) return <Redirect to='/Login'/>
  return (
    <div className='blog-list'>
      <h1>
        <b>All Books</b>
      </h1>
      <br />

      {RelatedBooks.map(i => (
        <div className='blog-preview' key={i}>
          <Link to={{ pathname: `/Bookdetails/${i.id}` }}>
            <p>Book id: {i.id}</p>
            <h2>Book Name: {i.book}</h2>
            <p>Author Name: {i.author}</p>

            <img src={i.image} alt='Loading...'></img>
          </Link>
        </div>
      ))}
      <Waypoint onEnter={pagenoincrease}>
        <div>
          <center>
            <CircularProgress />
          </center>
        </div>
      </Waypoint>
    </div>
  )
}

export default AllBooks
