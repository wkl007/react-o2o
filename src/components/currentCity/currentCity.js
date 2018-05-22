import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.less'

class CurrentCitry extends Component {
  render () {
    return (
      <div className='current-city'>
        <h2>{this.props.cityName}</h2>
      </div>
    )
  }
}

CurrentCitry.propTypes = {
  cityName: PropTypes.string,
}

export default CurrentCitry