import { View, Text, Image, ScrollView, FlatList } from 'react-native'
import React from 'react'
import ScalePress from '@components/ui/ScalePress'
import { cardStyles } from '@unistyles/cardStyles'
import { regularFoodData } from '@utils/dummyData'

const RegularFoodList = () => {
  const renderItem = ({item}: any) => {
    return (
      <ScalePress style={cardStyles.itemContainer}>
        <Image source={{ uri: item?.imageUrl}} style={cardStyles.regularFoodImage} />
      </ScalePress>
    )
  }
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <FlatList
          numColumns={Math.ceil(regularFoodData?.length /2)}
          data={regularFoodData}
          renderItem={renderItem}
          scrollEnabled={false}
          keyExtractor={item => item?.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={cardStyles.listContainer}
          style={cardStyles.regularFoodContainer}
          />
    </ScrollView>
  )
}

export default RegularFoodList