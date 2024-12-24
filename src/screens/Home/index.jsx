import {
  FlatList,
  Image,
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect} from 'react';
import Courses from '../../helpers/DummyCourses.json';
import NewCourses from '../../helpers/NewCources.json';
import {useTheme} from '../../context/Theme';
import Typography from '../../components/Typography';
import UtilityButton from '../../components/UtilityButton';
import Icon, {Icons} from '../../assets/Icon';
import {fontSize, fs, hp, scaleFontSize, wp} from '../../utils';
import {Fonts} from '../../assets/Fonts';
import SearchBar from '../../components/SearchBar';
import {Images} from '../../assets/Image';
import CourseCardVertical from '../../components/CourseCardVertical';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = ({navigation}) => {
  const {theme, isDarkMode, toggleTheme} = useTheme();
  const styles = createStyles(theme);

  const renderItem = ({item, index}) => {
    return (
      <CourseCardVertical
      item={item}
      onPress={()=>navigation.navigate('CourseDetail', {item: item})}
      />
    );
  };

  return (
    <SafeAreaView style={styles?.container}>
      <StatusBar
        backgroundColor={theme?.bg}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles?.topBar}>
          <View style={{width: '70%'}}>
            <Typography style={styles?.heading}>Hi, Aayush</Typography>
            <Typography style={styles?.subText}>
              Find Your Lessions Today!
            </Typography>
          </View>
          <UtilityButton
            onPress={toggleTheme}
            iconName={isDarkMode ? 'sun' : 'moon'}
            iconType={Icons?.Feather}
            iconSize={24}
            iconColor={theme?.darkGray}
            style={styles.utilityBtnStyle}
          />
        </View>
        <SearchBar 
        onSearch={()=>navigation.navigate("Search")}
        />
        <Image
          source={Images?.hero}
          style={{
            height: hp(28),
            width: '100%',
            alignSelf: 'center',
            marginTop: 15,
            borderRadius:wp(5),
          }}
          resizeMode='contain'
        />
        <Typography
          style={{
            fontSize: fs(20),
            fontFamily: Fonts?.Bold,
            marginVertical: hp(1),
            marginHorizontal: wp(2),
            color: theme?.darkGray,
          }}>
          Popular lessions
        </Typography>
        <FlatList
          data={Courses}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item?.id}
          renderItem={renderItem}
        />

        <Typography
          style={{
            fontSize: fs(20),
            fontFamily: Fonts?.Bold,
            marginVertical: hp(1),
            marginHorizontal: wp(2),
            color: theme?.darkGray,
          }}>
          New lessions
        </Typography>
        <FlatList
          data={NewCourses}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item?.id}
          renderItem={renderItem}
        />
        <View style={{marginBottom: hp(10)}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

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
      marginVertical: hp(1),
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
    utilityBtnStyle:{
      backgroundColor: theme?.bright,
      height: wp(12),
      width: wp(12),
      //   boxShadow: '0px',
      borderRadius: 10,
      boxShadow: '2px 2px 4px rgba(81, 80, 80, 0.3) inset',
    }
  });
