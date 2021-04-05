import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { ImpScreen } from '../screens/ImpScreen'
import { NoteScreen } from '../screens/NoteScreen'

const ImpStack = createStackNavigator()

export default function ImpStackNavigator() {
    return(
        <ImpStack.Navigator>
            <ImpStack.Screen 
                name='Imp'
                component={ImpScreen}
                options={{
                    title: 'Важное'
                }}
            />
            <ImpStack.Screen 
                name='Note'
                component={NoteScreen}
                options={{
                    title: 'Заметка'
                }}
            />
        </ImpStack.Navigator>
    )
}