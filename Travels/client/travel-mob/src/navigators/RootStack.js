import React from 'react'

import { colors } from '../components/styles.js'
const { tertiary } = colors

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//screens
import { Login } from '../screens/login.js'
import { Signup } from '../screens/Signup.js'
import { TicketDashBoard } from '../screens/DashBoard.js'
import { QRGenerator } from '../screens/QrCode.js'

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
        initialRouteName='Dashboard'
      >
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Dashboard' component={TicketDashBoard} />
        <Stack.Screen name='Qrcode' component={QRGenerator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
