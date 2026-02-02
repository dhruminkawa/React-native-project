import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { foodStyles } from '@unistyles/foodStyles';
import CustomText from '@components/global/CustomText';
import Icon from '@components/global/Icon';
import { Colors } from '@unistyles/Constants';
import AddButton from './AddButton';

const FoodCard: FC <{item: any; restaurant: any}> = ({item, restaurant}) => {

  return (
    <View style={foodStyles.container}>
        <View style={foodStyles.infoContainer}>
            <Image 
               source={
                item?.isVeg
                ? require('@assets/icons/veg.png')
                : require('@assets/icons/non_veg.png')
               }
               style={foodStyles.vegIcon} />
               <CustomText fontFamily='Okra-Medium' fontSize={12} numberOfLines={1}>
                {item?.name}
               </CustomText>
               <CustomText 
                fontSize={10}
                fontFamily='Okra-Medium'
                numberOfLines={2}
                style={foodStyles.lowOpacity}>
                    {item?.description}
                </CustomText>
                <CustomText fontSize={11} numberOfLines={1} fontFamily='Okra-Medium'>
                    ₹{item?.price}
                </CustomText>

                <TouchableOpacity style={foodStyles.addToCollectionContainer}>
                    <Icon
                     name='bookmark-outline'
                     iconFamily='Ionicons'
                     size={16}
                     color={Colors.primary} />
                     <CustomText color='#888' fontFamily='Okra-Medium' fontSize={9.5}>
                        Add to Collection
                     </CustomText>
                </TouchableOpacity>
        </View>
        <View style={foodStyles.imageContainer}>
            <View style={foodStyles.image}>
                <Image source={{uri: item?.image}} style={foodStyles.foodImage} />
                <AddButton item={item} restaurant={restaurant} />
            </View>
        </View>
       
    </View>
  )
}

export default FoodCard