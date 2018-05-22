import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.less'

class Item extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    let data = this.props.data
    return (
      <div className='list-item clear'>
        <Link to={`/detail/${data.id}`}>
          <div className='item-img-container float-left'>
            <img src={data.img} alt={data.img}/>
          </div>
          <div className='item-content'>
            <div className='item-title-container clear'>
              <h3 className='float-left'>{data.title}</h3>
              <span className='float-right'>{data.distance}</span>
            </div>
            <p className='item-sub-title'>
              {data.subTitle}
            </p>
            <div className='item-price-container clear'>
              <span className='price float-left'>¥{data.price}</span>
              <span className='mumkber float-right'>已售{data.mumber}</span>
            </div>
          </div>
        </Link>
      </div>
    )
  }
}

Item.propTypes = {
  data: PropTypes.object,
}

export default Item
