const defaultState = {
  inputValue: '',
  list: []
}

export default (state = defaultState, action) => {
  if (action.type === 'input_update') {
    let newState = Object.assign({}, state, {
      inputValue: action.value
    })

    return newState
  }

  if (action.type === 'add_item') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''

    return newState
  }

  if (action.type === 'delete_item') {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.value, 1)
    newState.inputValue = ''

    return newState
  }

  return state
}