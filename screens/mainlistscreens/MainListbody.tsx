import React, { useEffect, useState } from 'react';
import {  ScrollView, View, Pressable, Text } from 'react-native';
import { Svg } from 'react-native-svg';
import PencilIcon from '../../assets/images/icon_pencil_to_circle.svg';
import { MainListPageScreenProps } from '../../types';
import MyList from './MyList';
import OtherList from './OtherList';
import Header from './MainListHeader';
interface BoxProps {
    userId: string;
    title: string;
}


function ViewAllList(props: MainListPageScreenProps) {
    const { navigation } = props;


    return (
    <View >
        <View className="flex flex-row w-full h-20 min-w-80 px-4 justify-between">
                <Header navigation={navigation} />
            </View>
        <View className="flex w-full h-4/5">
             
             <ScrollView className="flex w-full ">
                    <View className="flex flex-col items-center  mt-5 ">
                            <View className="pb-6 flex flex-col space-y-2 h-1/2 items-center mb-10">
                                <OtherList/>
                            </View>
                            {/*여기에 원래는 구분되어야 하지 않나요? 배경이 회색이니*/}
                            
                    </View>
                    
                    
                    <View className="flex flex-col items-center  mt-5 ">
                            
                        <View className="pb-6 flex flex-col space-y-2 h-1/2 items-center mb-10 rounded-20">
                            <MyList navigation={navigation} />
                        </View>
                    </View>
                    
            </ScrollView>
            
        </View>
            <View className="absolute w-auto bottom-0 right-0 opacity-80">
                <Svg height="80" width="80"  onPress={() => navigation.navigate('SurveyCreatePage')}>
                    <PencilIcon />
                </Svg>
            </View>
    </View>
        
    );
}

export default ViewAllList;