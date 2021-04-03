import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Landing from '../pages/Landing'
import Home from '../pages/Home'
import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp'
import Profile from '../pages/Profile'
import MyPolls from '../pages/MyPolls'
import LogOut from '../pages/LogOut'


const Routes = () => {
    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={LogIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/profile" component={Profile} />
        <Route path="/mypolls" component={MyPolls} />
        <Route exact path="/" component={LogOut} />
      </Switch>
    )
  }
  export default Routes;

  