import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Header from './MainpageHeader';
import Body from './Mainpagebody';
import { MainPageScreenProps } from '../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from './Footer';

function MainPage(props : MainPageScreenProps) {
    const {navigation} = props;

    return (
        <SafeAreaView>
            <View className="flex flex-col h-screen w-screen bg-main-background">
                <Header navigation={navigation} />
                <Body />
                <Footer/>
            </View>
        </SafeAreaView>
    );
}

export default MainPage;