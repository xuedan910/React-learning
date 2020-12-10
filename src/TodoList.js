import React, { Component, Fragment, useState } from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';
import './index.css';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

export default class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      list: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount(){
    axios.get('https://roam.test/api/user').then(res => {
      this.setState(() => ({
        list: [...res.data]
      }));
    })
    // this.setState(() => ({
    //   list: ['aaaa', 'bbbb', 'cccc']
    // }));
  }

  handleInputChange(e){
    this.setState(() => ({inputValue: e.target.value}));
  }
  handleSubmit(e){
    if(e.keyCode !== 13) return;

    this.setState((prevState) => ({
      list: [...prevState.list, prevState.inputValue],
      inputValue: ''
    }));
  }
  handleDelete(index){
    this.setState((prevState) => {
      let list = [...prevState.list];
      list.splice(index, 1)
      return {list}
    });
  }

  render(){
    let items =
      <TransitionGroup>
      {
        this.state.list.map((item, index) => {
          let nodeRef = React.createRef(null);
          return <CSSTransition
            nodeRef={nodeRef}
            key={item.id}
            timeout={500}
            classNames="item"
          >
            <li className="list-item" ref={nodeRef}>
              <TodoItem item={item} index={index} deleteItem={this.handleDelete} />
            </li>
          </CSSTransition>
        })
      }
      </TransitionGroup>
    return (
      <Fragment>
        <div>
          <input type="text" value={ this.state.inputValue } onChange={ this.handleInputChange } onKeyDown={ this.handleSubmit } />
          <button onClick={ this.handleSubmit }>submit</button>
        </div>
        <ul style={{display: 'flex'}}>
          { items }
        </ul>
      </Fragment>
    );
  }
}