import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.less'

class Header extends Component {
  clickHandle = () => {
    let backRouter = this.props.backRouter
    if (backRouter) {
      this.props.history.push(backRouter)
    } else {
      if (this.props.history.length <= 2) {
        this.props.history.push('/home')
      } else {
        this.props.history.goBack()
      }
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

Header.propTypes = {
  backRouter: PropTypes.string,
  title: PropTypes.string,
}

export default withRouter(Header)