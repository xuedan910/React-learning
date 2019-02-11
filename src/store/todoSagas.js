import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'
import { initListAction } from './actionCreator'

function* getListData(){
  try {
    let res = yield axios.get('data.json')
    let action = initListAction(res.data)
    yield put(action)
  } catch(e) {
    console.log(e)
  }
}

function* mySaga() {
  yield takeEvery('get_list_data', getListData)
}

export default mySaga