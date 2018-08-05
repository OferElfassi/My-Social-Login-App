import React from 'react'
import { Provider } from 'react-redux'
import { AppRegistry } from 'react-native'
import configureStore from './src/store/configureStore'
import App from './App'

const store = configureStore()

const reactNativeRedux = () => (
  <Provider store={store}>
    <App/>
  </Provider>
)

AppRegistry.registerComponent('MySocialLoginApp', () => reactNativeRedux)
