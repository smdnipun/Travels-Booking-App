import React from 'react'
import { Button } from 'react-native'
import { HStack, Center, NativeBaseProvider, Flex, VStack } from 'native-base'
import {
  FontAwesome,
  Fontisto,
  MaterialCommunityIcons,
  Ionicons,
} from '@expo/vector-icons'
import { Text } from 'react-native'
import { SubTitle1, SubTitle2 } from '../components/styles'

const DashIcons = (navigation) => {
  return (
    <>
      <HStack space={8}>
        <VStack space={4} alignItems='center'>
          <Center h='40' w='40' bg='indigo.300' rounded='md' shadow={3}>
            <Fontisto name='wallet' size={24} color='black' />
            <SubTitle1></SubTitle1>
            <SubTitle1>Account Balance</SubTitle1>
            <SubTitle2>LKR 0.00</SubTitle2>
          </Center>
          <Center h='40' w='40' bg='indigo.500' rounded='md' shadow={3}>
            <MaterialCommunityIcons
              name='bag-personal'
              size={24}
              color='black'
            />
            <SubTitle1></SubTitle1>
            <SubTitle1>Number of trips</SubTitle1>
            <SubTitle2>00</SubTitle2>
          </Center>
        </VStack>
        <VStack space={4}>
          <Center h='40' w='40' bg='indigo.300' rounded='md' shadow={3}>
            <FontAwesome name='money' size={24} color='black' />
            <SubTitle1></SubTitle1>
            <SubTitle1>Loan Amount</SubTitle1>
            <SubTitle2>LKR 0.00</SubTitle2>
          </Center>
          <Center h='40' w='40' bg='indigo.500' rounded='md' shadow={3}>
            <Ionicons name='ios-newspaper' size={24} color='black' />
            <SubTitle1></SubTitle1>
            <SubTitle1>Token Status</SubTitle1>
            <SubTitle2>Active</SubTitle2>
          </Center>
        </VStack>
      </HStack>
      <SubTitle1 />
      <SubTitle1 />

      <HStack space={8}>
        <Center h='10' w='20' bg='indigo.300' rounded='md' shadow={3}>
          <Button
            onPress={() => navigation.navigate('Notifications')}
            title='Go to notifications'
          />
        </Center>
        <Center h='10' w='20' bg='indigo.500' rounded='md' shadow={3}>
          <Button
            onPress={() => navigation.navigate('Notifications')}
            title='Go to notifications'
          />
        </Center>
      </HStack>
    </>
  )
}

export const Dash = () => {
  return (
    <NativeBaseProvider>
      <Center md='2.5'>
        <DashIcons />
      </Center>
    </NativeBaseProvider>
  )
}
