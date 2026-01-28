import { View, Text, TouchableOpacity, Pressable, Image } from 'react-native'
import React from 'react'
import { useSharedState } from '@features/tabs/SharedContext'
import Animated, { interpolate, useAnimatedStyle,} from 'react-native-reanimated'
import { SafeAreaView } from 'react-native-safe-area-context'
import { homeStyles } from '@unistyles/homeStyles'
import Icon from '@components/global/Icon'
import { Colors } from '@unistyles/Constants'
import CustomText from '@components/global/CustomText'
import RollingContent from 'react-native-rolling-bar'
import { AnimatedText } from 'react-native-reanimated/lib/typescript/component/Text'
import { useAppDispatch, useAppSelector } from '@states/reduxHook'

const searchItems: string[] = [
    'Search "chai samosa"',
    'Search "Cake "',
    'Search "ice cream"',
    'Search "Pizza"',
    'Search "Biryani"',

]

const SearchBar = () => {
    const dispatch = useAppDispatch
     const isVegMode = useAppSelector(state => state.user.isVegMode)
    const {scrollYGlobal} = useSharedState()
    const textColorAnimation = useAnimatedStyle(()=>{
         const textColor = interpolate(scrollYGlobal.value, [0, 80] , [255, 0]);
         return {
            color: `rgb(${textColor}, ${textColor},${textColor})`,
         };
    });
  return (
    <>
     
       <View style={[homeStyles.flexRowBetween,homeStyles.padding]}>
        <TouchableOpacity
            style={homeStyles.searchInputContainer}
            activeOpacity={0.8} >
           <Icon 
           iconFamily="Ionicons"
           name="search"
           color={isVegMode ? Colors.active : Colors.primary}
           size={20}
           />


           <RollingContent
           interval={3000}
           defaultStyle={false}
           customStyle={homeStyles.textContainer}
           >
            {searchItems?.map((item, index) =>{
                return (
                    <CustomText
                    fontSize={12}
                    fontFamily="Okra-Medium"
                    key={index}
                    style={homeStyles.rollingText}>
                    {item}
                    </CustomText>
                )
            })}

           </RollingContent>
             
             <Icon 
           iconFamily="Ionicons"
           name="mic-outline"
           color={isVegMode ? Colors.active : Colors.primary}
           size={20}
           />

        </TouchableOpacity>
        <Pressable
        style={homeStyles.vegMode}
        onPress={()=>{} }>
        <Animated.Text style={[textColorAnimation, homeStyles.animatedText]}>
            VEG
        </Animated.Text>
        <Animated.Text style={[textColorAnimation, homeStyles.animatedText]}>
            MODE
        </Animated.Text>

        <Image
         source={
            isVegMode
            ? require('@assets/icons/switch_on.png')
            : require('@assets/icons/switch_off.png')
        }
        style={homeStyles.switch}
        />


        </Pressable>
       </View>
    </>
  )
}

export default SearchBar