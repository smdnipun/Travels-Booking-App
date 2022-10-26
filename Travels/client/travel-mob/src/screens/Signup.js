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
} from '../styles.js'
import { Formik } from 'formik'
import { View } from 'react-native'

const { brand, darkLight, primary } = colors

export const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true)

  return (
    <StyledContainer>
      <StatusBar style='dark' />
      <InnerContainer>
        <PageTitle>Ticket Booking</PageTitle>
        <SubTitle>Accont SignUp</SubTitle>
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            phnNo: '',
            address: '',
            nic: '',
            password: '',
            rpassword: '',
          }}
          onSubmit={(values) => {
            axios.post('http://localhost:5000/user/register')
            console.log(values)

          }}
        >
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <StyledFormArea>
              <InputCd
                label='Full Name'
                icon='person'
                placeholder='Enter full Name'
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.fullName}
                keyboardType='email-address'
              />

              <InputCd
                label='Email'
                icon='mail'
                placeholder='Enter email'
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType='email-address'
              />

              <InputCd
                label='Contact Number'
                icon='device-mobile'
                placeholder='Enter Contact No.'
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType='email-address'
              />

              <InputCd
                label='Address'
                icon='location'
                placeholder='Enter Address'
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType='email-address'
              />

              <InputCd
                label='NIC'
                icon='id-badge'
                placeholder='Enter NIC'
                placeholderTextColor={darkLight}
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                keyboardType='email-address'
              />

              <InputCd
                label='Password'
                icon='shield-lock'
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

              <InputCd
                label='Confirm Password'
                icon='shield-lock'
                placeholder='* * * * * * *'
                placeholderTextColor={darkLight}
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                value={values.confirmPassword}
                secureTextEntry={hidePassword}
                isPassword={true}
                hidePassword={hidePassword}
                setHidePassword={setHidePassword}
              />

              <MsgBox>...</MsgBox>
              <StyledButton onPress={handleSubmit}>
                <ButtonText>Register</ButtonText>
              </StyledButton>
              <Line />
              <ExtraView>
                <ExtraText>Already have a account? </ExtraText>
                <TextLink>
                  <TextLinkContent>Signup</TextLinkContent>
                </TextLink>
              </ExtraView>
            </StyledFormArea>
          )}
        </Formik>
      </InnerContainer>
    </StyledContainer>
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
        <Octicons name={icon} size={20} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {isPassword && (
        <RightIcon onPress={() => setHidePassword(!hidePassword)}>
          <Ionicons
            name={hidePassword ? 'md-eye-off' : 'md-eye'}
            size={15}
            color={darkLight}
          />
        </RightIcon>
      )}
    </View>
  )
}
