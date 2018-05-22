import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.less'

class BuyAndStore extends Component {
  constructor (props) {
    super(props)

  }

  buyClickHandle = () => {
    let buyHandle = this.props.buyHandle
    buyHandle()
  }

  storeClickHandle = () => {
    let storeHandle = this.props.storeHandle
    storeHandle()
  }

  render () {
    return (
      <div className='buy-store-container clear'>
        <div className="item-container float-left">
          {
            this.props.isStore
              ? <button className="selected"
                        onClick={this.storeClickHandle}>已收藏</button>
              : <button onClick={this.storeClickHandle}>收藏</button>
          }
        </div>
        <div className="item-container float-right">
          <button onClick={this.buyClickHandle}>购买</button>
        </div>
      </div>
    )
  }
}

BuyAndStore.propTypes = {
  isStore: PropTypes.bool,
  buyHandle: PropTypes.func,
  storeHandle: PropTypes.func,
}

export default BuyAndStore