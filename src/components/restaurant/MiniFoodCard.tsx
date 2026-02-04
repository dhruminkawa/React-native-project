import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC, useRef } from 'react'
import { useAppDispatch, useAppSelector } from '@states/reduxHook';
import { addCustomizableItem, removeCustomizableItem, selectRestaurantCart, selectRestaurantCartItem } from '@states/reducers/cartSlice';
import EditItemModal from './EditItemModal';
import CustomModal from '@components/modal/CustomModal';
import { modelStyles } from '@unistyles/modelStyles';
import CustomText from '@components/global/CustomText';
import Icon from '@components/global/Icon';
import { Colors } from '@unistyles/Constants';
import { RFValue } from 'react-native-responsive-fontsize';
import AnimatedNumber from 'react-native-animated-numbers';

const MiniFoodCard:FC<{
    item: any;
    cus: any;
    restaurant:any;
}> = ({cus, restaurant, item}) => {
    const dispatch = useAppDispatch();
    const cartItem = useAppSelector(
        selectRestaurantCartItem(restaurant?.id, item?.id),
    );
    const modalRef = useRef<any>(null);
    const openEditModal = () => {
  modalRef?.current?.openModal(
    (
      <EditItemModal
        item={item}
        cus={cus}
        restaurant={restaurant}
        onClose={() => modalRef?.current?.closeModal()}
      />
    )
  );
};

 
     const addCartHandler = (cus:any) => {
        const data = {
            restaurant: restaurant,
            item: item,
            customizations:{
                quantity:1,
                price: cus?.price,
                customizationOptions: cus?.customizationOptions,
            }
        };
        dispatch(addCustomizableItem(data));
     };

     const removeCartHandler = (cus: any) => {
        dispatch(
            removeCustomizableItem({
                restaurant_id: restaurant?.id,
                customizationId: cus?.id,
                itemId: item?.id,
            })
        )
     }


  return (
    <>
    <CustomModal ref={modalRef} />
    <View style={modelStyles.flexRowItemBaseline}>
        <View style={modelStyles.flexRowGapBaseline}>
            <Image 
             style={modelStyles.vegIcon}
             source={
                cartItem?.isVeg
                ? require('@assets/icons/veg.png')
                : require('@assets/icons/non_veg.png')
             }
             />
             <View>
                <CustomText fontFamily='Okra-Bold'>{cartItem?.name}</CustomText>
                <CustomText fontFamily='Okra-Medium'>{cus?.price}</CustomText>
                <CustomText style={modelStyles.selectedOptions}>
                    {cus?.customizationOptions?.map((i: any, idx:number) =>{
                        return (
                            <CustomText key={idx} fontFamily='Okra-Medium' fontSize={12}>
                                {i?.selectedOption?.name}
                            </CustomText>
                        )
                    })}
                </CustomText>

                <TouchableOpacity style={modelStyles.flexRow} onPress={openEditModal}>
                    <CustomText fontFamily='Okra-Medium' color='#444' fontSize={12}>
                        Edit
                    </CustomText>
                    <View style={{bottom: -1}}>
                        <Icon
                          name='arrow-right'
                          iconFamily='MaterialIcons'
                          color='#888'
                          size={16}
                          />
                    </View>
                </TouchableOpacity>
             </View>
        </View>
           <View style={modelStyles.cartOperationContainer}>
            <View style={modelStyles.miniAddButtonContainer}>
                <TouchableOpacity onPress={() => removeCartHandler(cus)}>
                    <Icon 
                      iconFamily='Ionicons'
                      color={Colors.active}
                      name='remove'
                      size={RFValue(12)}
                    />

                </TouchableOpacity>
                <AnimatedNumber
                  includeComma={false}
                  animationDuration={300}
                   fontStyle={modelStyles.miniAnimatedCount}
                   animateToNumber={cus?.quantity}
                   />
                   <TouchableOpacity onPress={() => addCartHandler(cus)}>
                    <Icon 
                       iconFamily='Ionicons'
                       color={Colors.active}
                       name='add'
                       size={RFValue(12)}
                       />
                   </TouchableOpacity>

            </View>
            <CustomText fontFamily='Okra-Medium'>₹{cus?.cartPrice}</CustomText>
           </View>
    </View>
    </>
  )
}

export default MiniFoodCard









// import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { FC, useRef } from 'react'
// import { useAppDispatch, useAppSelector } from '@states/reduxHook';
// import { addCustomizableItem, removeCustomizableItem, selectRestaurantCartItem } from '@states/reducers/cartSlice';
// import EditItemModal from './EditItemModal';
// import CustomModal from '@components/modal/CustomModal';
// import { modelStyles } from '@unistyles/modelStyles';
// import CustomText from '@components/global/CustomText';
// import Icon from '@components/global/Icon';
// import { Colors } from '@unistyles/Constants';
// import { RFValue } from 'react-native-responsive-fontsize';
// import AnimatedNumber from 'react-native-animated-numbers';
 
// const MiniFoodCard: FC<{
//     item: any;
//     cus: any;
//     restaurant: any;
// }> = ({ cus, restaurant, item }) => {
 
//     const dispatch = useAppDispatch();
//     const cartItem = useAppSelector(
//         selectRestaurantCartItem(restaurant?.id, item?.id)
//     );
 
//     const modalRef = useRef<any>(null);
//     const openEditModal = () => {
//         modalRef?.current?.openModal(
//             <EditItemModal
//                 item={item}
//                 cus={cus}
//                 restaurant={restaurant}
//                 onClose={() => modalRef?.current?.closeModal()}
//             />
//         )
//     }
 
//     const addCartHandler = (cus: any) => {
//         const data = {
//             restaurant: restaurant,
//             item: item,
//             customizations: {
//                 quantity: 1,
//                 price: cus?.price,
//                 customizationOptions: cus?.customizationOptions,
//             },
//         };
 
//         dispatch(addCustomizableItem(data));
 
//     };
 
//     const removeCartHandler = (cus: any) => {
//         dispatch(
//             removeCustomizableItem({
//                 restaurant_id: restaurant?.id,
//                 customizationId: cus?.id,
//                 itemId: item?.id,
//             }),
//         );
//     };
 
 
 
 
//     return (
//         <>
//             <CustomModal ref={modalRef} />
//             <View style={modelStyles.flexRowItemBaseline}>
//                 <View style={modelStyles.flexRowGapBaseline}>
//                     <Image
//                         source={
//                             cartItem?.isVeg
//                                 ? require('@assets/icons/veg.png')
//                                 : require('@assets/icons/non_veg.png')
//                         }
//                         style={modelStyles.vegIcon}
//                     />
 
//                     <View>
//                         <CustomText fontFamily='Okra-Bold' fontSize={15}>{cartItem?.name}</CustomText>
//                         <CustomText fontFamily='Okra-Medium' fontSize={15}>₹{cus?.cartPrice}</CustomText>
//                         <CustomText style={modelStyles.selectedOptions}>{cus?.customizationOptions?.map((i: any, idx: number) => {
//                             return (
//                                 <CustomText
//                                     key={idx}
//                                     fontFamily='Okra-Medium'
//                                     fontSize={12}
//                                 >
//                                     {i?.selectedOption?.name},
//                                 </CustomText>
//                             );
//                         })}
//                         </CustomText>
 
//                         <TouchableOpacity style={modelStyles.flexRow} onPress={openEditModal}>
//                             <CustomText fontFamily='Okra-Medium' color='#444' fontSize={12}>Edit</CustomText>
//                             <View style={{ paddingLeft: 8 }}>
//                                 <Icon
//                                     name='angle-right'
//                                     iconFamily='FontAwesome'
//                                     color='#686868'
//                                     size={21}
//                                 />
//                             </View>
//                         </TouchableOpacity>
 
 
//                     </View>
//                 </View>
 
 
//                 <View style={modelStyles.cartOperationContainer}>
//                     <View style={modelStyles.miniAddButtonContainer}>
//                         <TouchableOpacity onPress={() => removeCartHandler(cus)}>
//                             <Icon
//                                 iconFamily='Ionicons'
//                                 color={Colors.active}
//                                 name='remove'
//                                 size={RFValue(13)}
//                             />
//                         </TouchableOpacity>
//                         <AnimatedNumber
//                             includeComma={false}
//                             animationDuration={300}
//                             fontStyle={modelStyles.miniAnimatedCount}
//                             animateToNumber={cus?.quantity}
//                         />
//                         <TouchableOpacity onPress={()=> addCartHandler(cus)}>
//                             <Icon
//                                 iconFamily='Ionicons'
//                                 color={Colors.active}
//                                 name='add'
//                                 size={RFValue(13)}
//                             />
//                         </TouchableOpacity>
//                     </View>
//                     {/* <CustomText fontFamily='Okra-Medium'> {cus?.cartPrice} </CustomText> */}
//                 </View>
 
 
//             </View>
//         </>
//     )
// }
 
// export default MiniFoodCard
 
// const styles = StyleSheet.create({})
 