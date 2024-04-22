import React from 'react';
import { View, Text, Pressable, ScrollView } from 'react-native';

import ViewAllList from './MainListbody';
import { MainListPageScreenProps } from '../../types';
import { SafeAreaView } from 'react-native-safe-area-context';
import Footer from './MainListFooter';

function MainListPage(props : MainListPageScreenProps) {
    const {navigation} = props;
    return (
        
            <SafeAreaView>
                <View className="flex flex-col h-screen w-screen bg-main-background pb-1 item-between ">
                <ViewAllList navigation={navigation} />
                <Footer/>
                </View>
            </SafeAreaView>
    );
}

export default MainListPage;