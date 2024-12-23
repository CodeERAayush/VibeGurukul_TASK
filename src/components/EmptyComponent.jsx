import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Typography from './Typography'
import { fs, wp } from '../utils'
import { useTheme } from '../context/Theme'
import { Fonts } from '../assets/Fonts'

const EmptyComponent = ({title}) => {
    const {theme, isDarkMode, toggleTheme} = useTheme();
      const styles = createStyles(theme);
  return (
    <View style={{marginTop:wp(20), alignItems:'center', justifyContent:'center'}}>
      <Typography style={{fontSize:fs(16), color:theme?.softGray, fontWeight:"bold", fontFamily:Fonts?.Bold, letterSpacing:0.6}}>{title}</Typography>
    </View>
  )
}

export default EmptyComponent

const createStyles=theme => StyleSheet.create({})