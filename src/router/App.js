import React, { Component } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

import Index from '../pages/index/index'
import Home from '../pages/home/home'
import City from '../pages/city/city'
import Login from '../pages/login/login'
import User from '../pages/user/user'
import Search from '../pages/search/search'
import Detail from '../pages/detail/detail'
import NotFound from '../pages/notFound/notFound'

class App extends Component {
  render () {
    return (
      <div className="App">
        <Index>
          <Switch>
            <Redirect path="/" to={{pathname: '/home'}} exact/>
            <Route path='/home' component={Home}/>
            <Route path='/city' component={City}/>
            <Route path='/login/:router?' component={Login}/>
            <Route path='/user' component={User}/>
            <Route path='/search/:category/:keyword?' component={Search}/>
            <Route path='/detail/:id' component={Detail}/>
            <Route component={NotFound}/>
          </Switch>
        </Index>
      </div>
    )
  }
}

export default withRouter(App)
