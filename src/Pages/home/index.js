import React, { Component } from 'react'
import { connect } from 'react-redux'
import { homeDataInit } from './store/actionCreators'
import List from './components/list'
import Recommend from './components/recommend'
import Writer from './components/writer'
import { BackTop } from 'antd'
import { BackTopInner } from './style'

class Home extends Component {
  render() {
    return (
      <div className='container mt-3'>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="row">
              <div className="col-md-8 justify-content-center home-left">
                <img className='w-100 rounded mb-3' src="//upload.jianshu.io/admin_banners/web_images/4592/22f5cfa984d47eaf3def6a48510cc87c157bf293.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                <List></List>
              </div>
              <div className="col-md-4 pl-4 justify-content-center home-right">
                <Recommend></Recommend>
                <Writer></Writer>
              </div>
            </div>
          </div>
          <BackTop style={{position: 'fixed', bottom: '50px', 'right': '50px', cursor: 'pointer'}}>
            <BackTopInner className="ant-back-top-inner">UP</BackTopInner>
          </BackTop>
        </div>
      </div>
    )
  }

  componentDidMount() {
    this.props.homeInit()
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    homeInit: () => { dispatch(homeDataInit()) }
  }
}

export default connect(null, mapDispatchToProps)(Home)