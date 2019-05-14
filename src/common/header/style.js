import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
  border-bottom: 1px solid #f0f0f0;
  padding-right: 10px;
`
export const Logo = styled.div`
  display: block;
  width: 100px;
  height: 56px;
  background-image: url(${logoPic});
  background-size: contain;
  background-repeat: none;
  float:left;
`
export const NavWrapper = styled.div`
  &.floatRight {
    float:right;
  }
  margin: 0 auto;
  .fa-search {
    width: 32px;
    line-height: 32px;
    text-align: center;
    border-radius: 40px;
    color: #969696;
    position: absolute;
    right: 4px;
    top: -7px;
  }
  .focused {
    color: #fff;
    background: #969696;
  }

  @media (max-width: 2000px) {
    width: 950px;
    &.hide {
      width: auto;
    }
  }
  @media (max-width: 500px) {
    width: 350px;
    &.hide {
      display: none;
    }
    .fa-search {
      display: none;
    }
  }
`
export const NavItem = styled.a`
  padding: 15px;
  margin-right: 10px;
  line-height: 56px;
  font-size: 17px;
  color: ${props => (props.grey ? '#969696' : '#333')};
  font-family: -apple-system,SF UI Text,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
`
export const SearchInput = styled.input.attrs({
  type: 'text',
  placeholder: '搜索',
})`
  padding: 0 40px 0 20px;
  width: 140px;
  height: 38px;
  font-size: 14px;
  border: 1px solid #eee;
  border-radius: 40px;
  background: #eee;
  outline: none;
  &.stretch-enter {
    transition: width .5s;
  }
  &.stretch-enter-active, &.stretch-enter-done {
    width: 220px;
  }
  &.stretch-exit {
    transition: width .5s;
  }
  &.stretch-exit-active {
    width: 140px;
  }

  @media (max-width: 500px) {
    display: none;
  }
`
export const Button = styled.a.attrs({
  href: ''
})`
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  height: 38px;
  padding: 6px 12px;
  line-height: 24px;
  margin: 9px 5px 0 15px;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  &.sign-up {
    width: 80px;
    color: #ea6f5a;
    background-color: transparent;
  }
  &.writing {
    width: 100px;
    color: #fff;
    background-color: #ea6f5a;
  }
  &:hover {
    color: #ec6149;
    border-color: #ec6149;
    background-color: rgba(236,97,73,.05);
  }
`
export const SearchInfo = styled.div`
  &:before {
    content: '';
    border: 10px solid transparent;
    border-bottom-color: #fff;
    position: absolute;
    left: 25px;
    top: -20px;
  }

  display: none;
  position: absolute;
  left: 10px;
  top: 38px;
  width: 250px;
  padding: 20px;
  box-sizing: border-box;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  background-color: #fff;
  z-index: 99;

  &.show-list-enter {
    display: none;
  }
  &.show-list-enter-active, &.show-list-enter-done {
    display: block;
  }
  &.show-list-exit {
    display: block;
  }
  &.show-list-exit-active, &.show-list-exit-none {
    display: none;
  }

  .title {
    display: flex;
    justify-content: space-between;
    color: #969696;
    margin-bottom: 10px;
  }
`
export const SearchItem = styled.a.attrs({
  href: '',
})`
  margin:0 10px 10px 0;
  line-height: 20px;
  display: inline-block;
  box-sizing: border-box;
  color: #787878;
  border: 1px solid #ddd;
  font-size: 12px;
  padding: 2px 6px;
  text-decoration: none;
  border-radius: 3px;
`
export const SearchInfoSwitch = styled.span`
  cursor: pointer;
  font-size: 13px;
  display: flex;
  i {
    height: 13px;
    margin-right: 5px;
    transition: all .3s ease-in;
    transform-origin: center center;
  }
`