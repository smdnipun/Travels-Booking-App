import React from 'react'

import { colors } from '../components/styles.js'
const { tertiary } = colors

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//screens
import { Login } from '../screens/Login.js'
import { Signup } from '../screens/Signup.js'
import { TicketDashBoard } from '../screens/DashBoard.js'

const Stack = createStackNavigator()

export const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: 'transparent',
          },
          // headerTintColor: tertiary,
          headerTransparent: true,
          headerTitle: '',
        }}
        initialRouteName='Login'
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Dashboard' component={TicketDashBoard} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
