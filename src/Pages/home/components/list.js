import React, { Fragment } from 'react'
import { ListHeader, ListContent, LoadMore } from '../style'
import { connect } from 'react-redux'
import { loadMoreData } from '../store/actionCreators'
import { Link } from 'react-router-dom'

function List(props) {
  let { list, loadMoreList } = props
  return (
    <Fragment>
      {
        list.map((item) => {
          return (
            <div className='row mx-0 border-bottom mt-4 pb-3' key={item.id}>
              <div className="col-md-9 pl-0">
                <Link to='/detail'>
                  <ListHeader className='font-weight-bold mb-2'>{ item.title }</ListHeader>
                </Link>
                <ListContent>{ item.content }</ListContent>
              </div>
              <div className="col-md-3 pr-0">
                <img className="w-100 rounded border" src={item.imgUrl} alt="" />
              </div>
            </div>
          )
        })
      }
      <LoadMore onClick={ loadMoreList }>阅读更多</LoadMore>
    </Fragment>
  )
}

let mapStateToProps = (state) => ({
  list: state.homeReducer.articleList
})

let mapActionToProps = (dispatch) => ({
  loadMoreList() {
    dispatch(loadMoreData())
  }
})

export default connect(mapStateToProps, mapActionToProps)(List)