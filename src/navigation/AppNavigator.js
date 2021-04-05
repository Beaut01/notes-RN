import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import MainStackNav from './MainStack'
import ImpStackNavigator from './ImpStack'
import { Ionicons } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

export default function AppNavigator() {
    return(
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({color, size}) => {
                        let iconName 

                        if (route.name === 'Main') {
                            iconName = 'home'
                        } else if (route.name === 'Imp') {
                            iconName = 'information-circle'
                        }

                        return <Ionicons name={iconName} size={size} color={color}/> 
                    }
                })}
                tabBarOptions={{
                    activeTintColor: 'orange',
                    inactiveTintColor: 'gray'
                }}
            >
                <Tab.Screen 
                    name='Main'
                    component={MainStackNav}
                />
                <Tab.Screen 
                    name='Imp'
                    component={ImpStackNavigator}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}