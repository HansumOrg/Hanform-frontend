import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

export default function LoginScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <ScrollView>
        <View className="bg-white flex h-screen items-center justify-center">
          <Text className="text-2xl font-bold">로그인 페이지입니다.</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
