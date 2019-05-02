import React from 'react'
import TodoItem from './TodoItem'
import { Input, List } from 'antd'

function TodoListUI(props) {
  const Search = Input.Search

  return (
    <div className="container">
      <div className="search-box">
        <Search
          value={props.inputValue}
          onChange={props.inputChangeHandle} 
          enterButton="Search" 
          onSearch={props.buttonClickHandle} 
        />
      </div>
      <List
        size="small"
        bordered
        dataSource={props.list}
        renderItem={(item,index) => (<List.Item>
          <TodoItem key={index} content={item} onDelete={() =>  {props.itemDeleteHandle(index)}} />
        </List.Item>)}
      />
    </div>
  )
}

export default TodoListUI