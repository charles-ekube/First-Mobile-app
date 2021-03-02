
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, Text, ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNav from './src/navigations';
import GlobalProvider from './src/context/Provider';


export default function App() {
  
  // const [outputText, setOutputText] = useState('We Move!!!!!!')
  return (
    <GlobalProvider>
      <AppNav>

      </AppNav>
    </GlobalProvider>
     
  )
}  
  
  
  
  
  
  
  
  
