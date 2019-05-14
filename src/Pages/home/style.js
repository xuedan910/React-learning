import styled from 'styled-components'

export const ListHeader = styled.h3`
  font-size: 18px;
  color: black;
`
export const ListContent = styled.p`
  font-size: 13px;
  color: #999;
  line-height: 24px;
`
export const BoardItem = styled.a.attrs({
  href: ''
})`
  display: block;
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  border-radius: 20px;
  cursor: pointer;
  margin: 30px 0;
  background: #a5a5a5;
  color: #fff;
  &:hover{
    background: #9b9b9b;
  }
`
export const BackTopInner = styled.div`
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #ccc;
`