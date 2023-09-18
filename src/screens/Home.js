import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const Home = () => {
    return (
        <View style={styles.container}>
            <Text>Second2</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2C3E50',
    },
});
export default Home;