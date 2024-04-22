import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Pressable,
} from 'react-native';
import InputBox from '../../components/form/InputBox';
import { LoginScreenProps } from '../../types';

export default function LoginScreen(props: LoginScreenProps) {
  const { navigation } = props;
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <ScrollView>
        <View className="bg-white h-screen w-full flex flex-col pt-20 px-4">
          <View>
            <Text className="text-lg font-bold text-black">어서오고~</Text>
            <Text className="text-lg font-bold text-black">
              아이디 비번 안 까먹었지?
            </Text>
          </View>
          <View className="flex flex-col">
            <InputBox title="아이디" />
            <InputBox title="비밀번호" />
          </View>
          <Pressable
            className="bg-[#1A5BAB] w-full mt-4 h-10 flex items-center justify-center rounded-md"
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              });
            }}
          >
            <Text className="text-white">확인하기</Text>
          </Pressable>
          <View className="w-full flex items-center mt-2">
            <Text className="text-black"> 아이디 찾기 | 비밀번호 찾기</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
