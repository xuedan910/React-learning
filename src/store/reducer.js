import { INPUT_CHANGE, ADD_ITEM, REMOVE_ITEM, INIT_STORE } from './actionTypes'

const data = {
  inputValue: '',
	list: [],
}

export default (state = data, action) => {
  switch (action.type) {
    case INIT_STORE:
      return Object.assign({}, state, {
        list: [...action.data]
      })

    case ADD_ITEM:
      return Object.assign({}, state, {
        inputValue: '',
        list: [...state.list, state.inputValue]
      })

    case INPUT_CHANGE:
      return Object.assign({}, state, {
        inputValue: action.data,
      })

    case REMOVE_ITEM:
      let newState = Object.assign({}, state)
      newState.list.splice(action.data, 1)
      newState.inputValue = ''

      return newState
  
    default:
      return state
  }
}