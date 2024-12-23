import React from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useTheme } from '../context/Theme';
import { Images } from '../assets/Image';

const CourseCardHorizontal = ({course, onPress}) => {

    const {theme, isDarkMode, toggleTheme} = useTheme();
      const styles = createStyles(theme);

  return (
    <TouchableOpacity onPress={onPress} style={styles.card}>
      <Image
        source={Images?.course}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.contentContainer}>
        <Text style={styles.title}>{course?.name}</Text>

        <View style={styles.levelContainer}>
          <Text style={styles.levelText}>{course?.instructor_name}</Text>
          <Text style={styles.separator}> / </Text>
          <Text style={styles.lessonsText}>
            {course?.number_of_lessons} lessons
          </Text>
        </View>

        <View style={styles.ratingContainer}>
          <Icon name="star" size={16} color={theme?.goldenYellow} />
          <Text style={styles.rating}>{course?.rating}</Text>
          <Text style={styles.dot}>•</Text>
          <Text style={styles.duration}>{course?.total_duration}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const createStyles=theme => StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: theme?.bright,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: theme?.bright,
    borderRadius: 15,
    padding: 15,
    boxShadow: '2px -2px 8px rgba(81, 80, 80, 0.3) inset',
    marginTop: 5,
    marginHorizontal: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: theme?.lightGray,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: theme?.darkGray,
    marginBottom: 5,
  },
  levelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  levelText: {
    color: theme?.softGray,
    fontSize: 14,
  },
  separator: {
    color: theme?.softGray,
    marginHorizontal: 5,
  },
  lessonsText: {
    color: theme?.softGray,
    fontSize: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rating: {
    marginLeft: 5,
    color: theme?.softGray,
    fontWeight: '600',
    fontSize: 14,
  },
  dot: {
    marginHorizontal: 8,
    color: theme?.softGray,

  },
  duration: {
    color: theme?.softGray,
    fontSize: 14,
  },
  heartContainer: {
    position: 'absolute',
    right: 15,
    top: 15,
    padding: 5,
  },
});

export default CourseCardHorizontal;
