import React, { useState } from 'react';
import { Pressable, TextInput, View } from 'react-native';
import LeftButton from '../assets/images/chevron-left.svg';
import PencilIcon from '../assets/images/icon_pencil.svg';
import ViewIcon from '../assets/images/icon_eye.svg';
import { NavigationProp } from '@react-navigation/native';

interface HeaderProps {
  navigation: NavigationProp<any>;
}

function Header({navigation}: HeaderProps) {
    const [is_editable, setIsEditable] = useState(true);
    return (
        <View className="flex flex-row w-full h-20 min-w-80 px-4 justify-between">
            <View className="flex flex-col w-auto h-full justify-center">
                <Pressable onPress={() => navigation.goBack()}>
                    <LeftButton width={15} height={30}/>
                </Pressable>
            </View>
            <View className="flex flex-col w-[70%] h-full justify-center">
                <TextInput className="text-[22px]" editable={is_editable} placeholder="설문지 제목을 입력하세요."></TextInput>
            </View>
            <View className="flex flex-col h-full w-auto justify-center">
                <Pressable onPress={() => {is_editable ? is_editable : setIsEditable(!is_editable)}}>
                    <PencilIcon width={25} height={25} preserveAspectRatio='none'/>
                </Pressable>
            </View>
            <View className="flex flex-col h-full w-auto justify-center">
                <Pressable onPress={()=>{is_editable? setIsEditable(!is_editable) : is_editable}}>
                    <ViewIcon width={25} height={20} preserveAspectRatio='none'/>
                </Pressable>
            </View>
        </View>
    );
}

export default Header;