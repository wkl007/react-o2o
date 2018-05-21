import React, {Component} from 'react';
import {connect} from 'react-redux';
import HomeHeader from '../../components/homeHeader/homeHeader'
import CateGory from '../../components/cateGory/cateGory'
import Ad from './subpage/ad'
import List from './subpage/list'


class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='home'>
        <HomeHeader cityName={this.props.userInfo.cityName}/>
        <CateGory/>
        <div style={{height: '15px'}}/>
        <Ad/>
        <List cityName={this.props.userInfo.cityName}/>
      </div>
    )
  }
}

//redux react 绑定
function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home)