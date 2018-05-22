import React, { Component } from 'react'
import Star from '../star/star'
import PropTypes from 'prop-types'
import './style.less'

class DetailInfo extends Component {
  constructor (props) {
    super(props)

  }

  render () {
    let data = this.props.data
    return (
      <div className="detail-info-container">
        <div className="info-container clear">
          <div className="info-img-container float-left">
            <img src={data.img} alt=""/>
          </div>
          <div className="info-content">
            <h1>{data.title}</h1>
            <div className="star-container">
              <Star star={data.star}/>
              <span className="price">¥{data.price}</span>
            </div>
            <p className="sub-title">{data.subTitle}</p>
          </div>
        </div>
        <p className="info-desc" dangerouslySetInnerHTML={{__html: data.desc}}/>
      </div>
    )
  }
}

DetailInfo.propTypes = {
  data: PropTypes.object,
}

export default DetailInfo