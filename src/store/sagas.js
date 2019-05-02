import { takeEvery, put } from 'redux-saga/effects'
import axios from 'axios'
import { initStore } from './actions'
import { GET_INIT_LIST } from './actionTypes'

function* todoSaga() {
  yield takeEvery(GET_INIT_LIST, fetchData)
}

function* fetchData() {
  let res = yield axios.get('/data.json')
  let action = initStore(res.data)
  yield put(action)
}

export default todoSaga;