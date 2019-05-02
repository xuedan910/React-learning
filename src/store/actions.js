import { GET_INIT_LIST, INPUT_CHANGE, ADD_ITEM, REMOVE_ITEM, INIT_STORE } from './actionTypes'

export function inputChange(value) {
  return {
    type: INPUT_CHANGE,
    data: value
  }
}

export function addItem() {
  return {
    type: ADD_ITEM,
  }
}

export function removeItem(value) {
  return {
    type: REMOVE_ITEM,
    data: value
  }
}

export function initStore(value) {
  return {
    type: INIT_STORE,
    data: value
  }
}

export function getInitList() {
  return {
    type: GET_INIT_LIST
  }
}