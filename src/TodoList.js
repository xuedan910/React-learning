import React, { Component } from 'react'
import './style.css'
import 'antd/dist/antd.css'
import store from './store/store.js'
import { getInitList, addItem, inputChange, removeItem } from './store/actions'
import TodoListUI from './TodoListUI'

class TodoList extends Component {
	constructor(props){
		super(props)
		this.state = store.getState()
 
		this.inputChangeHandle = this.inputChangeHandle.bind(this)
		this.buttonClickHandle = this.buttonClickHandle.bind(this)
		this.itemDeleteHandle = this.itemDeleteHandle.bind(this)
		this.handleStoreUpdate = this.handleStoreUpdate.bind(this)
		
		store.subscribe(this.handleStoreUpdate)
	}

	componentDidMount() {
		let data = getInitList();
		store.dispatch(data)
	}

	handleStoreUpdate() {
		this.setState(store.getState())
	}

	inputChangeHandle(e){
		let val = e.target.value
		let data = inputChange(val)
		store.dispatch(data)
	}
	buttonClickHandle(){
		let val = this.state.inputValue.trim()
		if(val.length === 0){
			return false
		}
		store.dispatch(addItem())
	}
	itemDeleteHandle(index){
		let data = removeItem(index)
		store.dispatch(data)
	}

	render(){
		return (
			<TodoListUI
				inputValue={ this.state.inputValue }
				inputChangeHandle = { this.inputChangeHandle }
				buttonClickHandle = { this.buttonClickHandle }
				itemDeleteHandle = { this.itemDeleteHandle }
				list = { this.state.list }
			/>
		)
	}
}

export default TodoList