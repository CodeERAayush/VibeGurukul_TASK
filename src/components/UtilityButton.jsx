import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Typography from './Typography';
import { useTheme } from '../context/Theme';
import Icon from '../assets/Icon';
import { wp } from '../utils';

const UtilityButton = ({style, iconName, iconType, iconSize, iconColor, iconStyle, onPress}) => {
  const {theme, isDarkMode, toggleTheme} = useTheme();
  const styles = createStyles(theme);

  return (
    <Pressable
    onPress={onPress}
    style={[styles.container,{...style}]}>
      <Icon
      type={iconType}
      name={iconName}
      style={iconStyle}
      size={iconSize}
      color={iconColor}
      />
    </Pressable>
  );
};

export default UtilityButton;

const createStyles = theme => StyleSheet.create({
    container:{
        height:wp(20),
        width:wp(20),
        alignItems:'center',
        justifyContent:'center'
    }
});
