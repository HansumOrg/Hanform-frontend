import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

export default function LoginScreen() {
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <ScrollView>
        <View className="flex justify-center items-center h-screen pb-48 gap-5 bg-white">
          <Text className="text-5xl text-[#1A5BAB] font-extrabold">
            Han Form
          </Text>
          <Text className="text-2xl text-[#358DF9] font-bold">
            뭐 좀 물어보자
          </Text>
        </View>
        <View className="absolute bottom-0 w-full h-1/3 flex items-center gap-y-5">
          <View className="bg-[#1A5BAB] h-1/4 w-4/5 rounded-3xl flex items-center justify-center">
            <Text className="text-white text-lg font-bold">로그인</Text>
          </View>
          <View className="bg-white h-1/4 w-4/5 rounded-3xl flex items-center justify-center border-[#1A5BAB] border">
            <Text className="text-lg font-bold text-[#1A5BAB] ">회원가입</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
