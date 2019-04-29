import React, { Component,Fragment } from 'react'
import axios from 'axios'
import TodoItem from './TodoItem'
import './style.css'

class TodoList extends Component {
	constructor(props){
		super(props)
		this.state = {
			inputValue: '',
			list: [],
			show: true
		}

		this.inputChangeHandle = this.inputChangeHandle.bind(this)
		this.buttonClickHandle = this.buttonClickHandle.bind(this)
		this.itemDeleteHandle = this.itemDeleteHandle.bind(this)
		this.handleToggle = this.handleToggle.bind(this)
	}
	componentDidMount(){
		axios.get('/data.json')
			.then((res) => {
				this.setState(() => ({list: res.data}))
			})
	}

	inputChangeHandle(e){
		let val = e.target.value
		this.setState(() => ({
			inputValue: val
		}))
	}
	buttonClickHandle(){
		if(this.state.inputValue.trim().length === 0){
			return false
		}
		this.setState((state) => ({
			list: [...state.list, state.inputValue],
			inputValue: ''
		}))
	}
	itemDeleteHandle(index){
		this.setState((state) => {
			let list = [...state.list]
			list.splice(index, 1)
			return {
				list
			}
		})
	}
	handleToggle(){
		let status = !this.state.show
		this.setState(() => ({
			show: status
		}))
	}

	render(){
		return (
			<Fragment>
				<div>
					<input type="text" value={this.state.inputValue} onChange={this.inputChangeHandle} />
					<button onClick={this.buttonClickHandle}>Submit</button>
				</div>
				<ul>
					{this.state.list.map((item,index) => {
						return (
							<TodoItem key={index} content={item} index={index} onDelete={this.itemDeleteHandle} />
						)
					})}
				</ul>
				<div>
					<p className={ this.state.show ? "show" : "hide" }>Hello World</p>
					<button onClick={this.handleToggle}>toggle</button>
				</div>
			</Fragment>
		)
	}
}

export default TodoList