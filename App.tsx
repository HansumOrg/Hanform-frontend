import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import MainPageScreen from './screens/MainPageScreen';
import MyPageScreen from './screens/MyPageScreen';
import { HomeStackParamList } from './types';

const Stack = createNativeStackNavigator<HomeStackParamList>();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false, // 페이지의 헤더를 숨깁니다.
      }}
    >
      {/* HomeScreen은 개발용 홈 화면입니다. */}
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="MainPage" component={MainPageScreen} />
      <Stack.Screen name="MyPage" component={MyPageScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
