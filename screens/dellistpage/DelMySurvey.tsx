import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Header from './Header';
import Body from './Body';
import { MainListPageScreenProps } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';

function DelMySurvey(props : MainListPageScreenProps) {
    const {navigation} = props;

    return (
        <SafeAreaView>
            <View className="flex flex-col h-screen w-screen bg-main-background">
                <Header navigation={navigation} />
                <Body navigation={navigation}/>
            </View>
        </SafeAreaView>
    );
}

export default DelMySurvey;