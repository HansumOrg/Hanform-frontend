import React from 'react';
import { TextInput, View } from 'react-native';
import LeftButton from '../assets/images/chevron-left.svg';
import PencilIcon from '../assets/images/icon_pencil.svg';
import ViewIcon from '../assets/images/icon_eye.svg';


function Header() {
    return (
        <View className="flex flex-row w-full h-20 min-w-80 px-4 justify-between">
            <View className="flex flex-col w-auto h-full justify-center">
                <LeftButton width={15} height={30}/>
            </View>
            <View className="flex flex-col w-[70%] h-full justify-center">
                <TextInput className="text-[25px]"></TextInput>
            </View>
            <View className="flex flex-col h-full w-auto justify-center">
                <PencilIcon width={25} height={25} preserveAspectRatio='none'/>
            </View>
            <View className="flex flex-col h-full w-auto justify-center">
                <ViewIcon width={25} height={20} preserveAspectRatio='none'/>
            </View>
        </View>
    );
}

export default Header;