import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, StatusBar, View, Text, FlatList,  } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import CreateIcon from '../assets/images/icon_plus.svg'
import surveyData from './DB/surveyData.json'
import { SurveyCreatePageProps } from '../types';


interface BoxProps {
    userId: string;
    title: string;
}

const subjectiveBox = (props: BoxProps) => {
    return (
        
        <View className='w-[317px] h-[68px] px-[22px] py-3 bg-white justify-start items-center gap-[78px] inline-flex'>
            <View className='justify-start items-center gap-2 flex'>
                <View className=" flex-col justify-start items-start gap-1.5 inline-flex">
                    <Text> 작성자:{props.userId}</Text>
                    <Text className='font-bold text-base text-gray-700'>{props.title}</Text>
                </View>
            </View>
            <Pressable className='px-[15px] py-2 bg-zinc-100 rounded-lg justify-start items-start gap-2.5 flex'>
                <Text>답변</Text>
            </Pressable>
                
            
        </View>
      
    );
  }


function Body(props: SurveyCreatePageProps ) {
    const {navigation} = props;
//     const [showSurvey, setShowSurvey] = useState(false);
//     const [surveyContents, setSurveyContents] = useState([]); // 서베이 내용을 담을 상태

//     useEffect(() => {
//         // DB에서 설문 데이터를 가져오는 함수
//         const fetchSurveys = async () => {
//           try {
//             // 실제로는 이 부분에 적절한 서버의 URL을 넣어야 합니다.
//             //let response = await fetch('http://yourserver.com/surveys');
//             //let surveys = await response.json();
//             //setSurveyContents(surveys); // 가져온 데이터를 상태에 저장
//           } catch (error) {
//             console.error(error);
//           }
//         };
//         fetchSurveys(); // 컴포넌트 마운트시 데이터 가져오기
//   }, []);
    const [showSurvey, setShowSurvey] = useState(false);
    // JSON 파일에서 불러온 데이터로 초기 상태 설정
    const [surveyContents, setSurveyContents] = useState(surveyData.surveys);

    return (
        <View className="flex w-full h-3/4">
            <StatusBar barStyle="default" />
            
                <View className="flex flex-col space-y-2 h-full items-center">
                    <FlatList
                        data={surveyContents}
                        renderItem={({ item, index }: { item: BoxProps, index: number }) => {
                            const renderContent = () => {
                                console.log(index, item);
                                return (
                                    <View className="flex h-auto w-full items-center" key={index}>
                                        {subjectiveBox({ userId: item.userId, title: item.title})}
                                    </View>
                                );
                            };
                            return renderContent();
                        }}
                    />
                    
                
                </View>
            
        
            <View className="absolute h-20 z-10 w-auto bottom-5 right-0 opacity-80">
                <Svg height="80" width="80">
                        <Circle cx="40" cy="43" r="26" onPress={() => navigation.navigate('Survey')} />
                        <CreateIcon width={80} height={80}/>
                    </Svg>
            </View>
        </View>
    );
}

export default Body;