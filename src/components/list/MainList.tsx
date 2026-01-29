import { View, Text, SectionList, NativeSyntheticEvent, NativeScrollEvent, ViewToken } from 'react-native'
import React, { FC, useRef, useState } from 'react'
import ExploreSection from './ExploreSection'
import RestaurantList from './RestaurantList'
import { useSharedState } from '@features/tabs/SharedContext'
import { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { restaurantStyles } from '@unistyles/restuarantStyles'
import BackToTopButton from '@components/ui/BackToTopButton'
import { homeStyles } from '@unistyles/homeStyles'
import { filtersOption } from '@utils/dummyData'
import SortingAndFilters from '@components/home/SortingAndFilter'
import Animated from 'react-native-reanimated'

const sectionData = [
    {title: 'Explore', data: [{}], renderItem: () => <ExploreSection />},
    {title: 'Restaurants', data: [{}], renderItem: () => <RestaurantList />},
]

const MainList: FC = () => {
   const {scrollY , scrollToTop, scrollYGlobal} = useSharedState()
   const previousScrollYTopButton = useRef<number>(0)
   const prevScrollY = useRef(0)
   const sectionListRef = useRef<SectionList>(null)

   const [isRestaurantVisible, setIsRestaurantsVisible] = useState(false);
   const [isNearEnd , setIsNearEnd] = useState(false);

   const  handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>)=>{
    const currentScrollY = event?.nativeEvent?.contentOffset?.y
    const isScrollingDown = currentScrollY > prevScrollY?.current

    scrollY.value = isScrollingDown ? withTiming(1,{duration:3000}) : withTiming(0,{duration:3000})
    
    const containerHeigth = event.nativeEvent.contentSize.height;
    const layoutHeight = event?.nativeEvent?.layoutMeasurement?.height;
    const offset = event?.nativeEvent?.contentOffset?.y;

    setIsNearEnd(offset + layoutHeight >= containerHeigth - 500);
   };

   const handleScrollToTop = async () => {
    scrollToTop()
    sectionListRef.current?.scrollToLocation({
        sectionIndex:0,
        itemIndex: 0,
        animated: true,
        viewPosition: 0
    })
   }

   const backToTopStyle = useAnimatedStyle(() => {
    const isScrollingUp =
      scrollYGlobal?.value < previousScrollYTopButton.current &&
      scrollYGlobal.value > 180;

    const opacity = withTiming(
      isScrollingUp && (isRestaurantVisible || isNearEnd) ? 1 : 0,
      { duration: 300 }
    );

    const translateY = withTiming(
      isScrollingUp && (isRestaurantVisible || isNearEnd) ? 0 : 10,
      { duration: 300 }
    );

    previousScrollYTopButton.current = scrollYGlobal.value;

    return {
      opacity,
      transform: [{ translateY }],
    };
  });

  const viewabilityConfig ={
    viewAreaCoveragePercentThreshold:80,

  };
  const onViewableItemsChanged = ({
    viewableItems,
  }:  {
    viewableItems: Array<ViewToken>;
  }) => {
    const restaurantVisible = viewableItems.some(
        item => item?.section?.title === 'Restaurants' && item?.isViewable,
    );
    setIsRestaurantsVisible(restaurantVisible);
  };


  return (
    <>
    <Animated.View style={[restaurantStyles.backToTopButton, backToTopStyle]}>
        <BackToTopButton onPress={handleScrollToTop} />
    </Animated.View>
      <SectionList 
      overScrollMode='always'
      onScroll={handleScroll}
      ref={sectionListRef}
      scrollEventThrottle={16}
      sections={sectionData}
      bounces={false}
      nestedScrollEnabled
      showsVerticalScrollIndicator={false}
      keyExtractor={(item,index) => index.toString()}
      contentContainerStyle={restaurantStyles.listContainer}
      stickySectionHeadersEnabled={true}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged}
      renderSectionHeader={({section})=>{
        if (section.title !== 'Restaurants') {
            return null;
        }
        return (
            <Animated.View 
            style={[
                isRestaurantVisible || isNearEnd ? restaurantStyles.shadowBottom : null,
            ]}>
            <SortingAndFilters menuTitle="Sort" options={filtersOption} />

            </Animated.View>
        );
      }}
      
      />
    </>
  )
}

export default MainList;