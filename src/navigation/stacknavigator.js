import { createStackNavigator } from '@react-navigation/stack';
import BottomTabs from './bottomnavigator';
import Search from '../screens/Search';
import { StatusBar } from 'react-native';
import CourseDetail from '../screens/CourseDetails';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="Bottomtabs" component={BottomTabs} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="CourseDetail" component={CourseDetail} />
    </Stack.Navigator>
  );
}

export default MyStack