import React from 'react'
import { TouchableNativeFeedback, Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import PropTypes from 'prop-types'

const buttonWithIcon = props => {
  return (<TouchableNativeFeedback onPress={props.onPress}>
      <View style={[styles.buttonContainer,
        {backgroundColor: props.color}]}>
        <View style={styles.iconContainer}>
          <Icon name={props.iconName} size={30} color={props.iconColor}/>
        </View>
          <Text style={[styles.text, {color: props.TextColor}]}>
            {props.buttonText}
          </Text>
      </View>
    </TouchableNativeFeedback>
  )
}

buttonWithIcon.prototypes = {
  onPress: PropTypes.func,
  color: PropTypes.string,
  iconName: PropTypes.string,
  TextColor: PropTypes.string,
  iconColor: PropTypes.string,
  buttonText: PropTypes.string
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    margin: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    height: 45,
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    fontSize: 13,
    fontWeight:"bold"
  },
  iconContainer: {
    justifyContent: 'center',
    paddingTop: 5,
    paddingRight:10
  }

})

export default buttonWithIcon