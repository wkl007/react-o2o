import React, { Component } from 'react'
import DetailServer from '../../../api/detail'
import ListComment from '../../../components/commentList/commentList'
import LoadMore from '../../../components/loadMore/loadMore'
import PropTypes from 'prop-types'
import './style.less'

class Comment extends Component {
  constructor (props) {
    super(props)
    let initialState = {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 1,
    }
    this.state = initialState
  }

  componentDidMount () {
    this.loadFirstPageData()
  }

  loadFirstPageData = () => {
    let id = this.props.id
    DetailServer.getCommentData(0, id).then(res => {
      this.setState({
        data: this.state.data.concat(res.data),
        hasMore: res.hasMore,
      })
    }).catch(err => {
      console.log(err)
    })
  }

  loadMoreData = () => {
    this.setState({
      isLoadingMore: true,
    })
    let id = this.props.id
    let page = this.state.page
    DetailServer.getCommentData(page, id).then(res => {
      this.setState({
        data: this.state.data.concat(res.data),
        hasMore: res.hasMore,
        page: page + 1,
        isLoadingMore: false,
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render () {
    return (
      <div className='detail-comment-subpage'>
        <h2>用户评论</h2>
        {
          this.state.data.length
            ? <ListComment data={this.state.data}/>
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
Comment.propTypes = {
  id: PropTypes.string,
}

export default Comment