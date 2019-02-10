import React, { Component } from 'react'
import './style.css'
import { getInputChangeAction,getAddItemAction,getDelteItemAction, getTodoList } from './store/actionCreator'
import store from './store/index'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()

    this.inputChangeHandle = this.inputChangeHandle.bind(this)
    this.storeUpdateHandle = this.storeUpdateHandle.bind(this)
    this.addItemHandle = this.addItemHandle.bind(this)
    this.deleteHandle = this.deleteHandle.bind(this)
    
    store.subscribe(this.storeUpdateHandle)
  }
  inputChangeHandle(e){
    let action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  addItemHandle(){
    let action = getAddItemAction()
    store.dispatch(action)
  }
  deleteHandle(index){
    let action = getDelteItemAction(index)
    store.dispatch(action)
  }
  storeUpdateHandle(){
    this.setState(store.getState())
  }
  componentDidMount(){
    let action = getTodoList()
    store.dispatch(action)
  }

  render(){
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        inputChangeHandle={this.inputChangeHandle}
        addItemHandle={this.addItemHandle}
        list={this.state.list}
        deleteHandle={this.deleteHandle}
      />
    )
  }
}

export default TodoList