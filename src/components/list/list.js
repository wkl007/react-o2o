import React, {Component} from 'react';
import Item from './item/item'

import './style.less'

class ListComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
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

export default ListComponent;