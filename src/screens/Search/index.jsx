import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState, useCallback} from 'react';
import Header from '../../components/Header';
import {useTheme} from '../../context/Theme';
import CourseCardHorizontal from '../../components/CourseCardHorizontal';
import {hp} from '../../utils';
import EmptyComponent from '../../components/EmptyComponent';
import Courses from '../../helpers/DummyCourses.json';
import NewCourses from '../../helpers/NewCources.json';
import SearchBar from '../../components/SearchBar';
import { SafeAreaView } from 'react-native-safe-area-context';
const Search = ({navigation}) => {
  const {theme} = useTheme();
  const styles = createStyles(theme);

  const [courses] = useState([...Courses, ...NewCourses]);
  const [searchedCourses, setSearchedCourses] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Debounced search function
  const debounce = (func, delay) => {
    let timeoutId;
    return (...args) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => func(...args), delay);
    };
  };

  // Search logic
  const performSearch = useCallback(
    text => {
      if (!text.trim()) {
        setSearchedCourses([]);
        return;
      }

      const filtered = courses.filter(
        item =>
          item?.name.toLowerCase().includes(text.toLowerCase()) ||
          item?.description?.toLowerCase().includes(text.toLowerCase()),
      );
      setSearchedCourses(filtered);
    },
    [courses],
  );

  // Debounced search with 300ms delay
  const debouncedSearch = useCallback(
    debounce(text => performSearch(text), 300),
    [performSearch],
  );

  useEffect(() => {
    debouncedSearch(searchText);
  }, [searchText, debouncedSearch]);

  const renderItem = ({item}) => (
    <CourseCardHorizontal
      course={item}
      onPress={() => navigation.navigate('CourseDetail', {item})}
    />
  );

  return (
    <SafeAreaView style={styles?.container}>
      <Header navigation={navigation} title={'Search'} />
      <View style={{marginTop: hp(4)}} />
      <SearchBar
        forSearch={true}
        value={searchText}
        setValue={setSearchText}
        placeholder="Search courses..."
      />
      <FlatList
        data={searchedCourses}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ListFooterComponent={() => <View style={{marginBottom: hp(12)}} />}
        ListEmptyComponent={() => (
          <EmptyComponent
            title={searchText ? 'No courses found' : 'Search Course By Name'}
          />
        )}
      />
    </SafeAreaView>
  );
};

const createStyles = theme =>
  StyleSheet.create({
    container: {
      backgroundColor: theme?.bg,
      flex: 1,
      paddingHorizontal: 16,
    },
  });

export default Search;
