import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { restaurantHeaderStyles } from '@unistyles/restuarantStyles'
import { goBack } from '@utils/NavigationUtils'
import Icon from '@components/global/Icon'
import CustomText from '@components/global/CustomText'

const RestaurantHeader:FC<{title: string}> = ({title}) => {

  return (
    <View style={restaurantHeaderStyles.headerContainer}>
        <View style={restaurantHeaderStyles.flexRowGap}>
            <TouchableOpacity onPress={() => goBack()}>
                <Icon
                 name='arrow-back'
                 iconFamily='Ionicons'
                 size={24} />
            </TouchableOpacity>

            <View>
                <CustomText
                    fontFamily='Okra-Medium'
                    fontSize={9.5}
                     style={restaurantHeaderStyles.title}>
                        {title}
                    </CustomText>
                    <CustomText fontFamily='Okra-Bold' fontSize={11}>
                        Recommend for you
                    </CustomText>


            </View>
        </View>
        <TouchableOpacity onPress={() => {}}>
            <Icon name='ellipsis-vertical-sharp' iconFamily='Ionicons' size={24} />
        </TouchableOpacity>
      
    </View>
  )
}

export default RestaurantHeader