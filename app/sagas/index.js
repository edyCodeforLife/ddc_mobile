import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { DO_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR,BASE_URL,ENDPOINT } from '../actions/constants';
import axios from 'axios';


const postLogin = credentials => {
  const payload = {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    data: { email: credentials.email, password: credentials.password },
    url: BASE_URL+ENDPOINT.login_member
  }
  return axios(payload)
}

function* login(action) {
  try {
    const response = yield call(postLogin, action)
    console.log(response);
    if(response.data.code==200){
      yield put({ type: LOGIN_SUCCESS, data: response.data });
    }else{
      yield put({ type: LOGIN_ERROR, error: response.data.data.validation });
    }
  } catch (e) {
    yield put({ type: LOGIN_ERROR, error: e.message });
  }
}
function* mySaga() {
  console.log('saga init..')
  yield takeLatest(DO_LOGIN, login);
}

export default mySaga;