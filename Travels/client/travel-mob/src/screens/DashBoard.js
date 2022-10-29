import * as React from 'react'
import { Button, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Dash } from './DashBoarIcons'
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'

import { SubTitle, PageTitle, PageLogo, SubTitle1 } from '../components/styles'
import { Signup } from './Signup'
import { Login } from './Login'
import { TripHistory } from './TripHistory'

const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

function HomeScreen({ navigation }) {
  return (
    <>
      <SubTitle1 />
      <SubTitle1 />
      <PageTitle>DashBoard</PageTitle>
      <SubTitle1>Welcome name</SubTitle1>
      <SubTitle1 />
      <SubTitle1 />
      <Dash />
    </>
  )
}

function SettingsScreen({ navigation }) {
  return (
    <View
      style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
    ></View>
  )
}

function Token({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Token')}
        title='Go to notifications'
      />
    </View>
  )
}

function Profile({ navigation }) {
  return <TripHistory />
}

function PlaceHome({ navigation }) {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name='Home' icon='mail' component={HomeScreen} />
      <Tab.Screen name='Profile' component={Profile} />
      <Tab.Screen name='Token' component={Token} />
      <Tab.Screen name='Settings' component={SettingsScreen} />
    </Tab.Navigator>
  )
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  )
}

export const TicketDashBoard = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName='Ticket Booking'
      >
        <Drawer.Screen name='Ticket Booking' component={PlaceHome}>
          {/* <PageLogo
            resizeMode='cover'
            source={require('./../../assets/logo.png')}
          /> */}
        </Drawer.Screen>
        <Drawer.Screen name='Logout' component={Login} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
