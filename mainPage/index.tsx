import { styled } from 'nativewind';
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Header from './Header';
import Body from './Body';
import { MainPageScreenProps } from '../types';
import CreateIcon from '../assets/images/icon_plus.svg'

function MainPage(props : MainPageScreenProps) {
    const {navigation} = props;

    return (
        <View className="flex flex-col h-screen w-screen">
            <Header />
            <Body />
            <Pressable
                className="z-10 w-auto h-auto opacity-70"
                onPress={() => navigation.navigate('SurveyCreatePage')}
            >
                <CreateIcon width={80} height={80} />
            </Pressable>
        </View>
    );
}

export default MainPage;