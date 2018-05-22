import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as storeActionsFromOtherFiile from '../../../redux/actions/store'
import BuyAndStore from '../../../components/buyAndStore/buyAndStore'

class Buy extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isStore: false,
    }
  }

  componentDidMount () {
    this.checkStoreState()
  }

  //验证当前商户是否收藏
  checkStoreState = () => {
    let id = this.props.id
    let store = this.props.store
    store.forEach(item => {
      if (item.id === id) {
        this.setState({
          isStore: true,
        })
        return true
      }
    })
  }

  //检查是否登录
  loginCheck = () => {
    let id = this.props.id
    let userInfo = this.props.userInfo
    if (!userInfo.username) {
      this.props.history.push(`/login/detail/${id}`)
      return false
    } else {
      return true
    }
  }

  //购买事件
  buyHandle = () => {
    //验证登录，未登录则return
    let loginFlag = this.loginCheck()
    if (!loginFlag) return

    //此过程为模拟购买，因此可省去复杂的购买过程
    //跳转到用户主页
    this.props.history.push('/user')
  }

  //收藏事件
  storeHandle = () => {
    let loginFlag = this.loginCheck()
    if (!loginFlag) return

    let id = this.props.id
    let storeActions = this.props.storeActions
    if (this.state.isStore) {
      storeActions.rm({id: id})
    } else {
      storeActions.add({id: id})
    }
    this.setState({
      isStore: !this.state.isStore,
    })
  }

  render () {
    return (
      <BuyAndStore isStore={this.state.isStore}
                   buyHandle={this.buyHandle}
                   storeHandle={this.storeHandle}/>
    )
  }
}

Buy.propTypes = {
  id: PropTypes.string,
}

//redux react绑定
function mapStateToProps (state) {
  return {
    userInfo: state.userInfo,
    store: state.store,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    storeActions: bindActionCreators(
      storeActionsFromOtherFiile, dispatch,
    ),
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(Buy))