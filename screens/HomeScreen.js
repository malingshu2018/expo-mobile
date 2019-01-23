import React from 'react'

import {StyleSheet, Text, View} from 'react-native'


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        header: null
    }
    render(){
        return (
            <View style={styles.container}>
                <Text>this is home Screen ! hahaha</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    }
});
