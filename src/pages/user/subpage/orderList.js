import React, { Component } from 'react'
import OrderListServer from '../../../api/orderList'
import OrderListComponent from '../../../components/orderList/orderList'
import PropTypes from 'prop-types'
import './style.less'

class OrderList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
    }
  }

  componentDidMount () {
    this.initData()
  }

  initData = () => {
    OrderListServer.getOrderListData(this.props.username).then(res => {
      this.setState({
        data: res,
      })
    }).catch(err => {
      console.log(err)
    })
  }

  submitComment = (id, value, callback) => {
    OrderListServer.sendComment(id, value).then(res => {
      if (res.errno === 0) {
        callback()
      }
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <div className='order-list-container'>
        <h2>您的订单</h2>
        {
          this.state.data.length
            ? <OrderListComponent
              data={this.state.data}
              submitComment={this.submitComment}/>
            : <div style={{textAlign: 'center'}}>loading...</div>
        }
      </div>
    )
  }
}

OrderList.propTypes = {
  username: PropTypes.string,
}

export default OrderList