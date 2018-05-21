import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import LocalStore from '../../util/localStore'
import {CITY_NAME} from "../../util/localStoreKey";
import * as userInfoActionFromOtherFile from '../../redux/actions/userInfo'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initDone: false
    }
  }

  componentDidMount() {
    this.init();
  }

  //城市初始化
  init() {
    let cityName = LocalStore.getItem(CITY_NAME);
    if (!cityName) {
      cityName = '北京'
    }

    //将城市信息存储到Redux中
    this.props.userInfoActions.update({
      cityName: cityName
    });

    this.setState({
      initDone: true
    })
  }

  render() {
    return (
      <div className='index'>
        {
          this.state.initDone
            ? this.props.children
            : <div>加载中...</div>
        }
      </div>
    )
  }
}

//redux react绑定
function mapStateToProps(state) {
  return {}
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
)(Index)