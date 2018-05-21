import React, { Component } from 'react'

import './style.less'

class CurrentCitry extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='current-city'>
        <h2>{this.props.cityName}</h2>
      </div>
    )
  }
}

export default CurrentCitry