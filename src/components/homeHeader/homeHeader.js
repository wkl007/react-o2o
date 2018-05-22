import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import SearchInput from '../searchInput/searchInput'
import PropTypes from 'prop-types'
import './style.less'

class HomeHeader extends Component {
  constructor (props) {
    super(props)
  }

  enterHandle = (value) => {
    this.props.history.push(`/search/all/${value}`)
  }

  render () {
    return (
      <div className='clear home-header'>
        <div className="home-header-left float-left">
          <Link to='/city'>
            <span>{this.props.cityName}</span>
            &nbsp;
            <i className="icon-angle-down"/>
          </Link>
        </div>
        <div className="home-header-right float-right">
          <Link to='/login'>
            <i className="icon-user"/>
          </Link>
        </div>
        <div className="home-header-middle">
          <div className="search-container">
            <i className="icon-search"/>
            &nbsp;
            <SearchInput value='' enterHandle={this.enterHandle}/>
          </div>
        </div>
      </div>
    )
  }
}

HomeHeader.propTypes = {
  cityName: PropTypes.string,
}

export default withRouter(HomeHeader)