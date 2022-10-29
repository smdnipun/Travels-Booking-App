import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'

import {
  InnerContainer,
  PageTitle,
  SubTitle,
  StyledFormArea,
  StyledButton,
  ButtonText,
  Line,
  WelcomeContainer,
  Avatar,
  WelcomeImage,
} from '../components/styles.js'

export const Welcome = () => {
  return (
    <>
      <StatusBar style='ligth' />
      <InnerContainer>
        <WelcomeImage
          resizeMode='cover'
          source={require('./../../assets/logo.png')}
        />
        <WelcomeContainer>
          <PageTitle welcome={true}>Ticket Booking</PageTitle>
          <SubTitle welcome={true}>Welcome</SubTitle>
          <StyledFormArea>
            <Avatar
              resizeMode='cover'
              source={require('./../../assets/logo.png')}
            />
            <Line />
            <StyledButton onPress={() => {}}>
              <ButtonText>Login</ButtonText>
            </StyledButton>
          </StyledFormArea>
        </WelcomeContainer>
      </InnerContainer>
    </>
  )
}
