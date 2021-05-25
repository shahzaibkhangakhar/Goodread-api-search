import axios from 'axios'
import XMLParser from 'react-xml-parser'
export const SEARCH_BY_BOOK_TITLE = 'SEARCH_BY_BOOK_TITLE'
export const SEARCH_BY_BOOK_ID = 'SEARCH_BY_BOOK_ID'
export const SEARCH_BY_PAGE_NO = 'SEARCH_BY_PAGE_NO'
export const SETCURRENTUSER = 'SETCURRENTUSER'
export const CLEARCURRENTUSER = 'CLEARCURRENTUSER'

export const addTodo = bookstate => dispatch => {
  let bookarrays,
    Bookdetails = []

  axios
    .get(
      `https://www.goodreads.com/search.xml?key=1ZxFQbzZmJL2il7vtO9jnA&q=${bookstate}`
    )
    .then(res => {
      //console.log(res)
      //convert xml to json
      var xml = new XMLParser().parseFromString(res.data)
     // console.log(xml)
      //get Book names from json
      bookarrays = xml.children[1].children[6].children
      Bookdetails = bookarrays.map(i => {
        return {
        id: i.children[8].children[0].value,
          book_name: i.children[8].children[1].value,
          author_name: i.children[8].children[2].children[1].value,
          Book_image: i.children[8].children[3].value
        }
      })
//20 books details in bookdetails
//console.log(Bookdetails)

      return dispatch({
        type: SEARCH_BY_BOOK_TITLE,
        payload: Bookdetails
      })
    })
    .catch(err => console.log(err))
}



export const booksbyid = id => dispatch => {
  console.log(id)
  axios
    .get(`https://www.goodreads.com/book/show/${id}?key=FtRVHgmjzjpzKjCt3SUMw`)


    

    .then(response => {
      let jsonsData = new XMLParser().parseFromString(response.data)

      console.log(jsonsData)
      let bookList = jsonsData.children[1].children
      console.log("here is the book list of id")
      console.log(bookList)
      let booksid = {
        book: bookList[1].value,
        image: bookList[8].value,
        author: bookList[26].children[0].children[1].value,
        // author: bookList[26].children[1].children[1].value 

      }

      console.log(booksid)
      dispatch({
        type: SEARCH_BY_BOOK_ID,
        payload: booksid
      })
    })
    .catch(err => console.log(err))
}

export const booksbypageno = (bookstate, page) => dispatch => {
  console.log(page)
  axios
    .get(
      `https://www.goodreads.com/search/index.xml?key=FtRVHgmjzjpzKjCt3SUMw&q=${bookstate}+&page=${page}`
    )

    .then(response => {
      let jsonData = new XMLParser().parseFromString(response.data)
      console.log(jsonData)
      let AllbooksList = jsonData.children[1].children[6].children
      if (AllbooksList && AllbooksList.length) {
       let AllselectedFilter = AllbooksList.map(i => {
          return {
            id: i.children[8].children[0].value,
            book: i.children[8].children[1].value,
            author: i.children[8].children[2].children[1].value,
            image: i.children[8].children[3].value
          
          }
          console.log(i)
        })
        console.log(AllselectedFilter)
        dispatch({
          type: SEARCH_BY_PAGE_NO,
          payload: AllselectedFilter
        })
      } else {
        console.log('no more results again again')
      }
    })
    .catch(err => console.log(err))
}

export const setCurrentUser = user => dispatch => {
  console.log(user)
  return dispatch({
    type: SETCURRENTUSER,
    payload: user
  })
}

export const clearCurrentUser = () => dispatch => {
  return dispatch({
    type: CLEARCURRENTUSER
  })
}

