import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface HomeStackParamList extends ParamListBase {
  Home: undefined;
  Register: undefined;
  Login: undefined;
  MainPage: undefined;
  MyPage: undefined;
}

export interface MainStackParamList extends ParamListBase {
  Main: undefined;
  Survey: undefined;
}

export interface LoginStackParamList extends ParamListBase {
  Main: undefined;
  Login: undefined;
  Register: undefined;
}

export interface HomeScreenProps {
  navigation: NativeStackNavigationProp<
    HomeStackParamList,
    keyof HomeStackParamList
  >;
}

export interface LoginScreenProps {
  navigation: NativeStackNavigationProp<
    LoginStackParamList,
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

export interface MainPageScreenProps {
  navigation: NativeStackNavigationProp<MainStackParamList, 'Main'>;
}
