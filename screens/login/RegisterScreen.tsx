import React from 'react';
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from 'react-native';
import InputBox from '../../components/form/InputBox';
import { LoginScreenProps } from '../../types';

export default function RegisterScreen(props: LoginScreenProps) {
  const { navigation } = props;
  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <ScrollView>
        <View className="bg-white h-screen w-full flex flex-col pt-20 px-4">
          <View>
            <Text className="text-lg font-bold text-black">반갑다야!</Text>
            <Text className="text-lg font-bold text-black">
              간단하게 뭐 좀 물어볼게
            </Text>
          </View>
          <View className="flex flex-col">
            <InputBox title="닉네임" />
            <InputBox title="아이디" />
            <InputBox title="비밀번호" />
          </View>
          <Pressable
            className="bg-[#1A5BAB] w-full mt-4 h-10 flex items-center justify-center rounded-md"
            onPress={() => {
              navigation.reset({
                index: 1,
                routes: [{ name: 'LoginMain' }, { name: 'Login' }],
              });
            }}
          >
            <Text className="text-white">확인하기</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
