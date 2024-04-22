import React, { useState } from 'react';
import { Pressable, View, Text } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import HomeIcon from '../../assets/images/icon_home.svg'
import MypageIcon from '../../assets/images/icon_mypage.svg'
interface FooterProps {
  navigation: NavigationProp<any>;
}

function Footer({navigation}: FooterProps) {
    const [is_editable, setIsEditable] = useState(true);
    return (
        
            <View className="flex flex-row px-20 rounded w-11/12 h-16 bg-enable-button-background items-center justify-around ">
            <Pressable>
                    <HomeIcon width={30} height={30}/>
                </Pressable>
                <Pressable>
                    <MypageIcon width={30} height={30}/>
                </Pressable>
            </View>
       
    );
}

export default Footer;