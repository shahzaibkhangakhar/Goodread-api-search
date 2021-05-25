import {combineReducers} from 'redux'
import bookreducer from './reducer'
import userreducer from '../userauth/Loginreducer'

// const rootReducer= combineReducers({
//     books: reducer,
//     auth: authReducer,
// })

const rootReducer = () =>
  combineReducers({
    bookreducer,
    userreducer,
        
  });
export default rootReducer