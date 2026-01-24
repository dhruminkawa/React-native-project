import { View, Text, Image } from 'react-native';
import React, { FC, useEffect } from 'react';
import { splashStyles } from '@unistyles/authStyles';
import Animated, { FadeInDown } from 'react-native-reanimated';
import CustomText from '@components/global/CustomText';
import { resetAndNavigate } from '@utils/NavigationUtils';


const SplashScreen: FC = () => {

  useEffect(()=>{
     const timeoutId= setTimeout(()=>{
      resetAndNavigate('LoginScreen');
     },3000)
     return ()=>clearTimeout(timeoutId)
  },[]);
  return (
    <View style={splashStyles.container}>
      {/* <Text style={splashStyles.msgText}>SplashScreen</Text> */}
      <Image
        source={require('@assets/images/logo_t.png')}
        style={splashStyles.logoImage}
      />
      <Animated.View style={splashStyles.animatedContainer}
      entering={FadeInDown.delay(400).duration(800)}
      >
        <Image
          source={require('@assets/images/tree.png')}
          style={splashStyles.treeImage}
        />
         
         <CustomText
        variant='h5'
        style={splashStyles.msgText}
        fontFamily='Okra-Medium'
        color='#fff'
         >
          From Kitchen to doorstep, your cravings, delivered!
         </CustomText>
          
          
      </Animated.View>
    </View>
  );
};

export default SplashScreen;