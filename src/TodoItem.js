import React, { Component } from 'react'
import PropTypes from 'prop-types'

class TodoItem extends Component{
  shouldComponentUpdate(nextProps, nextState){
    console.log(this.props.content)
    if(nextProps.content === this.props.content){
      return false
    }
    return true
  }

  render(){
    return <div onClick={this.itemDeleteHandle.bind(this)}>{ this.props.content }</div>
  }

  itemDeleteHandle(){
    let { onDelete, index } = this.props
    onDelete(index)
  }
}

TodoItem.propTypes = {
  content: PropTypes.string,
  onDelete: PropTypes.func,
  index: PropTypes.number, 
}

export default TodoItem