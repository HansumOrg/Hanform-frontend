import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface StackParamList extends ParamListBase {
  Home: undefined;
  Register: undefined;
  Login: undefined;
  MainPage: undefined;
  MyPage: undefined;
}

export interface HomeScreenProps {
  navigation: NativeStackNavigationProp<StackParamList, 'Home'>;
}