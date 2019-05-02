import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.css'

class TodoItem extends Component{
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.content === this.props.content){
      return false
    }
    return true
  }

  render(){
    return (
      <div className="list-item">
        <div>{ this.props.content }</div>
        <div className="remove-btn" onClick={this.itemDeleteHandle.bind(this)}>remove</div>
      </div>
    )
  }

  itemDeleteHandle(){
    this.props.onDelete()
  }
}

TodoItem.propTypes = {
  content: PropTypes.string,
  onDelete: PropTypes.func,
  index: PropTypes.number, 
}

export default TodoItem