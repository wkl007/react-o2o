import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SearchInput from '../searchInput/searchInput'
import PropTypes from 'prop-types'
import './style.less'

class SearchHeader extends Component {
  enterHandle = (value) => {
    this.props.history.push(
      `/search/${this.props.match.params.category}/${value}`)
  }

  clickHandle = () => {
    this.props.history.goBack()
  }

  render () {
    return (
      <div className='search-header clear'>
        <span className='back-icon float-left' onClick={this.clickHandle}>
          <i className='icon-chevron-left'/>
        </span>
        <div className='input-wrapper'>
          <i className="icon-search"/>
          &nbsp;
          <SearchInput value={this.props.keyword || ''}
                       enterHandle={this.enterHandle}/>
        </div>
      </div>
    )
  }
}

SearchHeader.propTypes = {
  keyword: PropTypes.string,
}

export default withRouter(SearchHeader)