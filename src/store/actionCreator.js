export const getInputChangeAction = (value) => ({
  type: 'input_update',
  value
})

export const addNewItemAction = () => ({
  type: 'add_item',
})

export const getDeleteItemAction = (value) => ({
  type: 'delete_item',
  value
})