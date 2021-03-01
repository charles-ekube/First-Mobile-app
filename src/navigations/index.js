import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Text } from 'react-native';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNav = () => {
 
    return (
        <NavigationContainer>
          <DrawerNavigator/>     
    </NavigationContainer>
    
    )
}

export default AppNav ;