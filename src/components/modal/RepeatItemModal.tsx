// import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
// import React, { FC, useEffect } from 'react'
// import { useAppSelector } from '@states/reduxHook';
// import { selectRestaurantCartItem } from '@states/reducers/cartSlice';
// import { modelStyles } from '@unistyles/modelStyles';
// import CustomText from '@components/global/CustomText';
// import { Colors } from '@unistyles/Constants';
// import MiniFoodCard from '@components/restaurant/MiniFoodCard';


// const RepeatItemModal:FC<{
//   item:any;
//   restaurant:any;
//   onOpenAddModal: () => void;
//   closeModal: () => void;
// }> = ({item, onOpenAddModal, restaurant, closeModal}) => {
//   const cartItem = useAppSelector(
//     selectRestaurantCartItem(restaurant?.id, item?.id),
//   );
   
//   useEffect(() => {
//     if (!cartItem) {
//           closeModal();
//     }
//   }, [cartItem]);
//   return (
//   <View>
//     <View style={modelStyles.noShadowHeaderContainer}>
//       <View style={modelStyles.flexRowGap}>
//         <CustomText fontFamily='Okra-Bold' fontSize={13}>
//           Repeat last used customization?
//         </CustomText>
//       </View>
//     </View>
   
//      <ScrollView 
//          contentContainerStyle={
//           modelStyles.scrollContainerWhiteBackground}>  
//           {cartItem?.customizations?.map((cus, index) => {
//             return (
//               <MiniFoodCard 
//                  item={item}
//                  cus={cus}
//                  key={index}
//                  restaurant={restaurant}
//               />
//             )
//           })}
//          </ScrollView>




//     <View style={modelStyles.noShadowFooterContainer}>
//       <TouchableOpacity onPress={onOpenAddModal}>
//         <CustomText
//           fontFamily='Okra-Bold'
//           color={Colors.active}
//           fontSize={11}>
//             + Add new customization
//           </CustomText>
//       </TouchableOpacity>

//     </View>
// </View>
//   )
// }

// export default RepeatItemModal











import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useEffect } from 'react'
import { useAppSelector } from '@states/reduxHook';
import { selectRestaurantCartItem } from '@states/reducers/cartSlice';
import { modelStyles } from '@unistyles/modelStyles';
import CustomText from '@components/global/CustomText';
import { Colors } from '@unistyles/Constants';
import MiniFoodCard from '@components/restaurant/MiniFoodCard';
import { SafeAreaView } from 'react-native-safe-area-context';
 
const RepeatItemModal: FC<{
  item: any;
  restaurant: any;
  onOpenAddModal: () => void;
  closeModal: () => void;
}> = ({ item, onOpenAddModal, restaurant, closeModal }) => {
 
  const cartItem = useAppSelector(
    selectRestaurantCartItem(restaurant?.id, item?.id),
  );
 
  useEffect(() => {
    if (!cartItem) {
      closeModal();
    }
  }, [cartItem])
 
  return (
    <>
      <View style={modelStyles.noShadowHeaderContainer}>
        <View style={modelStyles.flexRowGap}>
          <CustomText fontFamily='Okra-Bold' fontSize={13}>
            Repeat last used customization?
          </CustomText>
        </View>
      </View>
 
 
      <ScrollView
      contentContainerStyle={
        modelStyles.scrollContainerWhiteBackground
      }>
        {cartItem?.customizations?.map((cus, index)=>{
          return(
            <MiniFoodCard
            item={item}
            cus={cus}
            key={index}
            restaurant={restaurant}
            />
          )
        })}
       
       
      </ScrollView>
 
 
 
 
      <View style={modelStyles.noShadowFooterContainer}>
        <TouchableOpacity onPress={onOpenAddModal}>
          <CustomText
            fontFamily='Okra-Bold'
            color={Colors.active}
            fontSize={13}
          >
            + Add new customization
          </CustomText>
        </TouchableOpacity>
      </View>
       </>
 
  )
}
 
export default RepeatItemModal
 
 