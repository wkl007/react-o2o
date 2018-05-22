import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import ListComponent from '../../../components/list/list'
import LoadMore from '../../../components/loadMore/loadMore'
import SearchServer from '../../../api/search'
import PropTypes from 'prop-types'

// 初始化一个组件的 state
const initialState = {
  data: [],
  hasMore: false,
  isLoadingMore: false,
  page: 1,
}

class List extends Component {
  constructor (props) {
    super(props)
    this.state = initialState
  }

  componentDidMount () {
    this.loadFirstPageData()
  }

  //除了首次render之后调用componentDidMount，其它render结束之后都是调用componentDidUpdate。
  componentDidUpdate (prevProps, prevState) {
    // console.log(prevProps, prevState)
    let keyword = this.props.keyword
    let category = this.props.match.params.category
    // 搜索条件完全相等时，忽略。重要！！！
    if (keyword === prevProps.keyword && category ===
      prevProps.match.params.category) return
    this.setState(initialState)
    this.loadFirstPageData()
  }

  loadFirstPageData = () => {
    let cityName = this.props.userInfo.cityName
    let keyword = this.props.keyword || ''
    let category = this.props.match.params.category
    SearchServer.getSearchData(0, cityName, category, keyword).then(res => {
      this.setState({
        hasMore: res.hasMore,
        data: this.state.data.concat(res.data),
      })
    }).catch(err => {
      console.log(err)
    })
  }

  loadMoreData = () => {
    this.setState({
      isLoadingMore: true,
    })
    let cityName = this.props.userInfo.cityName
    let page = this.state.page
    let keyword = this.props.keyword || ''
    let category = this.props.match.params.category
    SearchServer.getSearchData(page, cityName, category, keyword).then(res => {
      this.setState({
        page: page + 1,
        isLoadingMore: false,
        hasMore: res.hasMore,
        data: this.state.data.concat(res.data),
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <div className='list'>
        {
          this.state.data.length
            ? <ListComponent data={this.state.data}/>
            : <div style={{textAlign: 'center'}}>加载中...</div>
        }
        {
          this.state.hasMore
            ? <LoadMore isLoadingMore={this.state.isLoadingMore}
                        loadMoreFn={this.loadMoreData}/>
            : ''
        }
      </div>
    )
  }
}

List.propTypes = {
  keyword: PropTypes.string,
}

//redux react绑定
function mapStateToProps (state) {
  return {
    userInfo: state.userInfo,
  }
}

function mapDispatchToProps (dispatch) {
  return {}
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(List))
