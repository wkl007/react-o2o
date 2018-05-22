import React, { Component } from 'react'
import Header from '../../components/header/header'
import Info from './subpage/info'
import Buy from './subpage/buy'
import Comment from './subpage/comment'

class Detail extends Component {
  render () {
    let id = this.props.match.params.id
    return (
      <div className='header'>
        <Header title='商户详情' type='share'/>
        <Info id={id}/>
        <Buy id={id}/>
        <Comment id={id}/>
      </div>
    )
  }
}

export default Detail