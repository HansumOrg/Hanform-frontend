import React from 'react';
import {
    StatusBar,
    Text,
    View,
    StyleSheet
  } from 'react-native';

  const Header = () => (
    <View style={styles.HeaderContainer}>
        <Text style={styles.HeaderText}>Selfly</Text>
    </View>
)

const styles = StyleSheet.create({
    HeaderContainer: {
        backgroundColor: '#2c3e50',
        width: '100%',
        padding: 5,
        marginTop: StatusBar.currentHeight
    },
    HeaderText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ffffff',
        textAlign: 'center'
    }
});

export default Header;