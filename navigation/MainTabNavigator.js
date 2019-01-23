import React from 'react'
import {Platform} from 'react-native'
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreen from '../screens/HomeScreen'

const HomeStack = createStackNavigator({
    Home: HomeScreen
});

HomeScreen.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({focused}) => (
        <TabBarIcon
            focused = {focused}
            name ={
                Platform.OS === 'ios'
                    ? `ios-information-circle${focused ? '': '-outline'}`
                    :'information-circle'
            }
        />
    )
};


export default createBottomTabNavigator({
    HomeStack
})
