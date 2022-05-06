import { DO_LOGIN, GET_LOGGED_USER } from "./constants";



export const doLogin = (email, password) => {
    return {
        type: DO_LOGIN,
        email, password
    }
}

// NOT USED this action, add for reference
export const getLoggedUser = () => {
    return {
        type: GET_LOGGED_USER_LOCAL
    }
}