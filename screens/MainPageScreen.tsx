import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { MainStackParamList } from '../types';
import SurveyCreatePage from './createsurvey/SurveyCreatePage';
import MainListPage from './mainlistscreens/MainListPage';
import DelMySurvey from './dellistpage/DelMySurvey';


const Stack = createNativeStackNavigator<MainStackParamList>();

export default function MainPageScreen() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false, // 페이지의 헤더를 숨깁니다.
      }}
    >
      <Stack.Screen name="Main" component={MainListPage} /> 
      <Stack.Screen name="SurveyCreatePage" component={SurveyCreatePage} />
      <Stack.Screen name="DelMy" component={SurveyCreatePage} />
      <Stack.Screen name="DelMySurvey" component={DelMySurvey} />
    </Stack.Navigator>
  );
}