import * as constants from './constants'

const defaultState = {
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1,
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.FOCUSE_UPDATE:
      return Object.assign({}, state, {
        focused: action.data
      })
    case constants.INIT_LIST:
      return Object.assign({}, state, {
        list: action.data,
        totalPage: action.totalPage
      })
    case constants.MOUSE_ENTER:
      return Object.assign({}, state, {
        mouseIn: true
      })
    case constants.MOUSE_LEAVE:
      return Object.assign({}, state, {
        mouseIn: false
      })
    case constants.NEXT_PAGE:
      let newPage = state.page >= state.totalPage ? 1 : state.page + 1
      return Object.assign({}, state, {
        page: newPage,
        focused: true,
      })
    
    default:
      return state
  }
}