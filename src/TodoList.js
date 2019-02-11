import React from 'react'
import { connect } from 'react-redux'
import { getInputChangeAction, addNewItemAction, getDeleteItemAction } from './store/actionCreator'

const TodoList = (props) => {
  let { inputValue, list, changeInputValue, addNewItem, deleteItem } = props

  return (
    <div>
      <div>
        <input value={inputValue} onChange={ changeInputValue } /> &nbsp;
        <button onClick={ addNewItem }>Add</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li key={index} onClick={ ()=>{ deleteItem(index) } }>{ item }</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStoreToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapPropsToDispatch = (dispatch) => {
  return {
    changeInputValue(e){
      let action = getInputChangeAction(e.target.value)
      dispatch(action)
    },
    addNewItem(){
      let action = addNewItemAction()
      dispatch(action)
    },
    deleteItem(index){
      let action = getDeleteItemAction(index)
      dispatch(action)
    }
  }
}

export default connect(mapStoreToProps, mapPropsToDispatch)(TodoList)