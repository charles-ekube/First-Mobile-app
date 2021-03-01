import React from 'react';
import { View, Text } from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

const Contacts = () => {
    return (
        <View>
            <Text>
                HELLO
            </Text>
        </View>
    )
}
const ContactDetails = () => {
    return (
        <View>
            <Text>
                HELLO
            </Text>
        </View>
    )
}
const CreateContact = () => {
    return (
        <View>
            <Text>
                HELLO
            </Text>
        </View>
    )
}
const Settings = () => {
    return (
        <View>
            <Text>
                HELLO
            </Text>
        </View>
    )
}

const HomeNavigator = () => {
    const HomeStack = createStackNavigator();
    return (
        <HomeStack.Navigator initialRouteName="Contacts">
            <HomeStack.Screen name="Contacts" component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name="Contact Details" component={ContactDetails}></HomeStack.Screen>
            <HomeStack.Screen name="Create Contact" component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    
    )
}

export default HomeNavigator ;