import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import Typography from './src/components/Typography'
import { fontSize, fs, scaleFontSize } from './src/utils'
import { ThemeProvider } from './src/context/Theme'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigation/stacknavigator'
import { Provider } from 'react-redux'
import { store } from './src/redux/store'

const App = () => {
    // const {isDarkMode, theme} = useTheme()
  return (
    <Provider store={store}>
    <ThemeProvider>
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
    </ThemeProvider>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})