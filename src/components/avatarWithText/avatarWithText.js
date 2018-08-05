import React from 'react'
import { Image, Text, View, StyleSheet,ActivityIndicator } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'

const avatarWithText = props => {
  let userPic = props.isLoading?<ActivityIndicator/>
    :<Image source={{uri: props.image}} style={styles.avatarImage}/>
  return (

    <View style={styles.avatarContainer}>
      <Text style={styles.textOnTop}>
        {props.textOnTop}
      </Text>
      {props.isLoggedIn ?
        userPic:<Icon name={'md-contact'}
                     size={100}
                     color={'#9e9e9e'}/>}
      <Text style={styles.textBelow}>
        {props.isLoggedIn?null:props.textBelow}
      </Text>
    </View>

  )
}

avatarWithText.prototypes = {
  textOnTop: PropTypes.string,
  textBelow: PropTypes.string,
  TextColor: PropTypes.string,
  image: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  isLoading: PropTypes.bool

}

const styles = StyleSheet.create({
  avatarContainer: {
    flex:5,
    alignItems: 'center',
    justifyContent: 'center',

  },
  textOnTop: {
    fontSize: 18,
    fontWeight: 'bold',
    color:"black",
    marginBottom:5
  },
  textBelow: {
    justifyContent: 'center',
    color:"black"
  },
  avatarImage: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },

})

export default avatarWithText