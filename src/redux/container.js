import { connect } from 'react-redux'
import { addTodo } from './action'
import App from '../App'
import { setCurrentUser } from '../userauth/Loginaction'

//getting data from reducer and use that data as a prop in the app.js function
const mapStateToProps = state => ({

  todos: state.data
})
//for update data in store
const mapDispatchToProps = dispatch => ({
  addTodo: () => dispatch(addTodo()),
  setCurrentUser: () => dispatch(setCurrentUser()),
  //   changeName:(name)=>{dispatch({type:'CHANGE_NAME',payload:name})}
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
