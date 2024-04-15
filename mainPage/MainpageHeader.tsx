import React, { useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';

interface HeaderProps {
  navigation: NavigationProp<any>;
}

function Header({navigation}: HeaderProps) {
    const [is_editable, setIsEditable] = useState(true);
    return (
        <View className="flex flex-row w-full h-20 min-w-80 px-4 justify-between">
            
            <View className="flex flex-col w-[70%] h-full justify-center">
                <Pressable   onPress={() => navigation.goBack()}>
                   <Text className='text-left text-[25px] font-bold text-black'>모든 설문 목록</Text> 
                </Pressable>
            </View>
        </View>
    );
}

export default Header;