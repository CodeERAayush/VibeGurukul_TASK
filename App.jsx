import { StatusBar, StyleSheet, View } from 'react-native'
import React from 'react'
import Typography from './src/components/Typography'
import { fontSize, fs, scaleFontSize } from './src/utils'
import { ThemeProvider } from './src/context/Theme'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigation/stacknavigator'

const App = () => {
    // const {isDarkMode, theme} = useTheme()
  return (
    <ThemeProvider>
        
    <NavigationContainer>
        <StackNavigator/>
    </NavigationContainer>
    </ThemeProvider>
  )
}

export default App

const styles = StyleSheet.create({})