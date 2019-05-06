import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'
import { updateInputValue, updateList, removeItem } from './store/actions'

class TodoList extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <input
            type="text" 
            value={this.props.inputValue} 
            onChange={ this.handleInputChange.bind(this) } 
          />
          <button onClick={ this.handleBtnClick.bind(this) }>submit</button>
        </div>
        <ul>
          {
            this.props.list.map((item, index) => {
              return (
                <li key={index} onClick={ ()=>{this.handleItemRemove(index)} } >{ item }</li>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.props.updateInputValue(e.target.value)
  }
  handleBtnClick() {
    this.props.updateList(this.props.inputValue)
  }
  handleItemRemove(index) {
    this.props.removeItem(index)
  }
}

const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list,
  }
}

const mapDispatchToProps = { updateInputValue, updateList, removeItem }


export default connect(mapStateToProps, mapDispatchToProps)(TodoList)