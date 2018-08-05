import * as actionTypes from '../actions/actionTypes'

const initialState = {
  userDetails: {
    name: 'Stranger',
    pic: null,
    loginMethod: '',
    isLoggedIn: false
  }
}

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.UPDATE_DETAILS) {
    return updateDetails(state, action.userData)
  }
  if (action.type === actionTypes.LOG_OUT) {
    return initialState
  }
  return state
}

function updateDetails (state, userData) {
  return {
    userDetails: userData
  }
}

export default reducer
