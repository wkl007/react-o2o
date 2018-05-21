import React, {Component} from 'react';
import HomeServer from '../../../api/home'
import ListComponent from '../../../components/list/list'
import LoadMore from '../../../components/loadMore/loadMore'

import './style.less'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      hasMore: false,
      isLoadingMore: false,
      page: 1
    };
  }

  componentDidMount() {
    this.loadFirstPageData();
  }

  loadFirstPageData = () => {
    let cityName = this.props.cityName;
    HomeServer.getListData(cityName, 0).then(res => {
      this.setState({
        hasMore: res.hasMore,
        data: this.state.data.concat(res.data)
      })
    }).catch(err => {
      console.log(err)
    })
  }

  loadMoreData = () => {
    this.setState({
      isLoadingMore: true
    });
    let cityName = this.props.cityName;
    let page = this.state.page;
    HomeServer.getListData(cityName, page).then(res => {
      this.setState({
        hasMore: res.hasMore,
        data: this.state.data.concat(res.data),
        page: page + 1,
        isLoadingMore: false,
      })
    }).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <div className='list'>
        <h2 className='home-list-title'>猜你喜欢</h2>
        {
          this.state.data.length
            ? <ListComponent data={this.state.data}/>
            : <div style={{textAlign: 'center'}}>加载中...</div>
        }
        {
          this.state.hasMore
            ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData}/>
            : ''
        }
      </div>
    )
  }
}

export default List;
