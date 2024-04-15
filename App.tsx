import React, { useEffect, useRef } from 'react';
import { Text, SafeAreaView, Animated, Easing } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import MainPageScreen from './screens/MainPageScreen';
import MyPageScreen from './screens/MyPageScreen';
import { StackParamList } from './types';

const Stack = createNativeStackNavigator<StackParamList>();

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const fadeOut = useRef(new Animated.Value(1)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeOut, {
      toValue: 0,
      duration: 2000,
      easing: Easing.bezier(0.7, 0, 0.84, 0),
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setIsLoading(false);
    }, 1800);
  }, [fadeOut]);

  const SplashScreen = (
    <SafeAreaView>
      <Animated.View
        className="flex justify-center items-center h-screen pb-48 gap-5"
        style={{ opacity: fadeOut }}
      >
        <Text className="text-5xl text-[#1A5BAB] font-extrabold">Han Form</Text>
        <Text className="text-2xl text-[#358DF9] font-bold">
          뭐 좀 물어보자
        </Text>
      </Animated.View>
    </SafeAreaView>
  );

  const NavigationScreen = (
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

  const AppScreen = isLoading ? SplashScreen : NavigationScreen;

  return AppScreen;
}
