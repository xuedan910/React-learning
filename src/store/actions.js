export function updateInputValue(data) {
  return {
    type: 'UPDATE_INPUT_VALUE',
    data
  }
}

export function updateList(data) {
  return {
    type: 'UPDATE_LIST_VALUE',
    data
  }
}

export function removeItem(index) {
  return {
    type: 'REMOVE_ITEM',
    data: index
  }
}