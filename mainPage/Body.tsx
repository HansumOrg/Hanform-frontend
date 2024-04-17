import React, { useEffect, useState } from 'react';
import { Pressable, ScrollView, StatusBar, View, Text, TextInput } from 'react-native';
import { Svg, Circle } from 'react-native-svg';
import CreateIcon from '../assets/images/icon_plus.svg'
import MultipleIcon from '../assets/images/icon_checkbox.svg'
import UploadIcon from '../assets/images/icon_file.svg'
import SubjectiveIcon from '../assets/images/icon_subjective.svg'
import EssentialOnIcon from '../assets/images/icon_essential.svg'
import EssentialOffIcon from '../assets/images/icon_essential_off.svg'
import DeleteIcon from '../assets/images/icon_delete.svg'
import CheckboxIcon from '../assets/images/icon_unfilledCheckbox.svg'
import SurveyAddIcon from '../assets/images/icon_surveyPlus.svg'
import SurveyDeleteIcon from '../assets/images/icon_crossbutton.svg'


interface BoxProps{
    index:number;
    is_essential : boolean;
    title : string;
    surveyChoices : string[];
    toggleEssential : () => void;
    addChoice: () => void;
    removeChoice: (choiceIndex: number) => void;
    updateChoices : (choiceIndex : number, content: string) => void;
    updateTitle : (index: number, title: string) => void;
    removeContent : (index: number) => void;
}

const multipleBox = (props : BoxProps) => {
    return (
        <View className="flex flex-col w-11/12 h-auto bg-white rounded-2xl items-center">
            <View className="flex flex-row justify-between w-full top-4 h-12">
                <Text className="font text-2xl font-bold px-2">{(props.index)+1}.</Text>
                <View className="flex flex-row">
                    <Text className="font font-bold px-2">필수 :</Text>
                    <Pressable className="flex py-1" onPress={props.toggleEssential}>
                    {props.is_essential ? <EssentialOnIcon width={30} height={14}/> : <EssentialOffIcon width={30} height={14}/>}
                    </Pressable>              
                    <Pressable className="flex justify-self-end px-3" onPress={()=>props.removeContent(props.index)}>
                        <DeleteIcon width={20} height={20}/>
                    </Pressable>
                </View>
            </View>   
            <View className="flex h-12 w-5/6 items-center">
                <View className="flex flex-row h-full w-full items-center">
                    <TextInput className="font w-full text-[20px] border-b-2 border-slate-400" onChangeText={(text)=>props.updateTitle(props.index,text)} placeholder="제목을 입력하세요."></TextInput>
                    {props.is_essential ? <Text className="font text-3xl font-bold text-red-500">*</Text> : null}
                </View>
            </View>
            {props.surveyChoices && props.surveyChoices.map((choice, index) => (
                <View key={index} className="flex flex-row w-11/12 h-10 my-1 items-center">
                    <View className="p-2"><CheckboxIcon width={18} height={18}/></View>
                    <TextInput className="font text-[15px] w-10/12" value={choice} onChangeText={(text)=>{props.updateChoices(index, text)}} placeholder="선택지를 추가하세요."></TextInput>
                    <Pressable onPress={() => props.removeChoice(index)}>
                        <SurveyDeleteIcon width={18} height={18}/>
                    </Pressable>
                </View>
            ))}
            <View className="flex flex-row w-11/12 h-10 my-1 items-center">
                <Pressable className="flex flex-row items-center w-2/5" onPress={props.addChoice}>
                    <View className="p-2"><SurveyAddIcon width={18} height={18}/></View>
                    <Text className="font font-bold text-[15px] w-10/12 text-enable-button-background"> 항목 추가하기</Text>
                </Pressable>
            </View>
            <View className="flex h-5"></View>
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
        <View className="flex flex-col w-11/12 h-auto bg-white rounded-2xl items-center">
            <View className="flex flex-row justify-between w-full top-4 h-12">
                <Text className="font text-2xl font-bold px-2">{(props.index)+1}.</Text>
                <View className="flex flex-row">
                    <Text className="font font-bold px-2">필수 :</Text>
                    <Pressable className="flex py-1" onPress={props.toggleEssential}>
                    {props.is_essential ? <EssentialOnIcon width={30} height={14}/> : <EssentialOffIcon width={30} height={14}/>}
                    </Pressable>   
                    <Pressable className="flex justify-self-end px-3">
                        <DeleteIcon width={20} height={20}/>
                    </Pressable>
                </View>
            </View>   
            <View className="flex h-20 w-5/6 bottom-0">
                    <TextInput className="font text-[20px] border-b-2 border-slate-400" placeholder="제목을 입력하세요."></TextInput>
            </View>
            <View className="flex flex-row w-11/12 h-12 my-2">
                <View className="flex w-full h-10 items-center">
                    <Text className="font text-1xl w-11/12 border-b-2 border-slate-400"/>
                </View>
            </View>
        </View>
    );
}

function Body() {
    const [showSurvey, setShowSurvey] = useState(false);
    const [surveyContents, setSurveyContents] = useState<{ content: string, is_essential: boolean, title:string, surveyChoices: string[] }[]>([]);
    const [showConfirm, setShowConfirm] = useState(false);

    // useEffect(() => {
    //     console.log(surveyContents);
    // }, [surveyContents]);

    const addContent = (content: string) => {
        setSurveyContents([...surveyContents, { content, is_essential: false, title:"", surveyChoices: [""] }]);
        check();
    }

    const removeContent = (index: number) => {
        const newContents = [...surveyContents];
        newContents.splice(index, 1);
        setSurveyContents(newContents);
        check();
    }

    const updateTitle = (index: number, title: string) => {
        const newContents = [...surveyContents];
        newContents[index].title = title;
        setSurveyContents(newContents);
        check();
    }
    
    const addChoice = (index: number) => {
        const newContents = [...surveyContents];
        newContents[index].surveyChoices.push('');
        setSurveyContents(newContents);
        check();
    }

    const updateChoices = (index:number, surveyContentIndex : number, content: string) => {
        const newContents = [...surveyContents];
        newContents[index].surveyChoices[surveyContentIndex] = content;
        setSurveyContents(newContents);
        check();
    }

    const removeChoice = (contentIndex: number, choiceIndex: number) => {
        const newContents = [...surveyContents];
        newContents[contentIndex].surveyChoices.splice(choiceIndex, 1);
        setSurveyContents(newContents);
    }
    
    const check = () => {
        const newContents = [...surveyContents];
        let check = false;
        for (let i = 0; i < newContents.length; i++) {
            console.log(newContents[i]);
            if (newContents[i].title === "" || newContents[i].surveyChoices.length === 0 || newContents[i].surveyChoices.includes("")) {
                check = false;
                break;
            } else {
                check = true;
                setShowConfirm(check);
           }
        }
    }

    return (
        <View className="flex w-full h-3/4">
            <StatusBar barStyle="default" />
            <ScrollView>
            <View className="flex flex-col space-y-2 h-full items-center">
            {surveyContents.map((item, index) => {
            const toggleEssential = () => {
            const newContents = [...surveyContents];
            newContents[index].is_essential = !newContents[index].is_essential;
            setSurveyContents(newContents);
        };

        const renderContent = () => {
            if (item.content === '객관식') {
                return <View className="flex h-auto w-full my-2 items-center" key={index}>
                    {
                        multipleBox({
                            index, is_essential: item.is_essential, title:item.title ,surveyChoices: item.surveyChoices, toggleEssential,
                            addChoice: () => addChoice(index),
                            removeChoice: (choiceIndex) => removeChoice(index, choiceIndex),
                            updateChoices: (choiceIndex, content) => {
                                updateChoices(index, choiceIndex, content);
                            },
                            updateTitle: (index, title) => {
                                updateTitle(index, title);
                            },
                            removeContent: (index) => {
                                removeContent(index);
                            }
                        })
                    }</View>;
            } else if (item.content === '파일 업로드') {
                return <View className="flex h-auto w-full my-2 items-center" key={index}>
                    {uploadBox({
                            index, is_essential: item.is_essential, title:item.title ,surveyChoices: item.surveyChoices, toggleEssential,
                            addChoice: () => addChoice(index),
                            removeChoice: (choiceIndex) => removeChoice(index, choiceIndex),
                            updateChoices: (choiceIndex, content) => {
                                updateChoices(index, choiceIndex, content);
                            },
                            updateTitle: (index, title) => {
                                updateTitle(index, title);
                            },
                            removeContent: (index) => {
                                removeContent(index);
                            }
                        })}</View>;
            } else {
                return <View className="flex h-auto w-full my-2 items-center" key={index}>
                    {subjectiveBox({
                            index, is_essential: item.is_essential, title:item.title ,surveyChoices: ["주관식"], toggleEssential,
                            addChoice: () => addChoice(index),
                            removeChoice: (choiceIndex) => removeChoice(index, choiceIndex),
                            updateChoices: (choiceIndex, content) => {
                                updateChoices(index, choiceIndex, content);
                            },
                            updateTitle: (index, title) => {
                                updateTitle(index, title);
                            },
                            removeContent: (index) => {
                                removeContent(index);
                            }
                        })}</View>;
            }
        };
        return renderContent();
            })}
                <View className="flex h-12 w-full items-center">
                    <Pressable className={`flex w-11/12 h-full justify-center rounded bg-${showConfirm ? 'enable':'disable'}-button-background`}>
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