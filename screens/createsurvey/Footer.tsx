import React from 'react';
import { Pressable, ScrollView, StatusBar, View, Text } from 'react-native';
import HomeIcon from '../../assets/images/icon_home.svg'
import MypageIcon from '../../assets/images/icon_mypage.svg'

function Footer() {
    return (
        <View className="flex w-full h-full items-center">
            <View className="flex flex-row px-20 rounded w-11/12 h-16 bg-enable-button-background items-center justify-around">
                <Pressable>
                    <HomeIcon width={30} height={30}/>
                </Pressable>
                <Pressable>
                    <MypageIcon width={30} height={30}/>
                </Pressable>
            </View>
        </View>
    );
}

export default Footer;