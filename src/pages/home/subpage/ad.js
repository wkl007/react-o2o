import React, { Component } from 'react'
import HomeAd from '../../../components/homeAd/homeAd'
import HomeServer from '../../../api/home'

class Ad extends Component {
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
    HomeServer.getAdData().then(res => {
      if (res.length) {
        this.setState({
          data: res,
        })
      }
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <div className='ad'>
        {
          this.state.data.length
            ? <HomeAd data={this.state.data}/>
            : <div style={{textAlign: 'center'}}>加载中...</div>
        }
      </div>
    )
  }
}

export default Ad