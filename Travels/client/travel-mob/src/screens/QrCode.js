import { View } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg'
import { CameraRollStatic, ToastAndroid } from 'react-native'
import {
  InnerContainer,
  PageTitle,
  StyledContainer,
} from '../components/styles'

export const QRGenerator = () => {
  const userId = '6358955023633526fa90da4c'

  // function saveQrToDisk() {
  //  	this.svg.toDataURL((data) => {
  //  		RNFS.writeFile(RNFS.CachesDirectoryPath+"/qr-code.png", data, 'base64')
  //  		  .then((success) => {
  //  			  return CameraRoll.saveToCameraRoll(RNFS.CachesDirectoryPath+"/qr-code.png", 'photo')
  //  		  })
  //  		  .then(() => {
  //  			  this.setState({ busy: false, imageSaved: true  })
  //  			  ToastAndroid.show('Saved to gallery !!', ToastAndroid.SHORT)
  //  		  })
  //  	})
  // }

  return (
    <>
      <StyledContainer>
        <PageTitle>Generated QR Code</PageTitle>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <QRCode value='6358955023633526fa90da4c, 22-12-01' />
        </View>
      </StyledContainer>
    </>
  )
}
