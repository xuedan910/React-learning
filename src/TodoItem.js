import React, { Component, Fragment } from 'react';

export default class TodoItem extends Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.item.address_line_1 === this.props.item.address_line_1) return false;

    return true;
  }

  handleDelete(){
    this.props.deleteItem(this.props.index);
  }

  render(){
    return (
      <Fragment>
        {this.props.item.address_line_1}
        <button onClick={this.handleDelete}>&times;</button>
      </Fragment>
    );
  }
}