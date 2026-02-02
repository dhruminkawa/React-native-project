import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch } from '@states/reduxHook';
import { addCustomizableItem } from '@states/reducers/cartSlice';
import { modelStyles } from '@unistyles/modelStyles';
import CustomText from '@components/global/CustomText';
import Icon from '@components/global/Icon';
import { Colors } from '@unistyles/Constants';
 
function transformSelectedOptions(
  selectedOption:any,
  customizationOptions: any,
){
  return Object.entries(selectedOption).map(([type, index]) => {
    const customization = customizationOptions?.find(
      (option: any) => option.type === type,
    );
    if(!customization || !customization?.options[index as number]) {
      throw new Error(`Invalid Customization type or index for  ${type}`);
    }
    return{
      type,
      selectedOption:customization?.options[index as number],
    };
  })
}
 
 
 
const AddItemModal: FC<{ item: any; restaurant: any; onClose: () => void }> = ({
  item,
  restaurant,
  onClose,
}) => {
 
  const dispatch = useAppDispatch()
  type DataType = {
  quantity: number;
  price: number;
  selectedOption: Record<string, number>;
}
 
 
  const [data, setData] = useState({
    quantity: 1,
    price: item?.price,
    selectedOption: {} as Record<string, number>
  })
 
  useEffect(() => {
    const defaultSelectionOption: Record<string, number> = {}
 
    let initialPrice = item?.price || 0
 
    item?.customizationOptions?.forEach((customization: any) => {
      if (customization?.required) {
        const defaultOptionIndex = customization?.options?.findIndex(
          (option: any) => option?.price === 0,
        );
        if (defaultOptionIndex !== -1) {
          defaultSelectionOption[customization.type] = defaultOptionIndex;
          initialPrice += customization?.options[defaultOptionIndex]?.price || 0;
        }
      }});
 
    setData(prevData => ({
      ...prevData,
      selectedOption: defaultSelectionOption,
      price: initialPrice,
    }));
 
  }, [item]);
 
  const calculatePrice = (
    quantity: number,
    selectedOption: Record<string, number>
  ) => {
    const  basePrice = item?.price || 0;
    let customizationPrice = 0;
 
    Object.keys(selectedOption).forEach(type => {
      const  optionIndex = selectedOption[type];
      const optionPrice = item?.customizationOptions?.find((c:any) => c.type === type)?.options?.[optionIndex]?.price || 0;
      customizationPrice = optionPrice;
    });
    return ( basePrice + customizationPrice) * quantity;  
  };
 
  const selectOptionHandler = (type: string, index: number) => {
    setData(prevData => {
      const updatedSelectedOption = {...prevData.selectedOption, [type]: index};
      const updatedPrice = calculatePrice(
        prevData?.quantity,
        updatedSelectedOption,
      );
 
      return{
        ...prevData,
        selectedOption: updatedSelectedOption,
        price: updatedPrice,
      }
    })
  }
 
 
  const addCartHandler = () => {
    setData(prevData => ({
      ...prevData,
      quantity: prevData?.quantity + 1,
      price: calculatePrice(prevData?.quantity + 1, prevData?.selectedOption)
    }))
  }
 
  const removeCartHandler = () => {
    if(data?.quantity> 1){
      setData(prevData => ({
 
        ...prevData,
        quantity: prevData?.quantity - 1,
        price: calculatePrice(prevData?.quantity - 1, prevData?.selectedOption)
      }));
    } else {
      onClose();
    }
  };
 
 
  const addItemIntoCart = async () => {
    const customizationOptions = transformSelectedOptions(
      data?.selectedOption,
      item?.customizationOptions,
    ).sort((a,b) => a.type.localeCompare(b.type));
 
    const customizedData = {
      restaurant: restaurant,
      item:item,
      customizations: {
        quantity: data?.quantity,
        price: data?.price,
        customizationOptions: customizationOptions,
      },
    };
 
    dispatch(addCustomizableItem(customizedData));
    onClose();
  }
 
 
 
 
 
 
  return (
    <View  style={modelStyles.headerContainer}>
      <View style={modelStyles.flexRowGap}>
        <Image  source={{uri: item?.image}}
        style={modelStyles.headerImage}/>
        <CustomText fontFamily='Okra-Medium' fontSize={12}>
          {item?.name}
        </CustomText>
      </View>
 
      <View style={modelStyles.flexRowGap}>
        <TouchableOpacity style={modelStyles.icon}>
          <Icon
          name='bookmark-outline'
          iconFamily='Ionicons'
          color={Colors.primary}
          size={16}
          />
        </TouchableOpacity>
       
      </View>
     
     
    </View>
  )
}
 
export default AddItemModal
 
 