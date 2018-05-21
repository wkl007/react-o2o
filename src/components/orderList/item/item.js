import React, {Component} from 'react';

import './style.less'

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentState: 2,//0-未评价 1-评价中 2-已评价
    }
    this.commentText = React.createRef();
  }

  componentDidMount() {
    this.setState({
      commentState: this.props.data.commentState
    })
  }

  showComment = () => {
    this.setState({
      commentState: 1
    })
  }

  commentOk = () => {
    this.setState({
      commentState: 2
    })
  }

  hideComment = () => {
    this.setState({
      commentState: 0
    })
  }

  submitComment = () => {
    let submitComment = this.props.submitComment;
    let id = this.props.data.id;
    let commentText = this.commentText.current;
    let value = commentText.value.trim();
    if (!value) return;
    submitComment(id, value, this.commentOk);
  }

  render() {
    let data = this.props.data;
    return (
      <div className='order-item-container'>
        <div className='clear'>
          <div className="order-item-img float-left">
            <img src={data.img} alt=""/>
          </div>
          <div className='order-item-comment float-right'>
            {
              this.state.commentState === 0
                ? <button className='btn' onClick={this.showComment}>评价</button>
                : this.state.commentState === 1
                ? ''
                : <button className='btn unselected-btn'>已评价</button>
            }
          </div>
          <div className="order-item-content">
            <span>商户:{data.title}</span>
            <span>数量:{data.count}</span>
            <span>价格:¥{data.price}</span>
          </div>
        </div>
        {
          this.state.commentState === 1
            ? <div className='comment-text-container'>
                <textarea
                  style={{width: '100%', height: '80px', resize: 'none'}} className="comment-text"
                  ref={this.commentText}/>
              <button className="btn" onClick={this.submitComment}>提交</button>
              &nbsp;
              <button className="btn unselected-btn" onClick={this.hideComment}>取消</button>
            </div>
            : ''
        }
      </div>
    )
  }
}

export default Item;