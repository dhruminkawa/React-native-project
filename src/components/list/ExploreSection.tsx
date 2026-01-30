import { View, Text, Pressable } from 'react-native'
import React, { useState } from 'react'
import { homeStyles } from '@unistyles/homeStyles'
import CustomText from '@components/global/CustomText'
import { Colors } from '@unistyles/Constants'
import RecommendedList from './RecommendedList'
import BreakerText from '@components/ui/BreakerText'
import RegularFoodList from './RegularFoodList'

const ExploreSection = () => {
  const [tabSelected, setSelectedTab] = useState(1)
  
  return (
    <View style={homeStyles.topHidingContainer}>
      <View style={homeStyles.flexRowCenter}>
        <Pressable style={homeStyles.leftTab(tabSelected===1)} onPress={()=>setSelectedTab(1)}>
          <CustomText color={tabSelected == 1 ? Colors.text : Colors.lightText}
          fontFamily="Okra-Medium">Recommend</CustomText>

        </Pressable>

        <Pressable style={homeStyles.rightTab(tabSelected==2)} onPress={()=>setSelectedTab(2)}>
          <CustomText color={tabSelected == 2 ? Colors.text : Colors.lightText}
          fontFamily="Okra-Medium">Collection</CustomText>

        </Pressable>

      </View>

      <RecommendedList />
      <BreakerText text="WHAT'S ON YOUR MIND" />
       <RegularFoodList />
      <BreakerText text="ALL RESTAURANTS" />
      
    </View>
  )
}

export default ExploreSection