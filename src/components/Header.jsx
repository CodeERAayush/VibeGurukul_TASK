import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useTheme } from '../context/Theme';
import UtilityButton from './UtilityButton';
import { Icons } from '../assets/Icon';
import { wp, hp, fs } from '../utils';
import Typography from './Typography';
import { Fonts } from '../assets/Fonts';

const Header = ({navigation,title}) => {
        const {theme, isDarkMode, toggleTheme} = useTheme();
          const styles = createStyles(theme);
  return (
    <View style={styles?.header}>
      <UtilityButton
            onPress={()=>navigation?.goBack()}
            iconName={'chevron-back'}
            iconType={Icons?.Ionicons}
            iconSize={24}
            iconColor={theme?.darkGray}
            style={{
              backgroundColor: theme?.bright,
              height: wp(12),
              width: wp(12),
          boxShadow: '-2px -2px 4px rgba(81, 80, 80, 0.3) inset',
              borderRadius: 10,
            }}
          />
          <Typography style={styles?.heading}>
            {title}
          </Typography>
          <UtilityButton
            onPress={toggleTheme}
            iconName={isDarkMode ? 'sun' : 'moon'}
            iconType={Icons?.Feather}
            iconSize={24}
            iconColor={theme?.darkGray}
            style={{
              backgroundColor: theme?.bright,
              height: wp(12),
              width: wp(12),
              boxShadow: '2px -2px 4px rgba(81, 80, 80, 0.3) inset',
              borderRadius: 10,
            }}
          />
    </View>
  )
}

export default Header

const createStyles= theme => StyleSheet.create({
    header:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:hp(2)
    },
    heading:{
        color:theme?.darkGray,
        fontSize:fs(20),
        fontFamily:Fonts.Bold,
    }
})