
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

export const getListAction = () => ({
  type: 'get_list_data'
})