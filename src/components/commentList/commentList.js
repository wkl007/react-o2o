import React, { Component } from 'react'
import Item from './item/item'
import PropTypes from 'prop-types'
import './style.less'

class CommentList extends Component {
  constructor (props) {
    super(props)

  }

  render () {
    let data = this.props.data
    return (
      <div className="comment-list">
        {
          data.map((item, index) => {
            return <Item key={index} data={item}/>
          })
        }
      </div>
    )
  }
}

CommentList.propTypes = {
  data: PropTypes.array,
}

export default CommentList