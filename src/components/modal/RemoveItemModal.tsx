import { View, Text, ScrollView } from 'react-native'
import React, { FC, useEffect } from 'react'
import { useAppSelector } from '@states/reduxHook';
import { selectRestaurantCartItem } from '@states/reducers/cartSlice';
import { modelStyles } from '@unistyles/modelStyles';
import CustomText from '@components/global/CustomText';
import MiniFoodCard from '@components/restaurant/MiniFoodCard';

const RemoveItemModal:FC<{
  item:any;
  restaurant:any;
  closeModal: () => void;
}> = ({item, restaurant, closeModal}) => {
  const cartItem = useAppSelector(
    selectRestaurantCartItem(restaurant?.id, item?.id),
  );

  useEffect(() => {
    if (!cartItem){
      closeModal();
    }
  }, [cartItem]);
  return (
    <View>
      <View style={modelStyles.noShadowHeaderContainer}>
        <View style={modelStyles.flexRowGap}>
          <CustomText fontFamily='Okra-Bold' fontSize={13}>
            Customization for {item?.name}
          </CustomText>
        </View>

      </View>
      <ScrollView 
          contentContainerStyle={modelStyles?.scrollContainerWhiteBackground}>
            {cartItem?.customizations?.map((cus, index) => {
              return (
                <MiniFoodCard
                   item={item}
                   cus={cus}
                   key={cus?.id}
                   restaurant={restaurant}
                />
              )
            })}
          </ScrollView>
    </View>
  )
}

export default RemoveItemModal