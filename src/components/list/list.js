import React, { Component } from 'react'
import Item from './item/item'
import PropTypes from 'prop-types'
import './style.less'

class ListComponent extends Component {
  render () {
    return (
      <div className='list-container'>
        {
          this.props.data.map((item, index) => {
            return <Item key={index} data={item}/>
          })
        }
      </div>
    )
  }
}

ListComponent.propTypes = {
  data: PropTypes.array,
}

export default ListComponent