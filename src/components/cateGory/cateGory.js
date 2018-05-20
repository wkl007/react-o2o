import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import {Link} from 'react-router-dom'

import './style.less'

class CateGory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    }
  }

  render() {
    let option = {
      auto: 3000,
      callback: (index)=> {
        this.setState({
          index: index
        })
      }
    };
    let data1 = [
      {
        id: 1,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/jingdian.png)`,
        },
        text: '景点',
        url: '/search/jingdian'
      },
      {
        id: 2,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/ktv.png)`,
        },
        text: 'KTV',
        url: '/search/ktv'
      }, {
        id: 3,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/gouwu.png)`,
        },
        text: '购物',
        url: '/search/gouwu'
      },
      {
        id: 4,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/shenghuofuwu.png)`,
        },
        text: '生活服务',
        url: '/search/shenghuofuwu'
      },
      {
        id: 5,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/jianshenyundong.png)`,
        },
        text: '健身运动',
        url: '/search/jianshenyundong'
      },
      {
        id: 6,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/meifa.png)`,
        },
        text: '美发',
        url: '/search/meifa'
      },
      {
        id: 7,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/qinzi.png)`,
        },
        text: '亲子',
        url: '/search/qinzi'
      },
      {
        id: 8,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/xiaochikuaican.png)`,
        },
        text: '小吃快餐',
        url: '/search/xiaochikuaican'
      },
      {
        id: 9,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/zizhucan.png)`,
        },
        text: '自助餐',
        url: '/search/zizhucan'
      },
      {
        id: 10,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/jiuba.png)`,
        },
        text: '酒吧',
        url: '/search/jiuba'
      },
    ];
    let data2 = [
      {
        id: 1,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/meishi.png)`,
        },
        text: '美食',
        url: '/search/meishi'
      },
      {
        id: 2,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/dianying.png)`,
        },
        text: '电影',
        url: '/search/dianying'
      }, {
        id: 3,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/jiudian.png)`,
        },
        text: '酒店',
        url: '/search/jiudian'
      },
      {
        id: 4,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/xuixianyule.png)`,
        },
        text: '休闲娱乐',
        url: '/search/xuixianyule'
      },
      {
        id: 5,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/waimai.png)`,
        },
        text: '外卖',
        url: '/search/waimai'
      },
      {
        id: 6,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/huoguo.png)`,
        },
        text: '火锅',
        url: '/search/huoguo'
      },
      {
        id: 7,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/liren.png)`,
        },
        text: '丽人',
        url: '/search/liren'
      },
      {
        id: 8,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/dujiachuxing.png)`,
        },
        text: '度假出行',
        url: '/search/dujiachuxing'
      },
      {
        id: 9,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/zuliaoanmo.png)`,
        },
        text: '足疗按摩',
        url: '/search/zuliaoanmo'
      },
      {
        id: 10,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/zhoubianyou.png)`,
        },
        text: '周边游',
        url: '/search/zhoubianyou'
      },
    ];
    let data3 = [
      {
        id: 1,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/ribencai.png)`,
        },
        text: '日本菜',
        url: '/search/ribencai'
      },
      {
        id: 2,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/SPA.png)`,
        },
        text: 'SPA',
        url: '/search/spa'
      }, {
        id: 3,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/jiehun.png)`,
        },
        text: '结婚',
        url: '/search/jiehun'
      },
      {
        id: 4,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/xuexipeixun.png)`,
        },
        text: '学习培训',
        url: '/search/xuexipeixun'
      },
      {
        id: 5,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/xican.png)`,
        },
        text: '西餐',
        url: '/search/xican'
      },
      {
        id: 6,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/huochejipiao.png)`,
        },
        text: '火车机票',
        url: '/search/huochejipiao'
      },
      {
        id: 7,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/shaokao.png)`,
        },
        text: '烧烤',
        url: '/search/shaokao'
      },
      {
        id: 8,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/jiazhuang.png)`,
        },
        text: '家装',
        url: '/search/jiazhuang'
      },
      {
        id: 9,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/chongwu.png)`,
        },
        text: '宠物',
        url: '/search/chongwu'
      },
      {
        id: 10,
        style: {
          backgroundImage: `url(https://react-o2o-1256738511.cos.ap-beijing.myqcloud.com/quanbufenlei.png)`,
        },
        text: '全部分类',
        url: '/search/quanbufenlei'
      },
    ];

    return (
      <div className='home-category'>
        <ReactSwipe swipeOptions={option}>
          <div className='carousel-item'>
            <ul className="clear">
              {
                data1.map((item) => {
                  return <Link to={item.url} key={item.id}>
                    <li className='float-left' style={item.style}>{item.text}</li>
                  </Link>
                })
              }
            </ul>
          </div>
          <div className='carousel-item'>
            <ul className="clear">
              {
                data2.map((item) => {
                  return <Link to={item.url} key={item.id}>
                    <li className='float-left' style={item.style}>{item.text}</li>
                  </Link>
                })
              }
            </ul>
          </div>
          <div className='carousel-item'>
            <ul className="clear">
              {
                data3.map((item) => {
                  return <Link to={item.url} key={item.id}>
                    <li className='float-left' style={item.style}>{item.text}</li>
                  </Link>
                })
              }
            </ul>
          </div>
        </ReactSwipe>
        <div className='index-container'>
          <ul>
            <li className={this.state.index === 0 ? 'selected' : ''}/>
            <li className={this.state.index === 1 ? 'selected' : ''}/>
            <li className={this.state.index === 2 ? 'selected' : ''}/>
          </ul>
        </div>
      </div>
    )
  }
}

export default CateGory;