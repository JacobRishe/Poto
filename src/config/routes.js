import React from 'react'
import { Switch, Route } from 'react-router-dom'


import Landing from '../pages/Landing'
import Home from '../pages/Home'
import LogIn from '../pages/LogIn'
import SignUp from '../pages/SignUp'
import Profile from '../pages/Profile'
import MyPolls from '../pages/MyPolls'
import LogOut from '../pages/LogOut'

import { useRecoilValue } from 'recoil'
import { loggedInState } from '../recoil/selectors'

const Routes = (props) => {
  const loggedIn = useRecoilValue(loggedInState)

    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login">
          <LogIn setUserId={props.setUserId} />
        </Route>
        <Route path="/signup" component={SignUp} />

        { loggedIn && (

          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/profile" render={(routeProps) => {
              return <Profile { ...routeProps } userId={ props.userId } />
            }} />
            <Route path="/mypolls" component={MyPolls} />
            <Route exact path="/" component={LogOut} />
          </Switch>
        )}
      </Switch>
    )
  }
  export default Routes;

  