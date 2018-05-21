import React, { Component } from 'react'

import './style.less'

class LoadMore extends Component {
  constructor (props) {
    super(props)
    this.wrapper = React.createRef()
    this.loadMoreHandle = this.loadMoreHandle.bind(this)
  }

  componentDidMount () {
    this.init()
  }

  //使用滚动式自动加载更多
  init () {
    let loadMoreFn = this.props.loadMoreFn
    let wrapper = this.wrapper.current
    let timeoutId

    function callback () {
      let top = wrapper.getBoundingClientRect().top
      let windowHeight = window.screen.height
      if (top && top < windowHeight) {
        //证明wrapper已经被滚动到暴露在页面可视范围之内了
        loadMoreFn()
      }
    }

    window.addEventListener('scroll', function () {
      if (this.props.isLoadingMore) return
      if (timeoutId) clearTimeout(timeoutId)
      timeoutId = setTimeout(callback, 50)
    }.bind(this), false)
  }

  //传输过来的函数
  loadMoreHandle () {
    this.props.loadMoreFn()
  }

  render () {
    return (
      <div className='load-more' ref={this.wrapper}>
        {
          this.props.isLoadingMore
            ? <span>加载中...</span>
            : <span onClick={this.loadMoreHandle}>加载更多</span>
        }
      </div>
    )
  }
}

export default LoadMore