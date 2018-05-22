import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.less'

class HomeAd extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='home-ad'>
        <h2>超值特惠</h2>
        <div className='ad-container clear'>
          {
            this.props.data.map((item, index) => {
              return <div className='ad-item float-left' key={index}>
                <a href={item.link} target='_blank'>
                  <img src={item.img} alt={item.title}/>
                </a>
              </div>
            })
          }
        </div>
      </div>
    )
  }
}

HomeAd.propTypes = {
  data: PropTypes.array,
}

export default HomeAd