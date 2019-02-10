import axios from 'axios'

export const getInputChangeAction = (value) => ({
  type: 'input_value_change',
  value
})

export const getAddItemAction = () => ({
  type: 'add_item'
})

export const getDelteItemAction = (value) => ({
  type: 'delete_item',
  value
})

export const initListAction = (value) => ({
  type: 'init_list',
  value
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('data.json').then((res) => {
      let action = initListAction(res.data)
      dispatch(action)
    })
  }
}