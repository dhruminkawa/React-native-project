import { View, Text, Pressable, TextInput } from 'react-native'
import React, { FC } from 'react'
import { phoneStyles } from '@unistyles/phoneStyles';
import CustomText from '@components/global/CustomText';
import Icon from '@components/global/Icon';
import { Colors } from '@unistyles/Constants';


interface PhoneInputProps {
    value: string;
    onChangeText: (text: string) => void;
    onFocus?: () => void;
    onBlur?: () => void 
}

const PhoneInput: FC<PhoneInputProps>= ({
    value,
    onChangeText,
    onBlur,
    onFocus,
}) => {

    
  return (
    <View style={phoneStyles.container}>
        <Pressable style={phoneStyles.countryPickerContainer}>
            <CustomText variant='h2'>🇮🇳</CustomText>
            <Icon
             iconFamily='Ionicons'
             name='caret-down-sharp'
             color={Colors.lightText}
             size={18}
           />
        </Pressable>

        <View style={phoneStyles.phoneInputContainer}>
            <CustomText fontFamily='Okra-Bold'>+91</CustomText>
            <TextInput
             placeholder='Enter Mobile Number'
             keyboardType="phone-pad"
             value={value}
             maxLength={10}
             placeholderTextColor={Colors.lightText}
             onChangeText={onChangeText}
             onFocus={onFocus}
             onBlur={onBlur}
             style={phoneStyles.input}
 
 />
        </View>
       
    </View>
  )
}

export default PhoneInput