import React from 'react'
import { Provider } from 'react-redux'
import RootNavigator from './src/navigation/RootNavigator'
import { store } from './src/app/store'
import { LogBox } from 'react-native'

LogBox.ignoreLogs(['AsyncStorage']);

const App = () => {
  return (
    <Provider store={store}>
      <RootNavigator />
    </Provider>
  )
}

export default App