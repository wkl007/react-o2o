import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.less'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
    }
  }

  changeHandle = (e) => {
    this.setState({
      username: e.target.value,
    })
  }

  clickHandle = () => {
    let username = this.state.username
    let loginHandle = this.props.loginHandle
    loginHandle(username)
  }

  render () {
    return (
      <div className='login-container'>
        <div className="input-container phone-container">
          <i className="icon-tablet"/>
          <input type="text" placeholder='输入手机号' value={this.state.username}
                 onChange={this.changeHandle}/>
        </div>
        <div className="input-container password-container">
          <i className="icon-key"/>
          <button>验证码</button>
          <input type="text" placeholder="验证码"/>
        </div>
        <button className='btn-login' onClick={this.clickHandle}>登录</button>
      </div>
    )
  }
}

Login.propTypes = {
  loginHandle: PropTypes.func,
}

export default Login