import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginStackParamList } from '../types';
import MainScreen from './login/MainScreen';
import LoginScreen from './login/LoginScreen';
import RegisterScreen from './login/RegisterScreen';

export default function LoginPageScreen() {
  const LoginStack = createNativeStackNavigator<LoginStackParamList>();

  return (
    <LoginStack.Navigator initialRouteName="Main">
      <LoginStack.Screen
        name="LoginMain"
        component={MainScreen}
        options={{ headerShown: false }}
      />
      <LoginStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '로그인',
          headerTitleStyle: { color: 'black', fontWeight: 'bold' },
        }}
      />
      <LoginStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: '회원가입',
          headerTitleStyle: { color: 'black', fontWeight: 'bold' },
        }}
      />
    </LoginStack.Navigator>
  );
}
