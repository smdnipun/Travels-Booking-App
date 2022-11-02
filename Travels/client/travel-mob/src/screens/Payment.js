import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingViewBase,
} from 'react-native'
import { KeyBoardAvoidingWrapper } from '../components/KeyBoardAvoidingWrapper.js'
import QRCode from 'react-native-qrcode-svg'
import { StatusBar } from 'expo-status-bar'
import { Octicons, Ionicons, Fontisto } from '@expo/vector-icons'
import {
  HStack,
  Button,
  NativeBaseProvider,
  Flex,
  VStack,
  KeyboardAvoidingView,
} from 'native-base'
import axios from 'axios'

import {
  StyledContainer,
  InnerContainer,
  PageTitle,
  StyledFormArea,
  LeftIcon,
  RightIcon,
  StyledInputLabel,
  StyledButton,
  ButtonText,
  StyledTextInput,
  StyledTextInputCard,
  colors,
  MsgBox,
  Line,
} from '../components/styles.js'
import { Formik } from 'formik'

const { brand, darkLight, primary } = colors

const Payment = ({ navigation }) => {
  const [show, setShow] = useState(false)
  // const [amount, setAmount] =  useState()
  const userId = '6358955023633526fa90da4c'

  const [message, setMessage] = useState()
  const [messageType, setMessageType] = useState()

  const handlePay = async () => {
    console.log("test")
    navigation.navigate('Qrcode')
    // handleMessage(null)
    // // const response = await axios.post(url,{paymentMethodType:'card',currency:'usd'}).then((res)=>{})
    // const url = 'https://travels-ticket-booking.herokuapp.com/user/register'
    // await axios
    //   .post(url, data)
    //   .then((res) => {
    //     const result = res.data
    //     console.log(result)
    //     if ((res.data = 'Created')) {
    //       navigation.navigate('Login')
    //     } else if ((res.data = 'Exists')) {
    //       handleMessage('The user already exists', 'FAILED')
    //     } else {
    //       handleMessage('An error occured. Please try again!', 'FAILED')
    //     }
    //     setSubmitting(false)
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //     setSubmitting(false)
    //     handleMessage('An error occured. Please try again!')
    //   })
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
          <PageTitle>Add credit</PageTitle>
          <Formik
            initialValues={{
              amount: '',
              cardNo: '',
              cvv: '',
              expireDate: '',
            }}
            onSubmit={(values, { setSubmitting }) => {
              let obj = {
                amount: values.amount,
                cardNo: values.cardNo,
                cvv: values.cvv,
                expireDate: values.expireDate,
              }
              if (
                values.amount == '' ||
                values.cardNo == '' ||
                values.cvv == '' ||
                values.expireDate == ''
              ) {
                handleMessage('Please fill all the fields')
                setSubmitting(false)
              } else {
                handleSignup(obj, setSubmitting)
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
                {/* <CardField
                  postalCodeEnabled={false}
                  style={{ width: '100%', height: 50 }}
                  balanc
                  cardStyle={{
                    borderColor: '#000000',
                    borderWidth: 1,
                    borderRadius: 8,
                  }}
                /> */}
                <InputCd
                  label='Amount'
                  icon=''
                  placeholder='LKR'
                  keyboardType='numeric'
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('amount')}
                  onBlur={handleBlur('amount')}
                  value={values.amount}
                />

                <InputCd
                  label='Card Number'
                  icon='mail'
                  placeholder='4242 4242 4242 4242'
                  size={16}
                  keyboardType='numeric'
                  placeholderTextColor={darkLight}
                  onChangeText={handleChange('cardNo')}
                  onBlur={handleBlur('cardNo')}
                  value={values.cardNo}
                />

                <InputCd
                  label='CVV'
                  icon='device-mobile'
                  placeholder='* * *'
                  placeholderTextColor={darkLight}
                  size={3}
                  onChangeText={handleChange('cvv')}
                  onBlur={handleBlur('cvv')}
                  value={values.cvv}
                  keyboardType='numeric'
                />

                <HStack>
                  <InputCd
                    label='Month'
                    icon='location'
                    placeholder='MM'
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('address')}
                    onBlur={handleBlur('address')}
                    style={{ width: 75 }}
                    value={values.address}
                  />

                  <InputCd
                    label='Year'
                    placeholder='YY'
                    placeholderTextColor={darkLight}
                    onChangeText={handleChange('nic')}
                    onBlur={handleBlur('nic')}
                    value={values.nic}
                    style={{ width: 75 }}
                    keyboardType='numeric'
                  />
                </HStack>

                <MsgBox type={messageType}>{message}</MsgBox>
                <Line />
                <HStack
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  {!isSubmitting && (
                    <StyledButton onPress={handlePay}>
                      <ButtonText>Confirm</ButtonText>
                    </StyledButton>
                  )}
                  {isSubmitting && (
                    <StyledButton disabled={true}>
                      <ActivityIndicator size='large' color={primary} />
                    </StyledButton>
                  )}
                  <StyledButton>
                    <ButtonText>Cancel</ButtonText>
                  </StyledButton>
                </HStack>
              </StyledFormArea>
            )}
          </Formik>
        </InnerContainer>
      </StyledContainer>
    </>
  )
}

export const InputCd = ({ label, icon, ...props }) => {
  return (
    <View>
      <StyledInputLabel>{label}</StyledInputLabel>
      <StyledTextInputCard {...props} />
    </View>
  )
}

export const PaymentHandler = () => {
  return (
    <NativeBaseProvider>
      <Payment />
    </NativeBaseProvider>
  )
}
