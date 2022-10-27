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
import { View, TouchableOpacity, ActivityIndicator } from 'react-native'

const { brand, darkLight, primary } = colors

export const Signup = () => {
  const [hidePassword, setHidePassword] = useState(true)
  const [show, setShow] = useState(false)
  // const [date, setDate] = useState(new Date(2000, 0, 1))

  const [message, setMessage] = useState()
  const [messageType, setMessageType] = useState()

  //actual date of birth to be sent
  // const [dob, setDob] = useState()
  // const onChange = (event, selectedDate) => {
  //   const currentDate = selectedDate || date
  //   setShow(false)
  //   setDate(currentDate)
  //   setDob(currentDate)
  // }

  // const showDatePicker = () => {
  //   setShow(true)
  // }

  const handleSignup = (credentials) => {
    axios.post('http://192.168.8.175:5000/user/register', credentials).then((res) => {
        console.log(res.data)      
    }).catch((err) => {
      console.log(err)
    })
    console.log(credentials)
  }

  return (
    <StyledContainer>
      <StatusBar style='dark' />
      <InnerContainer>
        <PageTitle>Ticket Booking</PageTitle>
        <SubTitle>Accont SignUp</SubTitle>
        {/* {show && (
          <DateTimePicker
            testID='dateTimePicker'
            value={date}
            mode='date'
            is24Hour={true}
            display='default'
            onChange={onChange}
          />
        )} */}
        <Formik
          initialValues={{
            fullName: '',
            email: '',
            phnNo: '',
            address: '',
            nic: '',
            password: '',
            // confirmPassword: '',
          }}
          onSubmit={(values) => {
            // let obj = {
            //   fullName: values.fullName,
            //   email: values.email,
            //   phnNo: values.phnNo,
            //   address: values.address,
            //   nic: values.nic,
            //   password: values.password,
            // }
            // if (
            //   values.fullName == '' ||
            //   values.email == '' ||
            //   values.phnNo == '' ||
            //   values.address == '' ||
            //   values.nic == '' ||
            //   values.password == ''
            // ) {
            //   handleMessage('Please fill all the fields')
            //   setSubmitting(false)
            // } else if (values.password != values.confirmPassword) {
            //   handleMessage('Password do not match!!!')
            //   setSubmitting(false)
            // } else {
              handleSignup(values)
            // }
            
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
              {/* <InputCd
                label='Date of Birth'
                icon='calendar'
                placeholder='YYYY - MM - DD'
                placeholderTextColor={darkLight}
                onChangeText={handleChange('dateOfBirth')}
                onBlur={handleBlur('dateOfBirth')}
                value={dob ? dob.toDateString() : ''}
                isDate={true}
                editable={false}
                showDatePicker={showDatePicker}
              /> */}

              <InputCd
                label='Full Name'
                icon='person'
                placeholder='Jhone Smith'
                placeholderTextColor={darkLight}
                onChangeText={handleChange('fullName')}
                onBlur={handleBlur('fullName')}
                value={values.fullName}
              />

              <InputCd
                label='Email'
                icon='mail'
                placeholder='jhone@gmail.com'
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
                onChangeText={handleChange('phnNo')}
                onBlur={handleBlur('phnNo')}
                value={values.phnNo}
                keyboardType='numeric'
              />

              <InputCd
                label='Address'
                icon='location'
                placeholder='9th Avenu'
                placeholderTextColor={darkLight}
                onChangeText={handleChange('address')}
                onBlur={handleBlur('address')}
                value={values.address}
              />

              <InputCd
                label='NIC(*Enter without V)'
                icon='id-badge'
                placeholder='Enter NIC'
                placeholderTextColor={darkLight}
                onChangeText={handleChange('nic')}
                onBlur={handleBlur('nic')}
                value={values.nic}
                keyboardType='numeric'
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

              <MsgBox type={messageType}>{message}</MsgBox>
              {!isSubmitting && (
                <StyledButton onPress={handleSubmit}>
                  <ButtonText>Register</ButtonText>
                </StyledButton>
              )}
              {isSubmitting && (
                <StyledButton onPress={handleSubmit}>
                  <ActivityIndicator/>
                </StyledButton>
              )}
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
  // isDate,
  // showDatePicker,
  ...props
}) => {
  return (
    <View>
      <LeftIcon>
        <Octicons name={icon} size={20} color={brand} />
      </LeftIcon>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInput {...props} />
      {/* {!isDate && <StyledTextInput {...props} />}
      {isDate && (
        <TouchableOpacity onPress={showDatePicker}>
          <StyledTextInput {...props} />
        </TouchableOpacity>
      )} */}

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
