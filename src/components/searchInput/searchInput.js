import React, {Component} from 'react';

import './style.less'

class SearchInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
  }

  componentDidMount() {
    this.setState({
      value: this.props.value || ''
    })
  }

  //监控变化
  changeHandle = (e) => {
    this.setState({
      value: e.target.value
    })
  };

  //检控enter事件
  keyUpHandle = (e) => {
    if (e.keyCode !== 13) return;
    this.props.enterHandle(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        className='search-input'
        placeholder='请输入关键词'
        onChange={this.changeHandle}
        onKeyUp={this.keyUpHandle}
        value={this.state.value}
      />
    )
  }
}

export default SearchInput;