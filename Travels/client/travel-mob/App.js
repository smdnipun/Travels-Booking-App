import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { TicketDashBoard } from './src/screens/DashBoard.js'
import { Login } from './src/screens/login.js'
import { Signup } from './src/screens/Signup.js'

export default function App() {
  return <Login />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
