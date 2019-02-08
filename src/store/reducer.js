let defaultState = {
  inputValue: '',
  list: [],
}

export default (state = defaultState, action) => {
  if(action.type === 'input_value_change'){
    return Object.assign({}, state, {
      inputValue: action.value,
    })
  }

  if(action.type === 'add_item' && state.inputValue.trim().length > 0){
    let newState = JSON.parse(JSON.stringify(state))

    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if(action.type === 'delete_item'){
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    return newState
  }

  return state
}