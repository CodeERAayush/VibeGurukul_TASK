import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
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

const Home = ({navigation}) => {
  const {theme, isDarkMode, toggleTheme} = useTheme();
  const styles = createStyles(theme);

  const renderItem = ({item, index}) => {
    return (
      <Pressable
      onPress={()=>navigation.navigate('CourseDetail',{item:item})}
        style={{
          height: hp(35),
          width: wp(60),
          backgroundColor: theme?.bright,
          elevation: 1,
          marginHorizontal: 5,
          borderRadius: wp(3),
          boxShadow: '2px -2px 8px rgba(81, 80, 80, 0.3) inset',
          alignItems: 'center',
          marginBottom: hp(2),
        }}>
        <Image
          source={{
            uri: 'https://s3-alpha-sig.figma.com/img/602c/9b91/fb2b67f55f5d9cf0c0e824c9b2fa85a9?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Ff24wF14DpioVNtRgtRi-6fwRWmijyeNy8yBv4TIx8K8vD1q39LMVsU5XNXwU1QQgXUBDRJKTH5fDKSZMNM0CxmiA~-3Tmb4W9bJNOToMxHx2Z0pxYQZhvlt3CYmo5UKQEhJxmPEY7WtiTF11GHkugcfU67xYhpxPcw~FnUAjrf~VMRqh9NzjGqSQEYLfjAyJiMZM357da1Rx~EWpouidolkwqP78Lp8uITCKVQ75a~ByORY9GBGn4JAciNvUPnsm2l-p1sRR8z-vGdccJvyDgFYGJNnjoeheqysLz7sRaxCUMdXP9WD4heUveRos-zKhMd4GW1jTkiigIQSVX8f5g__',
          }}
          style={{
            height: '50%',
            width: '90%',
            backgroundColor: 'gray',
            marginTop: 10,
            borderRadius: wp(2),
          }}
          resizeMode="cover"
        />
        <View style={{marginVertical: 1, height: '25%', overflow: 'hidden'}}>
          <Typography
            style={{
              marginHorizontal: 10,
              fontSize: fs(16),
              fontFamily: Fonts?.Medium,
              color: theme?.mediumGray,
            }}>
            {item?.name}{' '}
            <Typography style={{color: theme.softOrange}}>
            ({item?.number_of_lessons} Lessions)
            </Typography>
          </Typography>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '80%',
          }}>
          <View
            style={{
              backgroundColor: theme?.skyBlue,
              paddingHorizontal: 10,
              paddingVertical: 2,
              borderRadius: 999,
              opacity: 0.6,
            }}>
            <Typography style={{color: theme?.royalBlue}}>
              {item?.duration}
            </Typography>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name={'star'}
              type={Icons?.AntDesign}
              size={15}
              color={theme?.goldenYellow}
            />
            <Typography style={{color: theme?.mediumGray, marginHorizontal: 1}}>
              {item?.rating}
            </Typography>
          </View>
        </View>
      </Pressable>
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
            style={{
              backgroundColor: theme?.bright,
              height: wp(12),
              width: wp(12),
            //   boxShadow: '0px',
              borderRadius: 10,
          boxShadow: '2px 2px 4px rgba(81, 80, 80, 0.3) inset',

            }}
          />
        </View>
        <SearchBar />
        <Image
          source={Images?.hero}
          style={{
            height: hp(25),
            width: '110%',
            alignSelf: 'center',
            marginTop: 20,
          }}
        />
        <Typography
          style={{
            fontSize: fs(20),
            fontFamily: Fonts?.Bold,
            marginVertical: hp(2),
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
            marginVertical: hp(2),
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
  });
