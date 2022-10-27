import * as React from 'react'
import { Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Dash } from './DashBoarIcons'
import { StyledContainer, InnerContainer, PageLogo, PageTitle, SubTitle } from '../styles'
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'

function HomeScreen() {
  return (
    <StyledContainer>
      <StatusBar style='dark' />
      <InnerContainer>
        <PageLogo
          resizeMode='cover'
          source={require('./../../assets/logo.png')}
        />
        <PageTitle>Ticket Booking</PageTitle>
        <SubTitle>Accont Login</SubTitle>
        <Dash />
        </InnerContainer>
        </StyledContainer>

  )
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  )
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  )
}
function Token() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Token!</Text>
    </View>
  )
}
const Tab = createMaterialBottomTabNavigator()

export const TicketDashBoard=() =>{
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Profile' component={Profile} />
        <Tab.Screen name='Token' component={Token} />
        <Tab.Screen name='Settings' component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
