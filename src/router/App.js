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

const routes = [
  {
    path: '/home',
    component: Home,
  },
  {
    path: '/city',
    component: City,
  },
  {
    path: '/login/:router?/:id?',
    component: Login,
  },
  {
    path: '/user',
    component: User,
  },
  {
    path: '/search/:category/:keyword?',
    component: Search,
  },
  {
    path: '/detail/:id',
    component: Detail,
  },
]

class App extends Component {
  render () {
    return (
      <div className="App">
        <Index>
          <Switch>
            <Redirect path="/" to={{pathname: '/home'}} exact/>
            {
              routes.map((item, index) => {
                return <Route key={index} path={item.path}
                              component={item.component}/>
              })
            }
            <Route component={NotFound}/>
          </Switch>
        </Index>
      </div>
    )
  }
}

export default withRouter(App)
