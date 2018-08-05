import * as actionTypes from './actionTypes'
import { uiStartLoading, uiStopLoading } from './uiActions'
import { GraphRequest, GraphRequestManager, LoginManager } from 'react-native-fbsdk'
import { GoogleSignin } from 'react-native-google-signin'

export const tryLogin = (loginMode) => {
  return dispatch => {
    dispatch(uiStartLoading())
    if (loginMode === 'fbLogin') {
      dispatch(facebookLogin())
    }
    else if (loginMode === 'googleLogin') {
      dispatch(googleLogin())
    }
    dispatch(uiStopLoading())
  }
}

const updateUserDetails = (loginData) => {
  return {
    type: actionTypes.UPDATE_DETAILS,
    userData: loginData
  }
}

export const logOut = (loginMethod) => {
  return async dispatch => {
    dispatch(uiStartLoading())
    try {
      if (loginMethod === 'fbLogin') {
        await LoginManager.logOut()
      }
      else if (loginMethod === 'googleLogin') {
        await GoogleSignin.revokeAccess()
        await GoogleSignin.signOut()
      }
      dispatch({type: actionTypes.LOG_OUT})
      dispatch(uiStopLoading())
    }
    catch (e) {
      alert('Logout error, \n error -' + e.message)
      dispatch(uiStopLoading())
    }
  }
}

const facebookLogin = () => {
  return async dispatch => {
    try {
      await facebookAuthentication((error, result) => {
        if (error) {
          throw new Error('Error fetching user data')
        }
        else {
          const loginData = {
            name: result.name,
            pic: result.picture.data.url,
            loginMethod: 'fbLogin',
            isLoggedIn: true
          }
          dispatch(updateUserDetails(loginData))
        }
      })
    }
    catch (e) {
      alert('Signin error, Please try again\n error -' + e.message)
    }
  }
}

const googleLogin = () => {
  return async dispatch => {
    try {
      await validateGoogleSigninMthode()
      const user = await GoogleSignin.signIn()
      if (user) {
        const loginData = {
          name: user.name,
          pic: user.photo,
          loginMethod: 'googleLogin',
          isLoggedIn: true
        }
        dispatch(updateUserDetails(loginData))
      }
    } catch (e) {
      if (e.code !== 13) {
        alert('Signin error, Please try again\n error - ' + e.message)
      }
    }
  }
}

async function validateGoogleSigninMthode () {
  try {
    await GoogleSignin.hasPlayServices({autoResolve: true})
    await GoogleSignin.configure({
      webClientId: '383774701944-0b2rd5b7kmnff3vai4pphj0k6t7k4ap1.apps.googleusercontent.com',
      offlineAccess: false,
      forceConsentPrompt: true
    })
  }
  catch (err) {
    alert('Google Signin configuration failed\n ' +
      'make sure you got google play installed\notherwise contact developer fo solution')
  }
}

async function facebookAuthentication (fetchInfoCallback) {
  try {
    const res = await LoginManager.logInWithReadPermissions(['public_profile'])
    if (res.grantedPermissions && !res.isCancelled) {
      const infoRequest = new GraphRequest('/me?fields=name,picture', null, fetchInfoCallback)
      new GraphRequestManager().addRequest(infoRequest).start()
    }
  }
  catch (e) {
    alert('Signin error, Please try again\n missing user permissions')
  }

}
