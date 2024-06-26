import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Pressable,
  Text,
  View,
} from 'react-native';
import { ScreenProps } from '../types';

export default function HomeScreen(props: ScreenProps) {
  const { navigation } = props;
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <ScrollView>
        <View className="bg-white flex h-screen items-center">
          <Pressable
            className="w-full bg-red-500"
            onPress={() => navigation.navigate('LoginPage')}
          >
            <Text className="text-center text-2xl font-bold text-white">
              로그인
            </Text>
          </Pressable>
          <Pressable
            className="w-full bg-blue-300"
            onPress={() => navigation.navigate('MainPage')}
          >
            <Text className="text-center text-2xl font-bold text-white">
              메인페이지
            </Text>
          </Pressable>
          <Pressable
            className="w-full bg-blue-500"
            onPress={() => navigation.navigate('MyPage')}
          >
            <Text className="text-center text-2xl font-bold text-white">
              마이페이지
            </Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
