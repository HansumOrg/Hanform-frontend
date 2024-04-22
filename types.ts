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
    CreateSurvey: undefined;
    MainList: undefined;
    Main: undefined;
    Survey: undefined;
    DelMySurvey: undefined;
}

export interface HomeScreenProps {
  navigation: NativeStackNavigationProp<HomeStackParamList, 'Home'>;
}

export interface MainPageScreenProps {
  navigation: NativeStackNavigationProp<MainStackParamList, 'Main'>;
}

export interface SurveyCreatePageProps {
  navigation: NativeStackNavigationProp<MainStackParamList, 'CreateSurvey'>;
}

export interface MainListPageScreenProps {
  navigation: NativeStackNavigationProp<MainStackParamList, 'MainList'>;
}
