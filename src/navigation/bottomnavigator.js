import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity, StyleSheet, Animated } from 'react-native';
import Home from '../screens/Home';
import Enrolled from '../screens/Enrolled';
import Icon from 'react-native-vector-icons/Ionicons';
import { hp, wp } from '../utils';
import { useTheme } from '../context/Theme';
import Typography from '../components/Typography';
import { Fonts } from '../assets/Fonts';

const Tab = createBottomTabNavigator();

const CustomTabBar = ({ state, descriptors, navigation }) => {
    const { theme, isDarkMode, toggleTheme } = useTheme();
    const styles = createStyles(theme);
    return (
        <View style={styles.mainContainer}>
            <View style={styles.tabBarContainer}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name;

                    const isFocused = state.index === index;

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };

                    const onLongPress = () => {
                        navigation.emit({
                            type: 'tabLongPress',
                            target: route.key,
                        });
                    };

                    const iconName = route.name === 'Home' ? (isFocused ? 'home' : 'home-outline') : (isFocused ? 'book' : 'book-outline');

                    return (
                        <TouchableOpacity
                            key={index}
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={styles.tabItem}
                        >
                            <Animated.View style={{ transform: [{ scale: isFocused ? 1.2 : 1 }] }}>
                                <Icon name={iconName} size={24} color={isFocused ? theme?.darkGray : '#888888'} />
                            </Animated.View>
                            <Typography style={[styles.tabLabel, { color: isFocused ? theme?.darkGray : '#888888' }]}>{label}</Typography>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
};

function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{ 
                headerShown: false,
                tabBarStyle: {
                    display: 'none'
                }
            }}
            tabBar={(props) => <CustomTabBar {...props} />}
        >
            <Tab.Screen name="Home" component={Home} options={{ tabBarLabel: 'Home' }} />
            <Tab.Screen name="Enrolled" component={Enrolled} options={{ tabBarLabel: 'Enrolled' }} />
        </Tab.Navigator>
    );
}

const createStyles = theme =>
    StyleSheet.create({
        mainContainer: {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            paddingHorizontal: wp(1),
        },
        tabBarContainer: {
            flexDirection: 'row',
            backgroundColor: theme?.bright,
            borderTopWidth: 0,
            height: hp(10),
            borderTopLeftRadius:wp(4),
            borderTopRightRadius:wp(4),
            elevation: 10,
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: -2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
        },
        tabItem: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        tabLabel: {
            fontSize: 12,
            marginTop: 4,
            fontFamily:Fonts?.Regular
        },
    });

export default BottomTabs;