import { View, Text, TouchableOpacity } from 'react-native'
import React, { FC, memo, useCallback, useRef } from 'react'
import { homeStyles } from '@unistyles/homeStyles';
import { foodStyles } from '@unistyles/foodStyles';
import CustomText from '@components/global/CustomText';
import { Colors } from '@unistyles/Constants';
import  AnimatedNumbers from 'react-native-animated-numbers'
import ScalePress from '@components/ui/ScalePress';
import Icon from '@components/global/Icon';
import { RFValue } from 'react-native-responsive-fontsize';
import { useAppDispatch, useAppSelector } from '@states/reduxHook';
import { addItemToCart, removeCustomizableItem, removeItemFromCart, selectRestaurantCartItem } from '@states/reducers/cartSlice';
import CustomModal from '@components/modal/CustomModal';
import AddItemModal from '@components/modal/AddItemModal';
import RepeatItemModal from '@components/modal/RepeatItemModal';
import RemoveItemModal from '@components/modal/RemoveItemModal';


const AddButton:FC<{item: any; restaurant: any}> = ({item, restaurant}) => {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(
        selectRestaurantCartItem(restaurant?.id, item?.id),
    );
    const modalRef = useRef<any>(null);
    const openAddModal = () =>{
        modalRef?.current?.openModal(
            <AddItemModal
                item={item}
                onClose={() => modalRef.current?.closeModal()}
                restaurant={restaurant} />
                 
        )
    }

     const openRepeatModal = () =>{
        modalRef?.current?.openModal(
            <RepeatItemModal
                item={item}
                onOpenAddModal={openAddModal}
                closeModal={() => modalRef.current?.closeModal()}
                restaurant={restaurant} />
                 
        )
    }

    const openRemoveModal = () =>{
        modalRef?.current?.openModal(
            <RemoveItemModal
                item={item}
               
                closeModal={() => modalRef.current?.closeModal()}
                restaurant={restaurant} />
                 
        )
    }
   
    
    const addCartHandler= useCallback(()=>{
        if(item?.isCustomizable){
            if (cart !=null) {
                openRepeatModal()
                return
            }
             openAddModal()
        }else{
            dispatch(
                addItemToCart({
                    restaurant: restaurant,
                    item:{...item,customizations: []},
                }),
            )
        }
    },[dispatch,item,restaurant,cart])

    const removeCartHandler= useCallback(() =>{
        if(item?.isCustomizable){
            if (cart?.customizations && cart?.customizations?.length >1){
                openRemoveModal();
                return;
            }
            dispatch(
                removeCustomizableItem({
                    restaurant_id: restaurant?.id,
                    customizationid: cart?.customizations![0]?.id,
                    itemId:item?.id,
                }),
            );

        }else{
            dispatch(
                removeItemFromCart({restaurant_id: restaurant?.id, itemId: item?.id}),
            );

        }
    },[dispatch,item,restaurant,cart])
  return (
    <>
    <CustomModal ref={modalRef} />  
    <View style={foodStyles.addButtonContainer(cart !==null)}>
        {cart ? (
            <View style={foodStyles.selectedContainer}>
                <ScalePress onPress={removeCartHandler}>
                    <Icon
                     iconFamily='Ionicons' 
                     color='#fff' 
                     name='remove'
                     size={RFValue(13)}
                     />
                </ScalePress>
                <AnimatedNumbers
                    includeComma={false}
                    animationDuration={300}
                    animateToNumber={cart?.quantity}
                    fontStyle={foodStyles.animatedCount} 
                    />
                    <ScalePress onPress={addCartHandler}>
                        <Icon
                             iconFamily='Ionicons'
                             color='#fff'
                             name='add'
                             size={RFValue(13)}
                             />
                    </ScalePress>
            </View>
           ):(
            <TouchableOpacity onPress={addCartHandler} style={foodStyles.noSelectionContainer}
                activeOpacity={0.6}
                accessibilityLabel='Add item to cart'>
                <CustomText 
                    fontFamily='Okra-Bold'
                    variant='h5'
                    color={Colors.primary}>
                        ADD
                    </CustomText>
                    <CustomText
                    variant='h5'
                    color={Colors.primary}
                    style={foodStyles.plusSmallIcon}
                    > +
                    </CustomText>
            </TouchableOpacity>
           )
        }
        
      
             
    </View>
    {item?.isCustomizable && (
            <CustomText fontFamily='Okra-Medium' style={foodStyles.customizeText}>
                Customizable
            </CustomText>
        )}
  </>
  )

}

export default  memo(AddButton);