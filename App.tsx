import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';

const App = () => (
  <SafeAreaView>
    <StatusBar barStyle="default" />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View className="bg-white flex h-screen items-center justify-center">
        <Text className="text-2xl">자 이제 시작해 볼까나~?</Text>
        <Text className="text-xl">호호호호호호호호호호호호호</Text>
      </View>
    </ScrollView>
  </SafeAreaView>
);

export default App;
