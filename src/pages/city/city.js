import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import LocalStore from '../../util/localStore'
import { CITY_NAME } from '../../util/localStoreKey'
import * as userInfoActionFromOtherFile from '../../redux/actions/userInfo'

import Header from '../../components/header/header'
import CurrentCity from '../../components/currentCity/currentCity'
import CityList from '../../components/cityList/cityList'

class City extends Component {
  changeCity = (newCity) => {
    if (!newCity) return
    if (window.confirm(`您选择的城市是:${newCity}`)) {
      //修改redux
      let userInfo = this.props.userInfo
      userInfo.cityName = newCity
      this.props.userInfoActions.update(userInfo)

      //修改本地存储
      LocalStore.setItem(CITY_NAME, newCity)
      this.props.history.goBack()
    }
  }

  render () {
    return (
      <div className='city'>
        <Header title='选择城市'/>
        <CurrentCity cityName={this.props.userInfo.cityName}/>
        <CityList changeFn={this.changeCity}/>
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
  return {
    userInfoActions: bindActionCreators(
      userInfoActionFromOtherFile, dispatch,
    ),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(City)