import { View, Text, Platform } from 'react-native'
import React from 'react'
import { homeStyles } from '@unistyles/homeStyles'
import LottieView from 'lottie-react-native'

const Graphics = () => {
  return (
    <View style={homeStyles.lottieContainer} pointerEvents='none'>
        <LottieView 
        enableMergePathsAndroidForKitKatAndAbove
        enableSafeModeAndroid
        style={homeStyles.lottie}
        source={require('@assets/animations/event.json')}
        autoPlay
        loop
        hardwareAccelerationAndroid
        
        />
      
    </View>
  )
}

export default Graphics