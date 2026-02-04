import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC, useCallback } from 'react'
import { useAppDispatch } from '@states/reduxHook';
import { addItemToCart, removeItemFromCart } from '@states/reducers/cartSlice';
import { modelStyles } from '@unistyles/modelStyles';
import CustomText from '@components/global/CustomText';
import Icon from '@components/global/Icon';
import { Colors } from '@unistyles/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import AnimatedNumber from 'react-native-animated-numbers';

const NonCustomizableCard: FC<{
  item: any;
  restaurant: any;
}> = ({ restaurant, item }) => {
  const dispatch = useAppDispatch()
 

  const addCartHandler = useCallback(() => {
    dispatch(
      addItemToCart({
        restaurant: restaurant,
        item: { ...item, customisation: [] },
      })
    )
  }, [dispatch, restaurant?.id, item])

  const removeCartHandler = useCallback(() => {
    dispatch(
      removeItemFromCart({
        restaurant_id: restaurant?.id,
        itemId: item?.id,
      })
    )
  }, [dispatch, restaurant?.id, item])

  return (
    <View style={modelStyles.flexRowItemBaseline}>
        <View style={modelStyles.flexRowGapBaseline}>
            <Image 
               style={modelStyles.vegIcon}
               source={
                item?.isVeg
                  ? require('@assets/icons/veg.png')
                  : require('@assets/icons/non_veg.png')
               }
               />
               <View>
                <CustomText fontFamily='Okra-Bold'>{item?.name}</CustomText>
                <CustomText fontFamily='Okra-Bold'>{item?.price}</CustomText>
               </View>
        </View>
        <View style={modelStyles.cartOperationContainer}>
            <View style={modelStyles.miniAddButtonContainer}>
                <TouchableOpacity onPress={removeCartHandler}>
                    <Icon
                    iconFamily='Ionicons'
                    color={Colors.active}
                    name='remove'
                    size={RFValue(10)}
                    />

                </TouchableOpacity>
                <AnimatedNumber
                 includeComma={false}
                 animationDuration={300}
                 animateToNumber={item?.quantity}
                 fontStyle={modelStyles.miniAnimatedCount}
                 />
                 <TouchableOpacity onPress={addCartHandler}>
                    <Icon 
                       iconFamily='Ionicons'
                       color={Colors.active}
                       name='add'
                       size={RFValue(10)}
                       />
                 </TouchableOpacity>
            </View>
            <CustomText fontFamily='Okra-Medium'>₹{item?.cartPrice}</CustomText>
        </View>
      
    </View>
  )
}

export default NonCustomizableCard

