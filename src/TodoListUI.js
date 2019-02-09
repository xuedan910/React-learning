import React, { Component,Fragment } from 'react'
import { Input,Button,List } from 'antd'
import 'antd/dist/antd.css'

function TodoListUI(props) {
  return (
    <Fragment>
      <Input
        value={props.inputValue} 
        style={{ width:'300px', marginRight:'10px' }} 
        placeholder="please input"
        autoFocus
        onChange={props.inputChangeHandle}
      />
      <Button type="primary" onClick={props.addItemHandle}>Add</Button>
      <List style={{ width:'370px', margin:'0 auto', marginTop:'10px' }}
        bordered
        dataSource={props.list}
        renderItem={(item,index) => (
          <List.Item
            onClick={ () => {props.deleteHandle(index)} }
          >
            {item}
          </List.Item>
        )}
      />
    </Fragment>
  )
}

// class TodoListUI extends Component {
//   render(){
//     return (
//       <Fragment>
//         <Input
//           value={this.props.inputValue} 
//           style={{ width:'300px', marginRight:'10px' }} 
//           placeholder="please input"
//           autoFocus
//           onChange={this.props.inputChangeHandle}
//         />
//         <Button type="primary" onClick={this.props.addItemHandle}>Add</Button>
//         <List style={{ width:'370px', margin:'0 auto', marginTop:'10px' }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item,index) => (
//             <List.Item
//               onClick={ () => {this.props.deleteHandle(index)} }
//             >
//               {item}
//             </List.Item>
//           )}
//         />
//       </Fragment>
//     )
//   }
// }

export default TodoListUI