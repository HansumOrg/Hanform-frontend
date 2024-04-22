import React, { useEffect, useState } from 'react';
import {  ScrollView, View, } from 'react-native';
import { Svg } from 'react-native-svg';
import PencilIcon from '../../assets/images/icon_pencil_to_circle.svg';
import { MainListPageScreenProps } from '../../types';
import MyList from './MyList';
import OtherList from './OtherList';
interface BoxProps {
    userId: string;
    title: string;
}


function ViewAllList(props: MainListPageScreenProps) {
    const { navigation } = props;


    return (
        <View className="flex w-full h-full ">
             <ScrollView className="flex w-full h-3/4 ">
                    <View className="flex flex-col items-center bg-gray-200">
                            <View className="pb-6 flex flex-col space-y-2 h-1/2 items-center mb-10">
                                <OtherList/>
                            </View>
                            {/*여기에 원래는 구분되어야 하지 않나요? 배경이 회색이니*/}
                            <View className="pb-6 flex flex-col space-y-2 h-1/2 items-center mb-10 rounded-20">
                                <MyList navigation={navigation} />
                            </View>
                    </View>
                    
                    
                </ScrollView>
            <View className="absolute w-auto bottom-20 right-0 opacity-80">
                <Svg height="80" width="80"  onPress={() => navigation.navigate('SurveyCreatePage')}>
                    <PencilIcon />
                </Svg>
            </View>
        </View>
    );
}

export default ViewAllList;