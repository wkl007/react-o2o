import React, {Component} from 'react';
import Item from './item/item'

class OrderList extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    let data = this.props.data;
    return (
      <div className='order-list'>
        {
          data.map((item, index) => {
            return <Item key={index} data={item} submitComment={this.props.submitComment}/>
          })
        }
      </div>
    )
  }
}


export default OrderList;