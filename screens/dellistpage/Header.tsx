import React, { useState } from 'react';
import { Pressable, Text, View } from 'react-native';
import LeftButton from '../../assets/images/chevron-left.svg';
import PencilIcon from '../../assets/images/icon_pencil.svg';
import ViewIcon from '../../assets/images/icon_eye.svg';
import { NavigationProp } from '@react-navigation/native';

interface HeaderProps {
  navigation: NavigationProp<any>;
}

function Header({navigation}: HeaderProps) {
    const [is_editable, setIsEditable] = useState(true);
    return (
        <View className="flex flex-row w-full h-20 min-w-80 px-4 justify-between ">
            <View className="flex flex-col w-auto h-full justify-center">
                <Pressable onPress={() => navigation.goBack()}>
                    <LeftButton width={15} height={30}/>
                </Pressable>
            </View>
            <View className="flex flex-col w-[70%] h-full justify-center">
                <Text className="text-[25px]" >설문 삭제</Text>
            </View>
            
        </View>
    );
}

export default Header;