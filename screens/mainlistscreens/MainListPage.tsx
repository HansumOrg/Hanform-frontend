import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';
import Header from './MainListHeader';
import ViewAllList from './MainListbody';
import { MainListPageScreenProps } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';

function MainListPage(props : MainListPageScreenProps) {
    const {navigation} = props;
    return (
        
            <SafeAreaView>
                <View className="flex flex-col h-screen w-screen bg-main-background pb-1">
                    <Header navigation={navigation} />
                    <ScrollView className="flex flex-col h-full">
                        <ViewAllList navigation={navigation} />
                    </ScrollView>
                    
                </View>
            </SafeAreaView>
    );
}

export default MainListPage;