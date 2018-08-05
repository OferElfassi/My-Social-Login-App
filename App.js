import React from 'react'
import { StyleSheet, View,ActivityIndicator } from 'react-native'
import { connect } from 'react-redux'
import * as actions from './src/store/actions'
import ControlButtons from './src/components/controlButtons/controlButtons'
import AvatarWithText from './src/components/avatarWithText/avatarWithText'

class App extends React.Component {

  loginHandler = (authMode) => {
    this.props.login(authMode)
  }
  logoutHandler = (loginMethod) => {
    this.props.logout(loginMethod)
  }

  render () {
    return (
      <View style={styles.container}>
        <AvatarWithText
          textOnTop={'Welcome ' + this.props.userData.name}
          textBelow={'Please log in to continue\n\t\t to the awesomeness'}
          image={this.props.userData.pic}
          isLoggedIn={this.props.userData.isLoggedIn}
          isLoading={this.props.isLoading}/>
        {this.props.isLoading?<ActivityIndicator/>:
          <ControlButtons isLoggedIn={this.props.userData.isLoggedIn}
                          onFbPress={() => this.loginHandler('fbLogin')}
                          onGooglePress={() => this.loginHandler('googleLogin')}
                          onLogOutPress={() => this.logoutHandler(this.props.userData.loginMethod)}/>}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
})

const mapStateToProps = state => {
  return {
    userData: state.authentication.userDetails,
    isLoading:state.ui.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (loginMode) => dispatch(actions.tryLogin(loginMode)),
    logout: (loginMethod) => dispatch(actions.logOut(loginMethod))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)