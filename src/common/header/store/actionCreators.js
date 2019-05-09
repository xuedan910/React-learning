import * as constants from './constants'
import axios from 'axios'

export function focuseUpdate(data) {
  return {
    type: constants.FOCUSE_UPDATE,
    data
  }
}
export function getList() {
  return (dispatch) => {
    axios.get('/api/data.json')
      .then((res) => {
        let data = res.data.data
        let action = {
          type: constants.INIT_LIST,
          data: data,
          totalPage: Math.ceil(data.length / 10),
        }
        dispatch(action)
      })
  }
}
export function turnNextPage() {
  return {
    type: constants.NEXT_PAGE
  }
}
export function mouseEnter() {
  return {
    type: constants.MOUSE_ENTER
  }
}
export function mouseLeave() {
  return {
    type: constants.MOUSE_LEAVE
  }
}