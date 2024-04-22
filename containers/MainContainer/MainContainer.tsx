import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { CardView } from '../../components'



export default class MainContainer extends React.Component {
  state = {
    data: [] as DataRow[],
    isLoading: false
  }

  componentDidMount(){
    this.getPostData();
  }

  getPostData = async() => {
    this.callPostData((data:DataResponse) => {
        this.setState({
            data: data,
            isLoading: true
          })
    });
    
  }


  callPostData = async(callback:CallableFunction) => {
    setTimeout(() => {

        
        callback([
            { image: 'http://example.com/image1.png', name: '첫 번째 카드', address: '서울시 강남구' },
            { image: 'http://example.com/image2.png', name: '두 번째 카드', address: '서울시 서초구' },
            // 추가 데이터
        ])
    }, 100);  // 1초 후 데이터 반환
  }

    render() {
      return (
        <View style={styles.container}>
          
          <ScrollView style={styles.cardContainer}>
          {this.state.data.map((data, index) => (
            <CardView
              data={data}
              key={index}
            />
          ))}
          </ScrollView>
        </View>
      );
    }
  }
  
  const styles = StyleSheet.create({
    header: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardContainer: {
      flex: 1,
      flexDirection: 'column',
      width: '100%'
    }
  });



  interface DataRow {
    image: string;
    name: string;
    address: string;
  }
  
  interface DataResponse {
    rows: DataRow[];
  }
  