import * as constants from './constants'

const defaultState = {
  articleList: [],
  reccomendList: [],
}

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.HOME_INIT:
      return Object.assign({}, state, {
        articleList: action.data.articleList,
        reccomendList: action.data.reccomendList
      })
    case constants.LOAD_MORE_LIST:
      return Object.assign({}, state, {
        articleList: [...state.articleList, ...action.data.articleList]
      })

    default:
      return state
  }
}