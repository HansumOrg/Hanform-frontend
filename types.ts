import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface StackParamList extends ParamListBase {
  Home: undefined;
  Register: undefined;
  Login: undefined;
  MainPage: undefined;
  MyPage: undefined;
}

export interface LoginStackParamList extends ParamListBase {
  Main: undefined;
  Login: undefined;
  Register: undefined;
}

export interface ScreenProps {
  navigation: NativeStackNavigationProp<StackParamList, keyof StackParamList>;
}

export interface LoginScreenProps {
  navigation: NativeStackNavigationProp<
    StackParamList,
    keyof LoginStackParamList
  >;
}

/*
components > form types 
*/
export interface InputBoxProps {
  title: string;
  className?: string | undefined;
  placeholder?: string | undefined;
  value?: string;
  onChangeText?: ((text: string) => void) | undefined;
}
