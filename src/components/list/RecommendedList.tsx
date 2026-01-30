import { View, Text, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import ScalePress from '@components/ui/ScalePress'
import { navigate } from '@utils/NavigationUtils'
import { cardStyles } from '@unistyles/cardStyles'
import CustomText from '@components/global/CustomText'
import { Colors } from '@unistyles/Constants'
import CustomGradient from '@components/global/CustomGraditent'
import { recommendedListData } from '@utils/dummyData'

const RecommendedList = () => {
  const renderItem = ({ item }: any) => {
    return (
      <ScalePress
        style={cardStyles.itemContainer}
        onPress={() => {
          navigate('RestaurantScreen', {
            item: item,
          });
        }}>
        <View style={cardStyles.imageContainer}>
          <Image source={{ uri: item?.imageUrl }} style={cardStyles.itemImage} />
          {
            item?.discount && (
              <View style={cardStyles.discountContainer}>
                <CustomText
                  color={Colors.background}
                  fontSize={10}
                  fontFamily='Okra-Bold'>
                  {item?.discount}
                </CustomText>
                {item?.discountAmount && (
                  <CustomText
                    color={Colors.background}
                    fontSize={9}
                    fontFamily='Okra-Medium'>
                    {item?.discountAmount}
                  </CustomText>
                )}
                  </View>
                )}
                <TouchableOpacity style={cardStyles.bookmarkIcon}>
                  <Image
                    style={cardStyles.bookmarkIconImage}
                    source={require('@assets/icons/bookmark.png')} />
                </TouchableOpacity>
                <CustomGradient position='bottom' />
              </View>
            
        <View style={cardStyles.itemInfo}>
          <CustomText
            fontSize={10}
            color={Colors.text}
            fontFamily='Okra-Medium'
            numberOfLines={1}>
              {item?.name}
            </CustomText>
            <View style={cardStyles.flexRow}>
              <Image
                  source={require('@assets/icons/clock.png')}
                  style={cardStyles.clockIcon} />
                  <CustomText
                       fontFamily='Okra-Medium'
                       color={Colors.lightText}
                       fontSize={9}
                       numberOfLines={1}>
                        {`${item.time} : ${item?.distance}`}
                       </CustomText>

            </View>

        </View>
      </ScalePress>
    )
  }
  return (
   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    <FlatList
      numColumns={Math.ceil(recommendedListData?.length /2)}
      data={recommendedListData}
      renderItem={renderItem}
      scrollEnabled={false}
      keyExtractor={item => item?.id?.toString()}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={cardStyles.listContainer}
      style={cardStyles.recommendedContainer} 
      />
   </ScrollView>
  )
}

export default RecommendedList