import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { RootStack } from './src/navigators/RootStack.js'
import { TicketDashBoard } from './src/screens/DashBoard.js'
import { Login } from './src/screens/Login.js'
import { Signup } from './src/screens/Signup.js'
import { TripHistory } from './src/screens/TripHistory.js'
import { Welcome } from './src/screens/Welcome.js'

export default function App() {
  // return <TicketDashBoard/>
  return <RootStack />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0892d0',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
