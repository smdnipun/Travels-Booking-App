import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
import axios from 'axios'

import {
  StyledContainer,
  InnerContainer,
  PageLogo,
  PageTitle,
  SubTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledButton,
  ButtonText,
  StyledTextInput,
  colors,
  MsgBox,
  Line,
  ExtraView,
  ExtraText,
  TextLink,
  TextLinkContent,
} from '../components/styles.js'
import { Formik } from 'formik'
import { View, ActivityIndicator } from 'react-native'
import { KeyBoardAvoidingWrapper } from '../components/KeyBoardAvoidingWrapper.js'

const { brand, darkLight, primary } = colors

export const Login = ({ navigation }) => {
  const [hidePassword, setHidePassword] = useState(true)
  const [message, setMessage] = useState()
  const [messageType, setMessageType] = useState()

  const handleLogin = async (credentials, setSubmitting) => {
    handleMessage(null)
    const url = 'http://192.168.8.114:5000/user/login'
    await axios
      .post(url, credentials)
      .then((res) => {
        const result = res.data

        if (!result.success) {
          handleMessage(result.message, 'FAILED')
        } else {
          navigation.navigate('Dashboard', { ...result.data[0] })
        }
        setSubmitting(false)
      })
      .catch((err) => {
        console.log(err)
        setSubmitting(false)
        handleMessage('An error occured. Please try again!')
      })
  }

  const handleMessage = (message, type = 'FAILED') => {
    setMessage(message)
    setMessageType(type)
  }

  return (
    <>
      <StyledContainer>
        <StatusBar style='dark' />
        <InnerContainer>
          <PageLogo
            resizeMode='cover'
            source={require('./../../assets/logo.png')}
          />
          <PageTitle>Ticket Booking</PageTitle>
          <SubTitle>Accont Login</SubTitle>
          <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
              if (values.email == '' || values.password == '') {
                handleMessage('Please fill all the fields')
                setSubmitting(false)
              } else {
                handleLogin(values, setSubmitting)
              }
            }}
          >
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              isSubmitting,
            }) => (
              <StyledFormArea>
                <InputCd
                  label='Email'
                  icon='mail'
                  placeholder='enter email'
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  value={values.email}
                  keyboardType='email-address'
                />

                <InputCd
                  label='Password'
                  icon='lock'
                  placeholder='* * * * * * *'
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                  secureTextEntry={hidePassword}
                  isPassword={true}
                  hidePassword={hidePassword}
                  setHidePassword={setHidePassword}
                />
                <MsgBox type={messageType}>{message}</MsgBox>

                {!isSubmitting && (
                  <StyledButton onPress={handleSubmit}>
                    <ButtonText>Login</ButtonText>
                  </StyledButton>
                )}

                {isSubmitting && (
                  <StyledButton disabled={true}>
                    <ActivityIndicator size='large' color={primary} />
                  </StyledButton>
                )}

                <Line />
                {/* <StyledButton google={true} onPress={handleSubmit}>
                  <Fontisto name='google' color={primary} size={25} />
                  <ButtonText google={true}> Sign in with Google</ButtonText>
                </StyledButton> */}
                <ExtraView>
                  <ExtraText>Don't have an account already? </ExtraText>
                  <TextLink
                    onPress={() => {
                      navigation.navigate('Signup')
                    }}
                  >
                    <TextLinkContent>Signup</TextLinkContent>
                  </TextLink>
                </ExtraView>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </>
  )
}

export const InputCd = ({
  label,
  icon,
  isPassword,
  hidePassword,
  setHidePassword,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={30} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? 'md-eye-off' : 'md-eye'}
            size={30}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  )
}
