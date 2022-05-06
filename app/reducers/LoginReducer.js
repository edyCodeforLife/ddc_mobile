import { DO_LOGIN, LOGIN_SUCCESS, LOGIN_ERROR } from "../actions/constants";



const LoginReducer = (state = {}, action) => {
  switch (action.type) {
    case DO_LOGIN: {
      console.log('action', action)
      return { type:DO_LOGIN }
    }
    case LOGIN_SUCCESS: {
      console.log('action', action)
      return { state: cleanUp(state), ...action.data ,type:LOGIN_SUCCESS }
    }
    case LOGIN_ERROR: {
      console.log('action', action)
      return { state: cleanUp(state), error: action.error,type:LOGIN_ERROR }
    }
    default:
      return cleanUp(state);
  }
};


// For passing error property only on error, next time reducer will clear off error
//can be used for clearing flags also
const cleanUp = (state) => {
  return { ...state, error: null }
}



export default LoginReducer;
