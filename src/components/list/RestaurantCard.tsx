import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import ScalePress from '@components/ui/ScalePress'
import { navigate } from '@utils/NavigationUtils'
import { restaurantStyles } from '@unistyles/restuarantStyles'
import { cardStyles } from '@unistyles/cardStyles'
import CustomText from '@components/global/CustomText'
import StarRating from '@components/ui/StarRating'
import DottedLine from './DottedLine'

const RestaurantCard:FC<{item: any}>= ({item}) => {
    
  return (
    <ScalePress
          onPress={() => {
            navigate('RestaurantScreen',{
                item: item
            })
          }}>
       <View style={restaurantStyles.card}>
           <View>
               <Image source={{uri: item?.imageUrl}} style={restaurantStyles.image}  />
           </View>
           <View style={restaurantStyles.info}>
            <View style={restaurantStyles.textContainer}>
                <View style={restaurantStyles.textPart}>
                    <CustomText
                    variant='h5'
                    style={restaurantStyles.name}
                    numberOfLines={1}
                    fontFamily='Okra-Bold'>
                        {item?.name}
                    </CustomText>
                    <CustomText>
                        {item.time} . {item?.distance} . ₹150 for one

                    </CustomText>
                </View>
                <StarRating rating={item?.rating} />
                     
            </View>
            <DottedLine />
            {item?.discount && (
                <CustomText>
                    {item.discount}{' '}
                    {item?.discount && `. ${item?.discountAmount}`}
                    </CustomText>
            )}
           </View>
       </View>
      
    </ScalePress>
  )
}

export default RestaurantCard