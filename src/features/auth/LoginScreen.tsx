// import { View, Text, StatusBar, Platform, Image, Animated } from 'react-native';
// import React, { FC, useState } from 'react';
// import { loginStyles } from '@unistyles/authStyles';
// import CustomText from '@components/global/CustomText';
// import PhoneInput from '@components/ui/PhoneInput';

// const LoginScreen: FC = () => {
//     const [phone, setPhone] =useState('')
//     const
//   return (
//     <View style={loginStyles.container}>
//       <StatusBar hidden={Platform.OS !== 'android'} />

//       <Image
//         source={require('@assets/images/login.png')}
//         style={loginStyles.cover}
//       />

//       <Animated.ScrollView
//         bounces={false}
//         keyboardShouldPersistTaps="handled"
//         keyboardDismissMode="on-drag"
//         contentContainerStyle={loginStyles.bottomContainer}
//       >
//        <CustomText fontFamily="Okra-Bold" variant='h2' style={loginStyles.title} >
//         India's Best Food Delivery App
//        </CustomText>
 
       
//         <View
//           style={{
//             width: '100%',
//             flexDirection: 'row',
//             alignItems: 'center',
//             justifyContent: 'center',
//             marginVertical: 20,
//           }}
//         >
//           <View
//             style={{
//               flex: 1,
//               height: 1,
//               backgroundColor: '#000',
//               opacity: 0.3,
//             }}
//           />

//           <Text
//             style={{
//               marginHorizontal: 10,
//               color: '#000',
//               fontWeight: '600',
//             }}
//           >
//             Login in or Sign Up
//           </Text>

//           <View
//             style={{
//               flex: 1,
//               height: 1,
//               backgroundColor: '#000',
//               opacity: 0.3,
//             }}
//           />
//         </View>
       
//       </Animated.ScrollView>
//     </View>
//   );
// };

// export default LoginScreen;




import {
  View,
  Text,
  StatusBar,
  Platform,
  Image,
  Animated,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { FC, useState } from 'react';
import { loginStyles } from '@unistyles/authStyles';
import CustomText from '@components/global/CustomText';

const LoginScreen: FC = () => {
  const [phone, setPhone] = useState('');

  return (
    <View style={loginStyles.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />

      <Image
        source={require('@assets/images/login.png')}
        style={loginStyles.cover}
      />

      <Animated.ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={loginStyles.bottomContainer}
      >
        <CustomText fontFamily="Okra-Bold" variant="h2" style={loginStyles.title}>
          India's Best Food Delivery App
        </CustomText>

        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: '#000',
              opacity: 0.3,
            }}
          />

          <Text
            style={{
              marginHorizontal: 10,
              color: '#000',
              fontWeight: '600',
            }}
          >
            Log in or Sign up
          </Text>

          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: '#000',
              opacity: 0.3,
            }}
          />
        </View>

        <View
          style={{
            width: '100%',
            marginBottom: 16,
          }}
        >
          <TextInput
            value={phone}
            onChangeText={setPhone}
            placeholder="Enter mobile number"
          />
        </View>

        
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            width: '100%',
            height: 52,
            backgroundColor: '#FC8019',
            borderRadius: 8,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}
        >
          <CustomText color="#fff" fontFamily="Okra-Medium" variant="h5">
            Continue
          </CustomText>
        </TouchableOpacity>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: 20,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: '#000',
              opacity: 0.3,
            }}
          />

          <Text
            style={{
              marginHorizontal: 10,
              color: '#000',
              fontWeight: '600',
            }}
          >
              or  
          </Text>

          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: '#000',
              opacity: 0.3,
            }}
          />
        </View>
      </Animated.ScrollView>
      <View style={loginStyles.footerText}>
        <CustomText>By continuing, you agree to our</CustomText>
         <View style={loginStyles.footerText}>
            <CustomText>Terms of Services</CustomText>
         </View>
      </View>
    </View>
  );
};

export default LoginScreen;




