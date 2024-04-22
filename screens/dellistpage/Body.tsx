import React, { useEffect, useState } from 'react';
import {  ScrollView, View, Pressable, Text } from 'react-native';
import { Svg } from 'react-native-svg';
import Cencle from '../../assets/images/icon_cencle.svg';
import { MainListPageScreenProps } from '../../types';
import surveyData from '../../assets/DB/surveyData.json'
interface BoxProps {
    userId: string;
    title: string;
}
const SubjectiveBox = (props: BoxProps) => {
    return (
        <View style={{ width: 317, height: 68, paddingHorizontal: 22, paddingVertical: 10, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View className='flex-col items-start'>
                <Text>작성자: {props.userId}</Text>
                <Text className="text-center text-16 font-bold text-4a4a4a" numberOfLines={1} ellipsizeMode='tail'>{props.title}</Text>
            </View>
            <Pressable className='px-4 py-2 bg-red-600 rounded-lg items-center'>
                <Text className='text-white'>삭제</Text>
            </Pressable>
        </View>
    );
};

function ViewAllList(props: MainListPageScreenProps) {
    const { navigation } = props;

    
    const [surveyContents, setSurveyContents] = useState(() => {
        // 필터링 로직을 추가하여 user01의 데이터만 초기 상태로 설정
        return surveyData.surveys.filter(survey => survey.userId === 'user01');
    });

    return (
        <View className="flex w-full h-screen ">
             <ScrollView className="flex w-full h-full ">
                    <View className="flex flex-col items-center bg-gray-200">
                        <View className='pb-6  flex-col justify-start bg-white mb-10 rounded-lg' >
                            <View className="flex flex-row w-auto h-20 min-w-80 px-4 justify-between">
                            
                            <View className="flex flex-col w-[70%] h-full justify-center">
                                <Text className="text-[25px]" >나의 설문</Text>
                            </View>
                            <View className="flex flex-col h-full w-auto justify-center">
                                <Pressable onPress={() =>  navigation.goBack()}>
                                    <Cencle width={20} height={20} preserveAspectRatio='none'/>
                                </Pressable>    
                            </View>
                        </View>
                            <View   className ="flex-1 align-center justify-center mt-10">
                                <ScrollView style={{ width: '100%' }}>
                                    {surveyContents.map((item, index) => (
                                        <SubjectiveBox key={index} userId={item.userId} title={item.title} />
                                    ))}
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                    
                    
                </ScrollView>
        </View>
    );
}

export default ViewAllList;