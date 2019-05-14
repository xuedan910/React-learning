import React, { Component } from 'react'
import { connect } from 'react-redux'

class Recommend extends Component {
  render() {
    let { list } = this.props

    return (
      <div className='board row'>
        <div className="col-12">
          {
            list.map((item) => {
              return (
                <a href="/" key={item.id}>
                  <img src={item.imgUrl} alt="" className="w-100 mt-1 rounded"/>
                </a>
              )
            })
          }
        </div>
      </div>
    )
  }
}

let mapStateToProps = (state) => ({
  list: state.homeReducer.reccomendList
})

export default connect(mapStateToProps, null)(Recommend)