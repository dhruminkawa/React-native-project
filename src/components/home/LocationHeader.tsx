import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { useSharedState } from '@features/tabs/SharedContext'
import Animated, { interpolate, useAnimatedStyle } from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import { homeStyles } from '@unistyles/homeStyles'
import Icon from '@components/global/Icon'
import CustomText from '@components/global/CustomText'
import Ionicons from '@react-native-vector-icons/ionicons'



const LocationHeader:FC = () => {
    const {scrollYGlobal} =useSharedState()
    const textColor ='#fff'
    const opacityFadingStyles = useAnimatedStyle(()=>{
        const opacity = interpolate(scrollYGlobal.value, [0,80], [1,0])
        return {
            opacity: opacity
        }
    }) 
  return (
    <Animated.View style={opacityFadingStyles}>
      <SafeAreaView />
      <View style={homeStyles.flexRowBetween}>
        <View style={homeStyles.flexRowGap}>
            <Icon
             name="location-sharp"
             color={textColor}
             iconFamily="Ionicons"
            size={32}
            />
            <View>
                <TouchableOpacity style={homeStyles.flexRow}>
                <CustomText variant="h5" color={textColor} fontFamily="Okra-Bold">
                    Erangle, Pochinki
                </CustomText>
                <Icon
                 name="location"
                 color={textColor}
                 iconFamily="Ionicons"
                 size={18}
                 />
                 </TouchableOpacity>
                 <CustomText color={textColor} fontFamily="Okra-Medium">
                    Mumabai Borivali fnk
                 </CustomText>
            </View>
        </View>

      </View>
    </Animated.View>
  )
}

export default LocationHeader