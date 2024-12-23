import React from 'react';
import { Pressable, Image, View, StyleSheet } from 'react-native';
import { hp, wp, fs } from '../utils';
import Typography from './Typography';
import Icon from '../assets/Icon';
import { Icons } from '../assets/Icon';
import { useTheme } from '../context/Theme';
import { Fonts } from '../assets/Fonts';
import { Images } from '../assets/Image';

const CourseCardVertical = ({ item, onPress }) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={Images?.course}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.titleContainer}>
        <Typography style={styles.title}>
          {item?.name}{' '}
          <Typography style={styles.lessons}>
            ({item?.number_of_lessons} Lessions)
          </Typography>
        </Typography>
      </View>
      <View style={styles.footer}>
        <View style={styles.durationBadge}>
          <Typography style={styles.duration}>{item?.duration}</Typography>
        </View>
        <View style={styles.ratingContainer}>
          <Icon
            name={'star'}
            type={Icons?.AntDesign}
            size={15}
            color={theme?.goldenYellow}
          />
          <Typography style={styles.rating}>{item?.rating}</Typography>
        </View>
      </View>
    </Pressable>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    container: {
      height: hp(35),
      width: wp(60),
      backgroundColor: theme?.bright,
      elevation: 1,
      marginHorizontal: 5,
      borderRadius: wp(3),
      boxShadow: '2px -2px 8px rgba(81, 80, 80, 0.3) inset',
      alignItems: 'center',
      marginBottom: hp(2),
    },
    image: {
      height: '50%',
      width: '90%',
      backgroundColor: 'gray',
      marginTop: 10,
      borderRadius: wp(2),
    },
    titleContainer: {
      marginVertical: 1,
      height: '25%',
      overflow: 'hidden',
    },
    title: {
      marginHorizontal: 10,
      fontSize: fs(16),
      fontFamily: Fonts?.Medium,
      color: theme?.mediumGray,
    },
    lessons: {
      color: theme.softOrange,
    },
    footer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
    },
    durationBadge: {
      backgroundColor: theme?.skyBlue,
      paddingHorizontal: 10,
      paddingVertical: 2,
      borderRadius: 999,
      opacity: 0.6,
    },
    duration: {
      color: theme?.royalBlue,
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    rating: {
      color: theme?.mediumGray,
      marginHorizontal: 1,
    },
  });

export default CourseCardVertical;