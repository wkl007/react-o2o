import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import * as userInfoActionFromOtherFile from '../../redux/actions/userInfo'

import Header from '../../components/header/header'
import LoginComponent from '../../components/login/login'


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checking: true
    }
  }

  componentDidMount() {
    this.doCheck();
  }

  doCheck = () => {
    let userInfo = this.props.userInfo;
    if (userInfo.username) {
      this.goUserPage()
    } else {
      this.setState({
        checking: false
      })
    }
  }

  loginHandle = (username) => {
    let actions = this.props.userInfoActions;
    let userInfo = this.props.userInfo;
    userInfo.username = username;
    actions.update(userInfo);
    let params = this.props.match.params;
    let router = params.router;
    if (router) {
      this.props.history.push(router)
    } else {
      this.goUserPage();
    }
  }

  goUserPage = () => {
    this.props.history.push('/user')
  }

  render() {
    return (
   <div className='login'>
     <Header title='登录'/>
     {
       this.state.checking
       ? <div style={{textAlign:'center'}}>loading...</div>
         : <LoginComponent loginHandle={this.loginHandle}/>
     }
   </div>
    )
  }
}

//redux react绑定
function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(
      userInfoActionFromOtherFile, dispatch
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)