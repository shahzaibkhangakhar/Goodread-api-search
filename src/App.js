import './App.css'
import Appbar from './components/Appbar'
import Login from './components/Login'
import NotFound from './components/Notfound'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import Homepage from './components/Homepage'
import AllBooks from './components/AllBooks'
import Bookdetails from './components/Bookdetails'

function App () {
  return (
    <Router>
      <div className='App'>
        <Appbar />
        <div className='content'>
          {/* <Home /> Home component ko route de ge ta k at a time sirf wohi show ho specific route p */}
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/allbooks/:bookstate' component={AllBooks}></Route>

            <Route path='/Bookdetails/:id' component={Bookdetails}></Route>

            <Route path='*'>
              <NotFound />
            </Route>
            <Route
              exact
              activeClassName
              current
              path='/Login'
              component={Login}
            ></Route>
            <Redirect from='/login' to='/' />
          </Switch>
        </div>
      </div>
    </Router>
  )
}

export default App
