###1.性能检测
react-addons-perf

###2.组件性能优化
1.react-addons-pure-render-mixin
2.PureComponent

###3.props里可以获取到
location
match
history

###4.技巧:所有的等号都是三等，除了null
jquery源码就是这种，程序中所有的等于判断都要用===,除了obj.c==null这种情况
if (cityName == null) {
      cityName = '北京'
    }
等价于===undefined     ===null

###5.react router v4中js怎么控制路由跳转
通过withRouter来控制跳转
    go()    1   -1
    goBack()
    goForward()
    replace()
    push()


###6.轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe

###7.路由可选参数

    <Route path="/to/page/:pathParam?" component={MyPage} />

###8.fetch
两个用法中，只有res.text()和res.json()这里不一样————这两个方法就是将返回的 Response 数据转换成字符串或者JSON格式，这也是 js 中常用的两种格式。

    result.then(res => {
          return res.text()
        }).then(text => {
          console.log(text)
        })
    -----------------------
    result.then(res => {
            return res.json()
        }).then(json => {
            console.log(json)
        })

###9.react中获取DOM元素

    <div className="load-more" ref="wrapper">
    </div>

    const wrapper = this.refs.wrapper;

###10.无限加载
    function callback() {
        const top = wrapper.getBoundingClientRect().top;
        const windowHeight = window.screen.height;
        if (top && top < windowHeight) {
            //证明wrapper已经被滚动到暴露在页面可视范围之内了
            loadMoreFn()
        }
    }

    window.addEventListener('scroll', function () {
          // console.log(this.props.isLoadingMore);
          if (this.props.isLoadingMore) {
            return
          }
          if (timeoutId) {
            clearTimeout(timeoutId)
          }
          timeoutId = setTimeout(callback(), 50)

    }.bind(this), false)

###11.获取路由参数
    console.log(this.props.match.params)

###12.withRouter与connect配合使用
    export default withRouter(connect(
      mapStateToProps,
      mapDispatchToProps
    )(List))

###13.在标签中使用dangerouslySetInnerHTML,可能存在XSS攻击

    let html1 = '哈哈&nbsp;哈哈';

    <p dangerouslySetInnerHTML={{__html: html1}}></p>

###14.js中trim()方法去掉首尾空格


