// import {createSelector, createSlice,PayloadAction} from "@reduxjs/toolkit"
// import type { RootState } from "@states/store";
// import {v4 as uuid} from 'uuid'

// interface CartItem {
//     isVeg: boolean;
//     id:string;
//     name:string;
//     price:number;
//     quantity:number;
//     isCustomizable?:boolean;
//     customizations?: any[];
// }

// interface RestaurantDetails {
//     id:string;
//     name:string;
//     discount:string;
//     discountAmount:string;
//     time:string;
//     distance:string;
//     rating:number;
//     imageUrl: string;
// }

// interface RestaurantCart {
//     restaurant: RestaurantDetails;
//     items:CartItem[];

// }
// interface CartState{
//     carts: RestaurantCart[];
// }

// const initialState: CartState ={
//     carts: [],

// };
// export const cartSlice = createSlice({
//     name:"cart",
//     initialState,
//     reducers: {
//         addItemToCart:(
//             state,
//             action: PayloadAction<{
//                 restaurant: RestaurantDetails;
//                 item: CartItem
//             }>
//         )=>{
//             const {restaurant, item} = action.payload
//             const existingRestaurantCart = state.carts.find(cart=>cart?.restaurant?.id === restaurant?.id);
//             if(existingRestaurantCart){
//                 const existingItem= existingRestaurantCart?.items?.find(cartItem=>cartItem?.id===item?.id);
//                 if(existingItem) {
//                     existingItem.quantity +=1;
//                     existingItem.cartPrice = (existingItem.cartPrice || 0) + existingItem?.price

//                 }else{
//                     existingRestaurantCart?.items?.push({
//                         ...item,
//                         quantity:1,
//                         cartPrice: item?.price,
//                     })
//                 }
//             }else{
//                 state.carts.push({
//                     restaurant,
//                     items: [{...item,quantity:1, cartPrice:item?.price}]
//                 })
//             }
//         },

//         removeItemFromCart: (
//             state,
//             action: PayloadAction<{
//                 restaurant_id:string;
//                 itemId: string
//             }>
//         ) => {
//              const {itemId, restaurant_id} = action?.payload;
//              const restaurantCart = state?.carts?.find(
//                 cart => cart?.restaurant?.id ===restaurant_id,
//              );
//              if(!restaurantCart) return;
//              const itemIndex = restaurantCart.items?.findIndex(item => item?.id ===itemId)

//              if(itemIndex !== -1) {
//                 const item = restaurantCart?.items[itemIndex]
//                 if(item.quantity > 1) {
//                     item.quantity -= 1;
//                     item.cartPrice = (item.cartPrice || 0) - item?.price
//                 } else {
//                     restaurantCart.items.splice(itemIndex,1)
//                 }
//              }

//              if (restaurantCart.items.length ===0) {
//                 state.carts = state.carts.filter(
//                     cart => cart.restaurant.id !== restaurant_id,
//                 );
//              }
//         },


//         clearAllCarts: (state) => {
//             state.carts = []

//         },
//         clearRestaurantCart: (
//             state,
//             action: PayloadAction<{restaurant_id: string}>

//         )=> {
//             const {restaurant_id} = action.payload
//             state.carts = state.carts.filter(cart => cart?.restaurant?.id !== restaurant_id)
//         }
//     }
// })

// export const {
//     addItemToCart,
//     removeItemFromCart,
//     clearAllCarts,
// }=cartSlice.actions;

// export const selectCart = (state: RootState) => state.cart;
// export const selectRestaurant = (restaurantId: string) =>
//     createSelector(
//         (state: RootState) =>
//             state.cart.carts.find(cart => cart.restaurant.id === restaurantId),
//         restaurantCart => (restaurantCart ? [...restaurantCart.item] : []),
//     );
// export const selectRestaurantCartItem = (
//        restaurantId:string,
//        itemId:string,    
// )  => 
//     createSelector(
//         (state:RootState) => 
//             state.cart.carts.find(cart => cart.restaurant.id === restaurantId)?.items,
//         items => items?.find(item => item?.id === itemId) || null,

//     );
 
// export default cartSlice.reducer;    


// import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store';
// import { } from 'uuid'
// import RestaurantCard from '@components/list/RestaurantCard';
 
 
// interface CartItem {
//     isVeg: boolean;
//     id: string;
//     name: string;
//     price: number;
//     quantity: number;
//     cartPrice?: number;
//     isCustomizable?: boolean;
//     customizations?: any[];
// }
 
// interface RestaurantDetails {
//     id: string;
//     name: string;
//     discount: string;
//     discountAmount: string;
//     time: string;
//     distance: string;
//     rating: number;
//     imageUrl: string;
// }
 
 
// interface RestaurantCart {
//     restaurant: RestaurantDetails;
//     items: CartItem[];
// }
 
// interface CartState {
//     carts: RestaurantCart[];
// }
 
// const initialState: CartState = {
//     carts: [],
// };
 
// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addItemToCart: (
//             state,
//             action: PayloadAction<{
//                 restaurant: RestaurantDetails;
//                 item: CartItem;
//             }>,
//         ) => {
//             const { restaurant, item } = action.payload
//             const existingRestaurantCart = state.carts.find(cart => cart?.restaurant?.id === restaurant?.id);
//             if (existingRestaurantCart) {
//                 const existingItem = existingRestaurantCart?.items?.find(cartItem => cartItem?.id === item?.id);
//                 if (existingItem) {
 
//                     existingItem.quantity += 1;
//                     existingItem.cartPrice = (existingItem.cartPrice || 0) + existingItem?.price
 
//                 } else {
//                     existingRestaurantCart?.items?.push({
//                         ...item,
//                         quantity: 1,
//                         cartPrice: item?.price,
//                     });
//                 }
//             } else {
//                 state.carts.push({
//                     restaurant,
//                     items: [{ ...item, quantity: 1, cartPrice: item?.price }]
//                 })
//             }
 
//         },
 
 
//         removeItemFromCart: (
//             state,
//             action: PayloadAction<{
//                 restaurant_id: string;
//                 itemId: string;
//             }>,
//         ) => {
//             const { itemId, restaurant_id } = action?.payload;
//             const RestaurantCart = state?.carts?.find(
//                 cart => cart?.restaurant?.id === restaurant_id,
//             );
//             if (!RestaurantCart) return;
 
//             const itemIndex = RestaurantCart.items?.findIndex(item => item?.id === itemId)
 
//             if (itemIndex !== -1) {
//                 const item = RestaurantCart?.items[itemIndex]
//                 if (item.quantity > 1) {
//                     item.quantity -= 1;
//                     item.cartPrice = (item.cartPrice || 0) - item?.price
//                 } else {
//                     RestaurantCart.items.splice(itemIndex, 1)
//                 }
//             }
 
//             if (RestaurantCart.items.length === 0) {
//                 state.carts = state.carts.filter(
//                     cart => cart.restaurant.id !== restaurant_id,
//                 );
//             }
//         },

//         addCustomizableItem: (
//             state,
//             action: PayloadAction<{
//                 restaurant: RestaurantDetails;
//                 item:CartItem;
//                 customization:{
//                     quantity:number;
//                     price:number;
//                     customizationOptions: any[]
//                 }
//             }>
//         ) =>{

//         },
//         removeCustomizableItem: (
//             state,
//             action:PayloadAction<{
//                 restaurant_id:string;
//                 itemId: string;
//                 customizationId:string;
//                 newCustomization:{
//                     quantity:number;
//                     price:number;
//                     customizationOptions: any[];
//                 }
//             }>
//         )=> {

//         },
        
//         updateCustomizableItem: (
//             state,
//             action:PayloadAction<{
//                 restaurant_id:string;
//                 itemId: string;
//                 customizationId:string
//             }
            
//         )
 
//         clearAllCarts: (state) => {
//             state.carts = []
//         },
//         clearRestaurantCart: (
//             state,
//             action: PayloadAction<{ restaurant_id: string }>
//         ) => {
//             const { restaurant_id } = action.payload
//             state.carts = state.carts.filter(cart => cart?.restaurant?.id !== restaurant_id)
 
//         }
 
//     },
// });
 
// export const {
//     addItemToCart,
//     removeItemFromCart,
//     clearAllCarts,
//     clearRestaurantCart,
//     addCustomizableItem,
//     removeCustomizableItem,
//     updateCustomizableItem
// } = cartSlice.actions
 
 
 
// export const selectCart = (state: RootState) => state.cart;
 
// export const selectRestaurantCart = (restaurantId: string) =>
//     createSelector(
//         (state: RootState) =>
//             state.cart.carts.find(cart => cart.restaurant.id === restaurantId),
//         RestaurantCart => (RestaurantCart ? [...RestaurantCart.items] : []),
//     );
 
// export const selectRestaurantCartItem = (
//     restaurantId: string,
//     itemId: string,
// ) => createSelector(
//     (state: RootState) =>
//         state.cart.carts.find(cart => cart.restaurant.id === restaurantId)?.items,
//     items => items?.find(item => item?.id === itemId) || null,
// )
 
// export default cartSlice.reducer














// import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../store';
// import {v4 as uuid } from 'uuid'
// import RestaurantCard from '@components/list/RestaurantCard';
 
 
// interface CartItem {
//     isVeg: boolean;
//     id: string;
//     name: string;
//     price: number;
//     quantity: number;
//     cartPrice?: number;
//     isCustomizable?: boolean;
//     customizations?: any[];
// }
 
// interface RestaurantDetails {
//     id: string;
//     name: string;
//     discount: string;
//     discountAmount: string;
//     time: string;
//     distance: string;
//     rating: number;
//     imageUrl: string;
// }
 
 
// interface RestaurantCart {
//     restaurant: RestaurantDetails;
//     items: CartItem[];
// }
 
// interface CartState {
//     carts: RestaurantCart[];
// }
 
// const initialState: CartState = {
//     carts: [],
// };
 
// export const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//         addItemToCart: (
//             state,
//             action: PayloadAction<{
//                 restaurant: RestaurantDetails;
//                 item: CartItem;
//             }>,
//         ) => {
//             const { restaurant, item } = action.payload;
//             const existingRestaurantCart = state.carts.find(cart => cart?.restaurant?.id === restaurant?.id);
//             if (existingRestaurantCart) {
//                 const existingItem = existingRestaurantCart?.items?.find(cartItem => cartItem?.id === item?.id);
//                 if (existingItem) {
 
//                     existingItem.quantity += 1;
//                     existingItem.cartPrice = (existingItem.cartPrice || 0) + existingItem?.price;
 
//                 } else {
//                     existingRestaurantCart?.items?.push({
//                         ...item,
//                         quantity: 1,
//                         cartPrice: item?.price,
//                     });
//                 }
//             } else {
//                 state.carts.push({
//                     restaurant,
//                     items: [{ ...item, quantity: 1, cartPrice: item?.price }]
//                 })
//             }
 
//         },
 
//         removeItemFromCart: (
//             state,
//             action: PayloadAction<{
//                 restaurant_id: string;
//                 itemId: string;
//             }>,
//         ) => {
//             const { itemId, restaurant_id } = action?.payload;
//             const restaurantCart = state?.carts?.find(
//                 cart => cart?.restaurant?.id === restaurant_id,
//             );
//             if (!restaurantCart) return;
 
//             const itemIndex = restaurantCart.items?.findIndex(item => item?.id === itemId)
 
//             if (itemIndex !== -1) {
//                 const item = restaurantCart?.items[itemIndex]
//                 if (item.quantity > 1) {
//                     item.quantity -= 1;
//                     item.cartPrice = (item.cartPrice || 0) - item?.price
//                 } else {
//                     restaurantCart.items.splice(itemIndex, 1)
//                 }
//             }
 
//             if (restaurantCart.items.length === 0) {
//                 state.carts = state.carts.filter(
//                     cart => cart.restaurant.id !== restaurant_id,
//                 );
//             }
//         },
 
//         addCustomizableItem:(
//             state,
//             action: PayloadAction<{
//                 restaurant: RestaurantDetails;
//                 item: CartItem;
//                 customization: {
//                     quantity: number;
//                     price: number;
//                     customizationOptions: any[]
//                 }
//             }>
//         ) => {
//              const {restaurant, item , customization} = action.payload
//              const  existingRestaurantCart = state.carts.find(
//                 cart => cart.restaurant.id === restaurant.id,

//              );
//              if (existingRestaurantCart){
//                 const existingItem = existingRestaurantCart?.items?.find(
//                     cartItem => cartItem?.id === item?.id,
//                 )as any;

//                 if(existingItem) {
//                     const exsitingCustomizationIndex =
//                     existingItem?.customizations?.findIndex(
//                         (cust: any) =>
//                             JSON.stringify(cust.customizationOptions) ===
//                             JSON.stringify(customization.customizationOptions),
//                     );

//                     if( 
//                         exsitingCustomizationIndex !== undefined &&
//                         exsitingCustomizationIndex !== -1
//                     ) {
//                         const exsitingCustomization = 
//                         existingItem?.customizations[exsitingCustomizationIndex];
//                         exsitingCustomization.quantity += customization?.quantity;
//                         exsitingCustomization.cartPrice += customization?.price;
//                     }else{
//                         const newCustomizationId = uuid();
//                         existingItem?.customizations?.push({
//                             id: newCustomizationId,
//                             ...customization,
//                             quantity: customization,
//                             cartPrice: customization?.price,
//                             price: customization?.price / customization?.quantity, 
//                         });
//                     }

//                     existingItem.quantity += customization?.quantity
//                     existingItem.cartPrice = (existingItem?.cartPrice || 0) + customization?.price


//                 }else{
//                      const newCustomizationId = `c1`;
//                      existingRestaurantCart.items.push({
//                          ...item,
//                              quantity: customization.quantity,
//                              cartPrice: customization?.price,  
//                              customizations:[
//                                 {
//                                      id: newCustomizationId,
//                                     ...customization,
//                                     quantity: customization?.quantity,
//                                     cartPrice: customization?.price,
//                                     price: customization.price / customization.quantity,  
 
//                                 },
//                              ],
//                      });
//                 }

//              }else{
//                 const newCustomizationId = `c1`;
//                 state.carts.push({
//                     restaurant,
//                     items: [
//                         {
//                              ...item,
//                              quantity: customization.quantity,
//                              cartPrice: customization?.price, 
//                              customizations: [
//                                 {
//                                     id: newCustomizationId,
//                                     ...customization,
//                                     quantity: customization?.quantity,
//                                     cartPrice: customization.price,
//                                     price: customization.price / customization.quantity
//                                 }
//                              ]
//                         }
//                     ]
//                 })
//              }
//         },
       
//         removeCustomizableItem: (
//             state,
//             action: PayloadAction<{
//                 restaurant_id: string;
//                 itemId: string;
//                 customizationId:string
//             }>
//         ) => {
//            const {restaurant_id,itemId, customizationId}= action.payload;
//            const restaurantCart = state?.carts?.find(
//             cart => cart?.restaurant?.id ===restaurant_id,
//            );
//            if(!restaurantCart) return;
            
//             const item = restaurantCart?.items?.find(
//                 cartItem => cartItem?.id === itemId,
//             );
//             if (!item) return;
//             const customizationIndex = item?.customizations?.findIndex(
//                 cust => cust?.id === customizationId,
//             ) as number;

//             if (customizationIndex !== -1 && item?.customizations) {
//                 const customization = item.customizations[customizationIndex];
//                 if(customization?.quantity > 1){
//                     customization.quantity -=  1;
//                     customization.cartPrice -= customization?.price;
//                 }else {
//                     item?.customizations?.splice(customizationIndex, 1);
//                 }
//                 item.quantity -=1;
//                 item.cartPrice = (item?.cartPrice || 0) - customization?.price;

//                 if (item?.quantity ===0 || item?.customizations.length ===0) {
//                     restaurantCart.items = restaurantCart?.items?.filter(
//                         cartItem => cartItem.id !== itemId,

//                     );
//                 }
//                 if (restaurantCart?.items?.length === 0) {
//                     state.carts = state.carts?.filter(
//                         cart => cart?.restaurant?.id !== restaurant_id,
//                     )
//                 }
//             }
//         },
//         updateCustomizableItem: (
//             state,
//             action: PayloadAction<{
//                 restaurant_id: string;
//                 itemId: string;
//                 customizationId: string;
//                 newCustomization: {
//                     quantity:number;
//                     price:number;
//                     customizationOptions: any[]
//                 };
//             }>
//         ) => {
//             const {restaurant_id, itemId, customizationId ,newCustomization} = action.payload;
//             const restaurantCart = state.carts.find(cart => cart.restaurant.id === restaurant_id,);
//             if (!restaurantCart) return;

//             const item = restaurantCart.items.find(
//                 cartItem => cartItem.id === itemId,
//             );
//             if (!item || !item.customizations) return;

//             const matchingCustomizationIndex = item?.customizations?.findIndex(
//                 (cust: any) =>
//                     cust?.id !== customizationId &&
//                 JSON.stringify(cust.customizationOptions) ===
//                 JSON.stringify(newCustomization.customizationOptions),
//             );
//             const targetCustomizationIndex = item?.customizations?.findIndex(
//                 cust => cust.id === customizationId
//             );
//             if (targetCustomizationIndex === -1) return;
//              const targetCustomization = item?.customizations[targetCustomizationIndex]
            
//             if (matchingCustomizationIndex !== -1) {
//                 const matchingCustomization = item.customizations[matchingCustomizationIndex]


//                 matchingCustomization.quantity += newCustomization?.quantity;
//                 matchingCustomization.cartPrice += newCustomization.price;

//                 item?.customizations?.splice(targetCustomizationIndex,1)
//             }else {
//                 targetCustomization.quantity = newCustomization.quantity;
//                 targetCustomization.cartPrice = newCustomization.price;
//                   targetCustomization.price = 
//                    newCustomization.price / newCustomization.quantity;
//                 targetCustomization.customizationOptions =
//                    newCustomization.customizationOptions;   
//             } 

//             item.quantity = item?.customizations?.reduce(
//                 (sum,cust) => sum + cust.quantity,
//                 0,
//             );
//             item.cartPrice = item?.customizations?.reduce(
//                 (sum, cust) => sum + cust.cartPrice,
//                 0,
//             )

//         },
 
       
       
//         clearAllCarts: (state) => {
//             state.carts = []
//         },
//         clearRestaurantCart: (
//             state,
//             action: PayloadAction<{ restaurant_id: string }>
//         ) => {
//             const { restaurant_id } = action.payload
//             state.carts = state.carts.filter(cart => cart?.restaurant?.id !== restaurant_id)
 
//         }
 
//     },
// });
 
// export const {
//     addItemToCart,
//     removeItemFromCart,
//     clearAllCarts,
//     clearRestaurantCart,
//     addCustomizableItem,
//     updateCustomizableItem,
//     removeCustomizableItem,
// } = cartSlice.actions
 
 
 
// export const selectCart = (state: RootState) => state.cart;
 
// export const selectRestaurantCart = (restaurantId: string) =>
//     createSelector(
//         (state: RootState) =>
//             state.cart.carts.find(cart => cart.restaurant.id === restaurantId),
//         restaurantCart => (restaurantCart ? [...restaurantCart.items] : []),
//     );
 
// export const selectRestaurantCartItem = (
//     restaurantId: string,
//     itemId: string,
// ) => createSelector(
//     (state: RootState) =>
//         state.cart.carts.find(cart => cart.restaurant.id === restaurantId)?.items,
//     items => items?.find(item => item?.id === itemId) || null,
// )
 
// export default cartSlice.reducer
 




// cartSlice.ts
import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { v4 as uuidv4 } from 'uuid';

interface CartItem {
  isVeg: boolean;
  id: string;
  name: string;
  price: number;
  quantity: number;
  cartPrice?: number;
  isCustomizable?: boolean;
  customizations?: Customization[];
}

interface Customization {
  id: string;
  quantity: number;
  price: number;
  cartPrice: number;
  customizationOptions: any[];
}

interface RestaurantDetails {
  id: string;
  name: string;
  discount?: string;
  discountAmount?: string;
  time?: string;
  distance?: string;
  rating?: number;
  imageUrl?: string;
}

interface RestaurantCart {
  restaurant: RestaurantDetails;
  items: CartItem[];
}

interface CartState {
  carts: RestaurantCart[];
}

const initialState: CartState = {
  carts: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add a simple item
    addItemToCart: (
      state,
      action: PayloadAction<{ restaurant: RestaurantDetails; item: CartItem }>
    ) => {
      const { restaurant, item } = action.payload;
      let restaurantCart = state.carts.find(c => c.restaurant.id === restaurant.id);

      if (!restaurantCart) {
        state.carts.push({ restaurant, items: [{ ...item, quantity: 1, cartPrice: item.price }] });
        return;
      }

      const existingItem = restaurantCart.items.find(i => i.id === item.id);
      if (existingItem) {
        existingItem.quantity += 1;
        existingItem.cartPrice = (existingItem.cartPrice || 0) + item.price;
      } else {
        restaurantCart.items.push({ ...item, quantity: 1, cartPrice: item.price });
      }
    },

    removeItemFromCart: (
      state,
      action: PayloadAction<{ restaurant_id: string; itemId: string }>
    ) => {
      const { restaurant_id, itemId } = action.payload;
      const restaurantCart = state.carts.find(c => c.restaurant.id === restaurant_id);
      if (!restaurantCart) return;

      const itemIndex = restaurantCart.items.findIndex(i => i.id === itemId);
      if (itemIndex === -1) return;

      const item = restaurantCart.items[itemIndex];
      if (item.quantity > 1) {
        item.quantity -= 1;
        item.cartPrice = (item.cartPrice || 0) - item.price;
      } else {
        restaurantCart.items.splice(itemIndex, 1);
      }

      if (restaurantCart.items.length === 0) {
        state.carts = state.carts.filter(c => c.restaurant.id !== restaurant_id);
      }
    },

    // Add item with customizations
    addCustomizableItem: (
      state,
      action: PayloadAction<{
        restaurant: RestaurantDetails;
        item: CartItem;
        customizations: { quantity: number; price: number; customizationOptions: any[] };
      }>
    ) => {
      const { restaurant, item, customizations } = action.payload;

      let restaurantCart = state.carts.find(c => c.restaurant.id === restaurant.id);
      if (!restaurantCart) {
        state.carts.push({
          restaurant,
          items: [
            {
              ...item,
              quantity: customizations.quantity,
              cartPrice: customizations.price,
              customizations: [
                {
                  id: uuidv4(),
                  ...customizations,
                  cartPrice: customizations.price,
                  price: customizations.price / customizations.quantity,
                },
              ],
            },
          ],
        });
        return;
      }

      let existingItem = restaurantCart.items.find(i => i.id === item.id) as CartItem | undefined;

      if (!existingItem) {
        restaurantCart.items.push({
          ...item,
          quantity: customizations.quantity,
          cartPrice: customizations.price,
          customizations: [
            {
              id: uuidv4(),
              ...customizations,
              cartPrice: customizations.price,
              price: customizations.price / customizations.quantity,
            },
          ],
        });
        return;
      }

      // Check if customization already exists
      existingItem.customizations = existingItem.customizations || [];
      const existingCustomizationIndex = existingItem.customizations.findIndex(
        c => JSON.stringify(c.customizationOptions) === JSON.stringify(customizations.customizationOptions)
      );

      if (existingCustomizationIndex !== -1) {
        const existingCustomization = existingItem.customizations[existingCustomizationIndex];
        existingCustomization.quantity += customizations.quantity;
        existingCustomization.cartPrice += customizations.price;
      } else {
        existingItem.customizations.push({
          id: uuidv4(),
          ...customizations,
          cartPrice: customizations.price,
          price: customizations.price / customizations.quantity,
        });
      }

      existingItem.quantity += customizations.quantity;
      existingItem.cartPrice = (existingItem.cartPrice || 0) + customizations.price;
    },

    removeCustomizableItem: (
      state,
      action: PayloadAction<{ restaurant_id: string; itemId: string; customizationId: string }>
    ) => {
      const { restaurant_id, itemId, customizationId } = action.payload;
      const restaurantCart = state.carts.find(c => c.restaurant.id === restaurant_id);
      if (!restaurantCart) return;

      const item = restaurantCart.items.find(i => i.id === itemId);
      if (!item || !item.customizations) return;

      const custIndex = item.customizations.findIndex(c => c.id === customizationId);
      if (custIndex === -1) return;

      const cust = item.customizations[custIndex];

      if (cust.quantity > 1) {
        cust.quantity -= 1;
        cust.cartPrice -= cust.price;
      } else {
        item.customizations.splice(custIndex, 1);
      }

      item.quantity -= 1;
      item.cartPrice = (item.cartPrice || 0) - cust.price;

      if (item.quantity <= 0 || (item.customizations && item.customizations.length === 0)) {
        restaurantCart.items = restaurantCart.items.filter(i => i.id !== itemId);
      }

      if (restaurantCart.items.length === 0) {
        state.carts = state.carts.filter(c => c.restaurant.id !== restaurant_id);
      }
    },

    updateCustomizableItem: (
      state,
      action: PayloadAction<{
        restaurant_id: string;
        itemId: string;
        customizationId: string;
        newCustomization: { quantity: number; price: number; customizationOptions: any[] };
      }>
    ) => {
      const { restaurant_id, itemId, customizationId, newCustomization } = action.payload;
      const restaurantCart = state.carts.find(c => c.restaurant.id === restaurant_id);
      if (!restaurantCart) return;

      const item = restaurantCart.items.find(i => i.id === itemId);
      if (!item || !item.customizations) return;

      const targetIndex = item.customizations.findIndex(c => c.id === customizationId);
      if (targetIndex === -1) return;

      const target = item.customizations[targetIndex];

      target.quantity = newCustomization.quantity;
      target.price = newCustomization.price / newCustomization.quantity;
      target.cartPrice = newCustomization.price;
      target.customizationOptions = newCustomization.customizationOptions;

      // Update overall item quantity and cartPrice
      item.quantity = item.customizations.reduce((sum, c) => sum + c.quantity, 0);
      item.cartPrice = item.customizations.reduce((sum, c) => sum + c.cartPrice, 0);
    },

    clearAllCarts: state => {
      state.carts = [];
    },

    clearRestaurantCart: (state, action: PayloadAction<{ restaurant_id: string }>) => {
      state.carts = state.carts.filter(c => c.restaurant.id !== action.payload.restaurant_id);
    },
  },
});

// Export actions
export const {
  addItemToCart,
  removeItemFromCart,
  addCustomizableItem,
  removeCustomizableItem,
  updateCustomizableItem,
  clearAllCarts,
  clearRestaurantCart,
} = cartSlice.actions;

// Selectors
export const selectCart = (state: RootState) => state.cart;

export const selectRestaurantCart = (restaurantId: string) =>
  createSelector(
    (state: RootState) => state.cart.carts.find(c => c.restaurant.id === restaurantId),
    cart => (cart ? [...cart.items] : [])
  );

export const selectRestaurantCartItem = (restaurantId: string, itemId: string) =>
  createSelector(
    (state: RootState) => state.cart.carts.find(c => c.restaurant.id === restaurantId)?.items,
    items => items?.find(i => i.id === itemId) || null
  );

export default cartSlice.reducer;
