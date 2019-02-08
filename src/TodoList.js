import React, { Component,Fragment } from 'react'
import 'antd/dist/antd.css'
import './style.css'
import { Input,Button,List } from 'antd'
import { getInputChangeAction,getAddItemAction,getDelteItemAction } from './store/actionCreator'
import store from './store/index'

class TodoList extends Component {
  constructor(props){
    super(props)
    this.state = store.getState()

    this.inputChangeHandle = this.inputChangeHandle.bind(this)
    this.storeUpdateHandle = this.storeUpdateHandle.bind(this)
    this.addItemHandle = this.addItemHandle.bind(this)
    
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

  render(){
    return (
      <Fragment>
        <Input
         value={this.state.inputValue} 
         style={{ width:'300px', marginRight:'10px' }} 
         placeholder="please input"
         autoFocus
         onChange={this.inputChangeHandle}
        />
        <Button type="primary" onClick={this.addItemHandle}>Add</Button>
        <List style={{ width:'370px', margin:'0 auto', marginTop:'10px' }}
          bordered
          dataSource={this.state.list}
          renderItem={(item,index) => (<List.Item onClick={this.deleteHandle.bind(this, index)}>{item}</List.Item>)}
        />
      </Fragment>
    )
  }
}

export default TodoList