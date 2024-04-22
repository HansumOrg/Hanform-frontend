import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, View, Text } from 'react-native';
import surveyData from '../../assets/DB/surveyData.json'
import { MainListPageScreenProps } from '../../types';
interface BoxProps {
    userId: string;
    title: string;
    surveyId: number;
    navigation: any;
}

const SubjectiveBox = (props: BoxProps) => {
    const { userId, title, navigation, surveyId } = props;
    return (
        <View style={{ width: 317, height: 68, paddingHorizontal: 22, paddingVertical: 10, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View className='flex-col items-start'>
                <Text>작성자: {userId}</Text>
                <Text className="text-center text-16 font-bold text-4a4a4a" numberOfLines={1} ellipsizeMode='tail'>{title}</Text>
            </View>
            <Pressable className='px-4 py-2 bg-gray-200 rounded-lg items-center' onPress={() => navigation.navigate('AnswerSurvey',{surveyId})}>
                <Text>답변</Text>
            </Pressable>
        </View>
    );
};

function OtherList(props : MainListPageScreenProps) {
    const { navigation } = props;
    const [surveyContents, setSurveyContents] = useState(() => {
        // 필터링 로직을 추가하여 user01의 데이터만 빼고 설정
        return surveyData.surveys.filter(survey => survey.userId !== 'user01');
    });

    return (
        <View className='pb-6  flex-col justify-start bg-white rounded-lg' >
            <View className="flex flex-row w-full h-20 min-w-80 px-4 justify-between rounded-lg">
                
                <View className="flex flex-col w-[70%] h-full justify-center rounded-lg">
                    <Text className='text-left text-[25px] font-bold text-black rounded-lg'>받은 설문 목록</Text> 
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ScrollView style={{ width: '100%' }}>
                    {surveyContents.map((item, index) => (
                        <SubjectiveBox key={index} userId={item.userId} title={item.title} surveyId={item.surveyId} navigation={navigation} />
                    ))}
                </ScrollView>
            </View>
        </View>
    );
}

export default OtherList;
