import React, { Component } from 'react'

import SearchHeader from '../../components/searchHeader/searchHeader'
import SearchList from './subpage/list'

class Search extends Component {
  render () {
    let params = this.props.match.params
    return (
      <div>
        <SearchHeader keyword={params.keyword}/>
        <SearchList keyword={params.keyword}/>
      </div>
    )
  }
}

export default Search