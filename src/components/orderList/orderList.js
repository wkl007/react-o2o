import React, { Component } from 'react'
import Item from './item/item'
import PropTypes from 'prop-types'

class OrderList extends Component {
  render () {
    let data = this.props.data
    return (
      <div className='order-list'>
        {
          data.map((item, index) => {
            return <Item key={index} data={item}
                         submitComment={this.props.submitComment}/>
          })
        }
      </div>
    )
  }
}

OrderList.propTypes = {
  data: PropTypes.array,
}

export default OrderList