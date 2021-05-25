import * as actions from './action'
//data comes from action to this state
const initialState = {
    books: [],
    book: '',
    allbooks: [],
    currentUser: '',
  }
//reducer
export default function Booksdetails (state = initialState, action) {
    
    switch (action.type){
     
        case actions.SEARCH_BY_BOOK_TITLE:
            return{
                ...state,
                books:action.payload,
            }
            case actions.SEARCH_BY_BOOK_ID:
               
                return{
                    ...state,
                    book:action.payload,
                }
                case actions.SEARCH_BY_PAGE_NO:
               
                return{
                    ...state,
                    allbooks:[...state.allbooks, ...action.payload]
                }
                case actions.SETCURRENTUSER:
                    console.log(action.payload)
                    //  console.log("user in reducer");
                    //  console.log(state)
                    return {
                      ...state,
                      currentUser: action.payload
                    }
              
                  case actions.CLEARCURRENTUSER:
                    return {
                      ...state,
                      currentUser: ''
                    }
            default:
                return state
    }

 
}