import axios from 'axios'
import * as constants from './constants'

export function homeDataInit(data) {
  return (dispatch) => {
    axios.get('/api/home.json')
      .then((res) => {
        let result = res.data.data
        let action = {
          type: constants.HOME_INIT,
          data: result
        }
        dispatch(action)
      })
  }
}

export function loadMoreData() {
  return (dispatch) => {
    axios.get('/api/homeList.json')
      .then((res) => {
        let action = {
          type: constants.LOAD_MORE_LIST,
          data: res.data.data
        }
        dispatch(action)
      })
  }
}