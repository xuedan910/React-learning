import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  Logo,
  NavWrapper,
  NavItem,
  Button,
  SearchInput,
  SearchInfo,
  SearchItem,
  SearchInfoSwitch,
} from './style'

class Header extends Component {

  render() {
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <NavWrapper className='floatRight hide'>
          <NavItem grey>Aa</NavItem>
          <NavItem grey>登录</NavItem>
          <Button className='sign-up'>注册</Button>
          <Button className='writing'>
            <i className="fas fa-feather-alt" style={{marginRight: '3px'}}></i>
            <span>写文章</span>
          </Button>
        </NavWrapper>
        <NavWrapper>
          <NavItem>首页</NavItem>
          <NavItem>下载App</NavItem>
          <span style={{position: 'relative'}}>
            <CSSTransition
              in={ this.props.focused }
              timeout={ 500 }
              classNames="stretch"
            >
              <SearchInput
                onFocus={() => this.props.handleInputFocus(this.props.list)}
                onBlur={() => {this.props.handleInputBlur()}}>
              </SearchInput>
            </CSSTransition>
            <i className={ this.props.focused ? 'focused fas fa-search' : 'fas fa-search' }></i>
            <CSSTransition
              in={ this.props.focused || this.props.mouseIn }
              timeout={ 500 }
              classNames="show-list"
            >
              <SearchInfo 
                onMouseEnter={this.props.handleMouseEnter}
                onMouseLeave={this.props.handleMouseLeave}
              >
                <div className='title'>
                  <span>热门搜索</span>
                  <SearchInfoSwitch onClick={()=>{this.props.handleNextPage(this.iconSpin)}}>
                    <i className="fas fa-sync-alt" ref={(icon) => {this.iconSpin = icon}}></i>
                    换一批
                  </SearchInfoSwitch>
                </div>
                <div>
                  {
                    this.props.list.slice((this.props.page-1)*10, (this.props.page-1)*10+10).map((item, index) => {
                      return (
                        <SearchItem key={index}>{ item }</SearchItem>
                      )
                    })
                  }
                </div>
              </SearchInfo>
            </CSSTransition>
          </span>
        </NavWrapper>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.headerReducer.focused,
    list: state.headerReducer.list,
    mouseIn: state.headerReducer.mouseIn,
    page: state.headerReducer.page,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.length === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.focuseUpdate(true))
    },
    handleInputBlur() {
      dispatch(actionCreators.focuseUpdate(false))
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleNextPage(iconSpin) {
      let originAngle = iconSpin.style.transform.replace(/[^0-9]/ig, '')
      originAngle = originAngle ? parseInt(originAngle) : 0
      iconSpin.style.transform = 'rotate(' + (720+originAngle) + 'deg)'
      dispatch(actionCreators.turnNextPage())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)