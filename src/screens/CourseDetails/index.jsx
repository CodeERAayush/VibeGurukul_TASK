import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useTheme} from '../../context/Theme';
import {fontSize, fs, hp, scaleFontSize, wp} from '../../utils';
import {Fonts} from '../../assets/Fonts';
import Header from '../../components/Header';
import Typography from '../../components/Typography';
import {useRoute} from '@react-navigation/native';
import Icon, {Icons} from '../../assets/Icon';
import TabNavigation from '../../components/TabBar';
import LessonItem from '../../components/LessionItem';
import {useDispatch, useSelector} from 'react-redux';
import {addCourse, removeCourse} from '../../redux/slices/EnrolledCoursesSlice';
import {Images} from '../../assets/Image';

const CourseDetail = ({navigation}) => {
  const [activeTab, setActiveTab] = useState('Lessons');

  const dispatch = useDispatch();
  const {courses} = useSelector(state => state?.EnrolledCourses);

  const {theme, isDarkMode, toggleTheme} = useTheme();
  const styles = createStyles(theme);
  const route = useRoute();
  const {item} = route?.params;

  const renderItem = ({item, index}) => {
    return <LessonItem item={item} />;
  };

  const checkIfEnrolled = () => {
    let isAvailable = courses.filter(i => i?.id === item.id);
    return Boolean(isAvailable.length);
  };

  const removeCoursefromList = () => {
    dispatch(removeCourse(item?.id));
    ToastAndroid.show('Course Removed Successfully!', ToastAndroid.SHORT);
  };

  return (
    <SafeAreaView style={styles?.container}>
      <Header navigation={navigation} title={'Course Details'} />
      <Image source={Images?.course} style={styles?.image} />
      <Typography style={styles?.courseName}>{item?.name}</Typography>
      <Typography
        style={[styles?.courseName, {marginTop: 0, fontSize: fs(15)}]}>
        By- {item?.instructor_name}
      </Typography>
      <View style={styles.subContainer}>
        <View style={styles.infoContainer}>
          <Icon
            name="time-outline"
            type={Icons?.Ionicons}
            size={16}
            color={theme?.softGray}
            style={styles.icon}
          />
          <Typography style={styles.text}>{item?.total_duration}</Typography>
          <Typography style={styles.separator}>·</Typography>
          <Typography style={styles.text}>
            {item?.number_of_lessons} lessons
          </Typography>
        </View>

        <View style={styles.ratingContainer}>
          <Icon
            name="star"
            type={Icons?.AntDesign}
            size={16}
            color={theme?.goldenYellow}
            style={styles.icon}
          />
          <Typography style={styles.ratingText}>4.9</Typography>
        </View>
      </View>

      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'Lessons' ? (
        <View style={styles.dataConatiner}>
          <FlatList
            data={item?.chapters}
            showsVerticalScrollIndicator={false}
            key={(item, index) => index}
            renderItem={renderItem}
            ListFooterComponent={() => <View style={{marginBottom: hp(12)}} />}
          />
        </View>
      ) : (
        <View style={styles.dataConatiner}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Typography style={styles?.subTextDeascription}>
              {' '}
              * {item?.short_description}
            </Typography>
            <Typography style={styles?.subTextDeascription}>
              {' '}
              * {item?.full_description}
            </Typography>
            <View style={{marginBottom: hp(12)}} />
          </ScrollView>
        </View>
      )}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          height: hp(10),
          backgroundColor: theme?.bright,
          width: '100%',
          alignSelf: 'center',
          borderTopLeftRadius: wp(5),
          borderTopRightRadius: wp(5),
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: wp(5),
        }}>
        {checkIfEnrolled() ? (
          <TouchableOpacity onPress={removeCoursefromList}>
            <Icon
              type={Icons?.AntDesign}
              name={'delete'}
              size={26}
              color={'red'}
            />
          </TouchableOpacity>
        ) : (
          <View
            style={{
              paddingHorizontal: wp(5),
              paddingVertical: 8,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: theme?.softOrange,
            }}>
            <Typography
              style={[styles?.subTextDeascription, {color: theme?.softOrange}]}>
              ₹ 300
            </Typography>
          </View>
        )}

        <TouchableOpacity
          onPress={() => {
            dispatch(addCourse(item));
            ToastAndroid.show(
              'Course Enrolled Successfully!',
              ToastAndroid.SHORT,
            );
          }}
          disabled={checkIfEnrolled()}
          style={{
            backgroundColor: checkIfEnrolled()
              ? theme?.disabledBtn
              : theme?.royalBlue,
            width: '70%',
            paddingVertical: 10,
            borderWidth: 1,
            borderColor: checkIfEnrolled()
              ? theme?.disabledBtn
              : theme?.royalBlue,
            borderRadius: 5,
          }}>
          <Typography
            style={[
              styles?.subTextDeascription,
              {
                textAlign: 'center',
                color: theme?.bright,
                fontWeight: 'bold',
                letterSpacing: 0.6,
              },
            ]}>
            {checkIfEnrolled() ? 'Enrolled' : 'Enroll Now'}
          </Typography>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default CourseDetail;

const createStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: theme?.bg,
      flex: 1,
      paddingHorizontal: 16,
    },
    topBar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginVertical: hp(2),
    },
    heading: {
      fontSize: fs(30),
      fontFamily: Fonts?.SemiBold,
      color: theme?.darkGray,
    },
    subText: {
      fontSize: scaleFontSize(15),
      color: theme?.mediumGray,
      fontFamily: Fonts?.Vibur,
    },
    subTextDeascription: {
      fontSize: scaleFontSize(15),
      color: theme?.mediumGray,
      fontFamily: Fonts?.Regular,
    },
    image: {
      height: hp(30),
      width: '100%',
      marginTop: hp(4),
      borderRadius: wp(5),
    },
    subContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderRadius: 8,
    },
    infoContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    ratingContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme?.bright,
      borderRadius: 8,
      paddingHorizontal: 8,
      paddingVertical: 2,
    },
    icon: {
      marginRight: 4,
    },
    text: {
      fontSize: 14,
      color: theme?.softGray,
      marginRight: 4,
    },
    separator: {
      fontSize: 14,
      color: theme?.softGray,
      marginHorizontal: 4,
    },
    ratingText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: theme?.darkGray,
    },
    courseName: {
      marginHorizontal: wp(3),
      marginTop: hp(2),
      fontSize: fs(20),
      fontFamily: Fonts?.SemiBold,
      color: theme.darkGray,
    },
    dataConatiner: {
      marginVertical: hp(2),
      marginHorizontal: wp(4),
      flex: 1,
    },
  });
