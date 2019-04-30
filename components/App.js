import React from 'react';
import { View, Text } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Header from './Header';
import Card from './Card';
import LoginScr from './Login';
import ProfileScr from './profile';

const MainNavigator = createStackNavigator({
	Login: {screen : LoginScr},
	Profile: { screen : ProfileScr }
},{
	initialRouteName: "Login"
	
});

const App = createAppContainer(MainNavigator);

export default App;
