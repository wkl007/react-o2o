import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from '../../components/header/header'
import UserInfo from '../../components/userInfo/userInfo'
import OrderList from './subpage/orderList'

class User extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    if (!this.props.userInfo.username) {
      this.props.history.push('/login')
    }
  }

  render () {
    let userInfo = this.props.userInfo
    return (
      <div className='user'>
        <Header title='用户主页' backRouter='/home'/>
        <UserInfo username={userInfo.username} city={userInfo.cityName}/>
        <OrderList username={userInfo.username}/>
      </div>
    )
  }
}

//redux react绑定
function mapStateToProps (state) {
  return {
    userInfo: state.userInfo,
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(User)