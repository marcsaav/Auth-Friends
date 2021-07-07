import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import {PrivateRoute} from './components/PrivateRoute'
import FriendsList from './components/FriendsList'
import Login from './components/Login'
import AddFriend from './components/AddFriend'

import { axiosWithAuth } from './utils/axiosWithAuth'

function App() {

  const logout = () => {
    axiosWithAuth()
      .post("/logout")
      .then(req=>{
        localStorage.removeItem("token");
      })
      .catch(err=>{
        alert('Trying to log you out bud');
      })
  };

  return (
    <Router>
      <div className="App">
        <h1>Enter to see your friends!</h1>
        <Link to='/login'>Login</Link>
        <Link to='/' onClick={logout}>Logout</Link>
          <Switch>
            <PrivateRoute exact path="/friends" component={FriendsList} />
            <Route path='/login' component={Login} />
            <Route path='/add-friend' component={AddFriend} />
            <Route path='/' />
          </Switch>
      </div>
    </Router>
  );
}

export default App;
