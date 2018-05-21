import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import './style.less'

class Header extends Component {
  constructor (props) {
    super(props)
  }

  clickHandle = () => {
    let backRouter = this.props.backRouter
    if (backRouter) {
      this.props.history.push(backRouter)
    } else {
      this.props.history.goBack()
    }
  }

  render () {
    return (
      <div className='common-header'>
        <span className='back-icon' onClick={this.clickHandle}>
          <i className='icon-chevron-left'/>
        </span>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

export default withRouter(Header)