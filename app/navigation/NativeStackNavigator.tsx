import { View, Text } from 'react-native'
import React from 'react'
import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/home/HomeScreen'
import Colors from '../utils/Colors'
import DetailScreen from '../screens/detail/DetailScreen'


type RootNavParams = {
  Home: undefined,
  Detail: {
    item: any,
    index: number
  }
}

export type HomeNativeStackProp = NativeStackScreenProps<RootNavParams, 'Home'>
export type DetailNativeStackProp = NativeStackScreenProps<RootNavParams,'Detail'>

export const RootStack = createNativeStackNavigator<RootNavParams>()

const NativeStackNavigator = () => {
  return (
    <RootStack.Navigator screenOptions={{
      headerStyle:{ backgroundColor: Colors.PRIMARY},
      headerTintColor: Colors.WHITE
    }}>
      <RootStack.Screen name="Home" component={HomeScreen} />
      <RootStack.Screen name="Detail" component={DetailScreen} />
    </RootStack.Navigator>
  )
}

export default NativeStackNavigator