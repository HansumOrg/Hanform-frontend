import { View, Text, TextInput } from 'react-native';
import { InputBoxProps } from '../../types';

export default function InputBox(props: InputBoxProps) {
  const { title, placeholder, value, onChangeText } = props;
  return (
    <View className="flex w-full justify-center flex-row mt-2">
      <View className="w-full">
        <Text className="font-bold">{title}</Text>
        <TextInput
          className="border border-[#1A5BAB] rounded-md h-10 w-full px-3 mt-2"
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
}
