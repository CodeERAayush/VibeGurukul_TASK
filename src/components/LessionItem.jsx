import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon, {Icons} from '../assets/Icon';
import {hp} from '../utils';
import { useTheme } from '../context/Theme';

const LessonItem = ({item}) => {
     const {theme, isDarkMode, toggleTheme} = useTheme();
      const styles = createStyles(theme);
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.leftContent}>
        <View style={styles.playButton}>
          <Icon
            type={Icons?.Ionicons}
            name={'play'}
            size={20}
            color="#3B82F6"
          />
        </View>
        <View style={styles.textContent}>
          <Text style={styles.title}>{item?.name}</Text>
          <Text style={styles.duration}>{item?.duration}</Text>
        </View>
      </View>
      <Icon
        type={Icons?.Ionicons}
        name="chevron-forward"
        size={20}
        color={theme?.softGray}
      />
    </TouchableOpacity>
  );
};

const createStyles =theme=> StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: theme?.bright,
    borderRadius: 12,
    shadowColor: theme?.bright,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    marginBottom: hp(1),
    marginHorizontal: 2,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  playButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    gap: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: theme?.darkGray,
  },
  duration: {
    fontSize: 14,
    color: '#6B7280',
  },
});

export default LessonItem;
