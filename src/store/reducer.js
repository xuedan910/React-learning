const defaultState = {
  inputValue: '',
  list: [],
}

export default (state = defaultState, action) => {
  if(action.type === 'UPDATE_INPUT_VALUE') {
    return Object.assign({}, state, {
      inputValue: action.data
    })
  }

  if(action.type === 'UPDATE_LIST_VALUE') {
    let obj = Object.assign({}, state)
    obj.list.push(obj.inputValue)
    obj.inputValue = ''
    return obj
  }

  if(action.type === 'REMOVE_ITEM') {
    let obj = Object.assign({}, state)
    obj.list.splice(action.data, 1)
    return obj
  }

  return state
}