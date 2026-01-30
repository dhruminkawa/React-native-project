import { View, Text, Platform } from 'react-native'
import React, { FC } from 'react'
import { useRoute } from '@react-navigation/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import CustomSafeAreaView from '@components/global/CustomSafeAreaView';
import { restaurantHeaderStyles } from '@unistyles/restuarantStyles';
import SortingAndFilters from '@components/home/SortingAndFilter';
import { restaurantsItemfiltersOption } from '@utils/dummyData';

const RestaurantScreen:FC = () => {
  const route = useRoute() as any;
  const restaurant = route?.params?.item
  const insets = useSafeAreaInsets();
  return (
    <>
    <View style={{height: Platform.OS === 'android' ? insets.top : 0}} />
    <CustomSafeAreaView>
      <View style={restaurantHeaderStyles.sortingContainer}>
        <SortingAndFilters
         menuTitle="Filter"
         options={restaurantsItemfiltersOption} />

      </View>
    </CustomSafeAreaView>
      
    </>
  )
}

export default RestaurantScreen