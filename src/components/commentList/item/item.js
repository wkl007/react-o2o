import React, { Component } from 'react'
import Star from '../../star/star'
import PropTypes from 'prop-types'
import './style.less'

class Item extends Component {
  constructor (props) {
    super(props)

  }

  render () {
    let item = this.props.data
    return (
      <div className='comment-item'>
        <h3>
          <i className="icon-user"/>
          &nbsp;
          {item.username}
        </h3>
        <Star star={item.star}/>
        <p>{item.comment}</p>
      </div>
    )
  }
}

Item.propTypes = {
  data: PropTypes.object,
}

export default Item