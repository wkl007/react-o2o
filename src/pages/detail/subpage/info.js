import React, { Component } from 'react'
import DetailServer from '../../../api/detail'
import DetailInfo from '../../../components/detailInfo/detailInfo'
import PropTypes from 'prop-types'

class Info extends Component {
  constructor (props) {
    super(props)
    this.state = {
      info: false,
    }
  }

  componentDidMount () {
    this.getInfo()
  }

  getInfo = () => {
    let id = this.props.id
    DetailServer.getInfoData(id).then(res => {
      this.setState({
        info: res,
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <div>
        {
          this.state.info
            ? <DetailInfo data={this.state.info}/>
            : ''
        }
      </div>
    )
  }
}

Info.propTypes = {
  id: PropTypes.string,
}

export default Info