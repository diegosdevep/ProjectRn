import React from 'react'
import { Provider } from 'react-redux'
import RootNavigator from './src/navigation/RootNavigator'
import { store } from './src/app/store'
import { LogBox } from 'react-native'
import AuthProvider from './src/context/AuthContext'


LogBox.ignoreLogs(['AsyncStorage']);

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <RootNavigator />
      </AuthProvider>
    </Provider>
  )
}

export default App


// npm i expo-image-picker
// configurar json
// "plugins": [
//   [
//     "expo-image-picker",
//     {
//       "photoPermission": "The app accesses your photos to let you share them with your friends."
//     }
//   ]
// ]