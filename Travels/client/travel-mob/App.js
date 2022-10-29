import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { TicketDashBoard } from './src/screens/DashBoard.js'
import { Login } from './src/screens/login.js'
import { Signup } from './src/screens/Signup.js'
import { TripHistory } from './src/screens/TripHistory.js'


export default function App() {
  return <TicketDashBoard/>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0892d0',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
