import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { MainScreen } from '../screens/MainScreen'
import { NoteScreen } from '../screens/NoteScreen' 

const MainStack = createStackNavigator()

export default function MainStackNav() {
    return(
        <MainStack.Navigator>
            <MainStack.Screen 
                name='Main'
                component={MainScreen}
                options={{
                    title: 'Главная'
                }}  
            />
            <MainStack.Screen 
                name='Note'
                component={NoteScreen}
                options={({route}) => ({
                    title: route.params.noteName,
                })}
            /> 
        </MainStack.Navigator>
    )
}