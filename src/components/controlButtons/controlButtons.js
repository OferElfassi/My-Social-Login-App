import React from 'react'
import { TouchableNativeFeedback, Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import ButtonWithIcon from '../buttonWithIcon/buttonWithIcon'
import PropTypes from 'prop-types'

const controlButtons = props => {
  return (
    props.isLoggedIn ?
      <View style={styles.logoutContainer}>
      <ButtonWithIcon color={"#983239"}
                                       buttonText={"Logout"}
                                       iconName={"md-log-out"}
                                       iconColor={"white"}
                                       TextColor={"white"}
                                       onPress={props.onLogOutPress}/>
      </View>
      :<View style={styles.loginContainer} >
        <ButtonWithIcon color={"#DD4B39"}
                        buttonText={"Or with Google"}
                        iconName={"logo-google"}
                        iconColor={"white"}
                        TextColor={"white"}
                        onPress={props.onGooglePress}/>
      <ButtonWithIcon color={"#3b5998"}
                      buttonText={"Login with Facebook"}
                      iconName={"logo-facebook"}
                      iconColor={"white"}
                      TextColor={"white"}
                      onPress={props.onFbPress}/>
    </View>

  )
}

controlButtons.prototypes = {
  onLogOutPress: PropTypes.func,
  onFbPress: PropTypes.func,
  onGooglePress: PropTypes.func,
  isLoggedIn:PropTypes.bool
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  logoutContainer: {
    flex: 1,
    flexDirection: 'row',
    width:"50%"
  }
})

export default controlButtons
