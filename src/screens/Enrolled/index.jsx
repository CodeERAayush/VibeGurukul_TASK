import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import {useTheme} from '../../context/Theme';
import {useSelector} from 'react-redux';
import CourseCardHorizontal from '../../components/CourseCardHorizontal';
import {hp} from '../../utils';
import EmptyComponent from '../../components/EmptyComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
const Enrolled = ({navigation}) => {
  const {theme, isDarkMode, toggleTheme} = useTheme();
  const styles = createStyles(theme);

  const {courses} = useSelector(state => state?.EnrolledCourses);

  const renderItem = ({item, index}) => {
    return (
      <CourseCardHorizontal
        course={item}
        onPress={() => navigation.navigate('CourseDetail', {item: item})}
      />
    );
  };

  return (
    <SafeAreaView style={styles?.container}>
      <Header navigation={navigation} title={'Enrolled Courses'} />
      <FlatList
        data={courses}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        style={{marginTop: hp(4)}}
        ListFooterComponent={() => <View style={{marginBottom: hp(12)}} />}
        ListEmptyComponent={()=><EmptyComponent title={"You Haven't Enrolled To Any Course!"}/>}
      />
    </SafeAreaView>
  );
};

export default Enrolled;

const createStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: theme?.bg,
      flex: 1,
      paddingHorizontal: 16,
    },
  });
