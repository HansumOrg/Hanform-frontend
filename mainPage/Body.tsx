import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, StatusBar, View, Text, TextInput } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import CreateIcon from '../assets/images/icon_plus.svg'
import MultipleIcon from '../assets/images/icon_checkbox.svg'
import UploadIcon from '../assets/images/icon_file.svg'
import SubjectiveIcon from '../assets/images/icon_subjective.svg'
import EssentialIcon from '../assets/images/icon_essential.svg'
import DeleteIcon from '../assets/images/icon_delete.svg'
import CheckboxIcon from '../assets/images/icon_unfilledCheckbox.svg'


interface BoxProps{
    index:number;
}

const multipleBox = (props : BoxProps) => {
    return (
        <View className="flex flex-col w-11/12 h-48 bg-white rounded-2xl items-center">
            <View className="flex flex-row justify-between w-full top-4 h-12">
                <Text className="font text-2xl font-bold px-2">{(props.index)+1}.</Text>
                <View className="flex flex-row">
                    <Text className="font font-bold px-2">필수 :</Text>
                    <Pressable className="flex py-1" >
                        <EssentialIcon width={30} height={14}/>
                    </Pressable>
                    <Pressable className="flex justify-self-end px-3">
                        <DeleteIcon width={20} height={20}/>
                    </Pressable>
                </View>
            </View>   
            <View className="flex h-20 w-5/6 bottom-0">
                    <TextInput className="font text-[20px] border-b-2 border-slate-400" placeholder="제목을 입력하세요."></TextInput>
            </View>
            <View className="flex flex-row w-11/12 h-10">
                <View className="p-2"><CheckboxIcon width={18} height={18}/></View>
                <TextInput className="font text-[15px] w-10/12 justify-self-end border-b-2 border-slate-400" placeholder="선택지를 추가하세요."></TextInput>
            </View>
        </View>
    );
}

const uploadBox = (props : BoxProps) => {
    return (
        <View className="flex w-11/12 h-12 bg-white rounded">
            <Text>{(props.index)+1}.파일 업로드 문항입니다.</Text>
        </View>
    );
}

const subjectiveBox = (props : BoxProps) => {
    return (
        <View className="flex flex-col w-11/12 h-30 bg-white rounded-2xl items-center">
            <View className="flex flex-row justify-between w-full top-4 h-12">
                <Text className="font text-2xl font-bold px-2">{(props.index)+1}.</Text>
                <View className="flex flex-row">
                    <Text className="font font-bold px-2">필수 :</Text>
                    <Pressable className="flex py-1" >
                        <EssentialIcon width={30} height={14}/>
                    </Pressable>
                    <Pressable className="flex justify-self-end px-3">
                        <DeleteIcon width={20} height={20}/>
                    </Pressable>
                </View>
            </View>   
            <View className="flex h-20 w-5/6 bottom-0">
                    <TextInput className="font text-[20px] border-b-2 border-slate-400" placeholder="제목을 입력하세요."></TextInput>
            </View>
            <View className="flex flex-row w-11/12 h-10">

            </View>
        </View>
    );
}

function Body() {
    const [showSurvey, setShowSurvey] = useState(false);
    const [surveyContents, setSurveyContents] = useState<string[]>([]);
    let height = 0;
    
    const addContent = (content : string) => {
        setSurveyContents([...surveyContents, content]);
    }
    
    return (
        <View className="flex w-full h-3/4">
            <StatusBar barStyle="default" />
            <ScrollView>
            <View className="flex flex-col space-y-2 h-full items-center">
            {surveyContents.map((content, index) => {
            const renderContent = () => {
                console.log(index,content);
                if (content === '객관식') {
                    return <View className="flex h-auto w-full my-2 items-center" key={index}>{multipleBox({index})}</View>;
                } else if (content === '파일 업로드') {
                    return <View className="flex h-auto w-full my-2 items-center" key={index}>{uploadBox({index})}</View>;
                } else {
                    return <View className="flex h-auto w-full my-2 items-center" key={index}>{subjectiveBox({index})}</View>;
                }
            };
                return renderContent();
            })}
                <View className="flex h-12 w-full items-center">
                    <Pressable className="flex w-11/12 h-full justify-center rounded bg-disable-button-background" >
                    <Text className="text-center text-[15px] font-bold text-white">확인하기</Text>
                    </Pressable>
                </View>
            </View>
            </ScrollView>
            {showSurvey && 
                <View className ="absolute z-5 w-full bottom-10 h-40 items-center justify-center">
                    <View className="flex px-12 flex-row w-5/6 h-3/5 bg-enable-button-background opacity-60 items-center justify-around rounded">
                        <Pressable className="flex flex-col items-center" onPress={() => addContent('객관식')}>
                            <MultipleIcon width={36} height={36}/>
                            <Text className="text-center text-[12px] font-bold">객관식</Text>
                        </Pressable>
                        <Pressable className="flex flex-col items-center">
                            <UploadIcon width={36} height={36} onPress={() => addContent('파일 업로드')}/>
                            <Text className="text-center text-[12px] font-bold">파일 업로드</Text>
                        </Pressable>
                        <Pressable className="flex flex-col items-center" onPress={() => addContent('주관식')}>
                            <SubjectiveIcon width={36} height={36}/>
                            <Text className="text-center text-[12px] font-bold">주관식</Text>
                        </Pressable>

                    </View>
                </View>}
            <View className="absolute h-20 z-10 w-auto bottom-5 right-0 opacity-80">
                <Svg height="80" width="80">
                        <Circle cx="40" cy="43" r="26" onPress={() => setShowSurvey(!showSurvey)} />
                        <CreateIcon width={80} height={80}/>
                    </Svg>
            </View>
        </View>
    );
}

export default Body;