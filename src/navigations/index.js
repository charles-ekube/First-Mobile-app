import React, {useContext} from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { Text } from 'react-native';
import HomeNavigator from './HomeNavigator';
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/Provider';

const AppNav = () => {
    
    // const  isLoggedIn = true;

    const {authState : {isLoggedIn}} = useContext(GlobalContext)
    console.log(isLoggedIn);
    return (
    
    <NavigationContainer>
     {isLoggedIn? <DrawerNavigator/> : <AuthNavigator/>}
               
    </NavigationContainer>
    
    )
}

export default AppNav ;