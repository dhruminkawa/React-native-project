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
 




import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store';
import { v4 as uuidv4 } from 'uuid';
 
 
import RestaurantCard from '@components/list/RestaurantCard';
 
 
interface CartItem {
    isVeg: boolean;
    id: string;
    name: string;
    price: number;
    quantity: number;
    cartPrice?: number;
    isCustomizable?: boolean;
    customizations?: any[];
}
 
interface RestaurantDetails {
    id: string;
    name: string;
    discount: string;
    discountAmount: string;
    time: string;
    distance: string;
    rating: number;
    imageUrl: string;
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
        addItemToCart: (
            state,
            action: PayloadAction<{
                restaurant: RestaurantDetails;
                item: CartItem;
            }>,
        ) => {
            const { restaurant, item } = action.payload
            const existingRestaurantCart = state.carts.find(cart => cart?.restaurant?.id === restaurant?.id);
            if (existingRestaurantCart) {
                const existingItem = existingRestaurantCart?.items?.find(cartItem => cartItem?.id === item?.id);
                if (existingItem) {
 
                    existingItem.quantity += 1;
                    existingItem.cartPrice = (existingItem.cartPrice || 0) + existingItem?.price
 
                } else {
                    existingRestaurantCart?.items?.push({
                        ...item,
                        quantity: 1,
                        cartPrice: item?.price,
                    });
                }
            } else {
                state.carts.push({
                    restaurant,
                    items: [{ ...item, quantity: 1, cartPrice: item?.price }]
                })
            }
 
        },
 
        removeItemFromCart: (
            state,
            action: PayloadAction<{
                restaurant_id: string;
                itemId: string;
            }>,
        ) => {
            const { itemId, restaurant_id } = action?.payload;
            const RestaurantCart = state?.carts?.find(
                cart => cart?.restaurant?.id === restaurant_id,
            );
            if (!RestaurantCart) return;
 
            const itemIndex = RestaurantCart.items?.findIndex(item => item?.id === itemId)
 
            if (itemIndex !== -1) {
                const item = RestaurantCart?.items[itemIndex]
                if (item.quantity > 1) {
                    item.quantity -= 1;
                    item.cartPrice = (item.cartPrice || 0) - item?.price
                } else {
                    RestaurantCart.items.splice(itemIndex, 1)
                }
            }
 
            if (RestaurantCart.items.length === 0) {
                state.carts = state.carts.filter(
                    cart => cart.restaurant.id !== restaurant_id,
                );
            }
        },
 
        addCustomizableItem: (
            state,
            action: PayloadAction<{
                restaurant: RestaurantDetails;
                item: CartItem;
                customizations: {
                    quantity: number;
                    price: number;
                    customizationOptions: any[]
                }
            }>
        ) => {
 
            const { restaurant, item, customizations } = action.payload
            const existingRestaurantCart = state.carts.find(
                cart => cart.restaurant.id === restaurant.id,
            );
 
            if (existingRestaurantCart) {
                const existingItem = existingRestaurantCart?.items?.find(
                    cartItem => cartItem?.id === item?.id,
                ) as any;
 
                // If exisiting item - find it
                if (existingItem) {
                    const existingCustomizationIndex = existingItem?.customizations?.findIndex(
                        (cust: any) =>
                            JSON.stringify(cust.customizationOptions) ===
                            JSON.stringify(customizations.customizationOptions),
                    );
 
                    // then the item found
                    if (
                        existingCustomizationIndex !== undefined &&
                        existingCustomizationIndex !== -1
                    ) {
                        // customized it
                        const existingCustomization = existingItem?.customizations[existingCustomizationIndex];
                        existingCustomization.quantity += customizations?.quantity;
                        existingCustomization.cartPrice += customizations?.price;
                    } else {
                        // if not then push it
                        // const newCustomizationId = uuid();
                        const newCustomizationId = uuidv4();
                        existingItem?.customizations?.push({
                            id: newCustomizationId,
                            ...customizations,
                            quantity: customizations?.quantity,
                            cartPrice: customizations?.price,
                            price: customizations?.price / customizations?.quantity
                        })
                    }
 
                    // after push update the quantity and price
                    existingItem.quantity += customizations?.quantity
                    existingItem.cartPrice = (existingItem?.cartPrice || 0) + customizations?.price
 
 
 
                } else {
 
                    const newCustomizationId = `c1`;
                    existingRestaurantCart.items.push({
                        ...item,
                        quantity: customizations.quantity,
                        cartPrice: customizations?.price,
                        customizations: [
                            {
                                id: newCustomizationId,
                                ...customizations,
                                quantity: customizations.quantity,
                                cartPrice: customizations.price,
                                price: customizations.price / customizations.quantity
                            }
                        ]
                    })
                }
            } else {
                const newCustomizationId = `c1`;
                state.carts.push({
                    restaurant,
                    items: [
                        {
                            ...item,
                            quantity: customizations.quantity,
                            cartPrice: customizations?.price,
                            customizations: [
                                {
                                    id: newCustomizationId,
                                    ...customizations,
                                    quantity: customizations.quantity,
                                    cartPrice: customizations.price,
                                    price: customizations.price / customizations.quantity
                                }
                            ]
                        }
                    ]
                })
            }
 
 
 
        },
 
        removeCustomizableItem: (
            state,
            action: PayloadAction<{
                restaurant_id: string;
                itemId: string;
                customizationId: string
            }>
        ) => {
 
            const { restaurant_id, itemId, customizationId } = action.payload;
            const restaurantCart = state?.carts?.find(
                cart => cart?.restaurant?.id === restaurant_id,
            );
 
            if (!restaurantCart) return;
            const item = restaurantCart?.items?.find(
                cartItem => cartItem?.id === itemId,
            );
            if (!item) return;
            const customizationIndex = item?.customizations?.findIndex(
                cust => cust?.id === customizationId,
            ) as number;
 
            // find customization
            if (customizationIndex !== -1 && item?.customizations) {
                const customization = item.customizations[customizationIndex];
                // Removing (-) the quantity and cartPrice of  specific customization
                if (customization?.quantity > 1) {
                    customization.quantity -= 1;
                    customization.cartPrice -= customization?.price;
                } else {
                    // if the quantity is already one so it will remove completely
                    item?.customizations?.splice(customizationIndex, 1);
                }
 
                item.quantity -= 1;
                item.cartPrice = (item.cartPrice || 0) - customization.price;
                if (item?.quantity === 0 || item?.customizations?.length === 0) {
 
                    restaurantCart.items = restaurantCart?.items?.filter(
                        cartItem => cartItem.id !== itemId,
                    );
                }
 
            }
 
 
        },
        updateCustomizableItem: (
            state,
            action: PayloadAction<{
                restaurant_id: string;
                itemId: string;
                customizationId: string;
                newCustomization: {
                    quantity: number;
                    price: number;
                    customizationOptions: any[]
                };
            }>
        ) => {
 
            const { restaurant_id, itemId, customizationId, newCustomization } = action.payload;
 
            const restaurantCart = state.carts.find(
                cart => cart.restaurant.id === restaurant_id,
            );
            if (!restaurantCart) return;
 
            const item = restaurantCart.items.find(
                cartItem => cartItem.id === itemId,
            );
            if (!item || !item.customizations) return;
 
            const matchingCustomizationIndex = item?.customizations?.findIndex(
                (cust: any) => cust?.id !== customizationId && JSON.stringify(cust.customizationOptions) === JSON.stringify(newCustomization.customizationOptions),
            );
 
            const targetCustomizationIndex = item?.customizations?.findIndex(
                cust => cust.id === customizationId,
            );
            if (targetCustomizationIndex === -1) return;
 
            const targetCustomization = item?.customizations[targetCustomizationIndex]
 
            if (matchingCustomizationIndex !== -1) {
                const matchingCustomization = item?.customizations[matchingCustomizationIndex]
 
                matchingCustomization.quantity += newCustomization?.quantity;
                matchingCustomization.cartPrice += newCustomization?.price;
 
                item?.customizations?.splice(targetCustomizationIndex, 1)
 
            } else {
 
                targetCustomization.quantity = newCustomization.quantity;
                targetCustomization.cartPrice = newCustomization.price;
                targetCustomization.price = newCustomization.price / newCustomization.quantity;
                targetCustomization.customizationOptions = newCustomization.customizationOptions
            }
 
 
            item.quantity = item?.customizations?.reduce((sum, cust) => sum + cust.quantity, 0)
            item.cartPrice = item?.customizations?.reduce((sum, cust) => sum + cust.cartPrice, 0)
 
 
        },
 
 
 
        clearAllCarts: (state) => {
            state.carts = []
        },
        clearRestaurantCart: (
            state,
            action: PayloadAction<{ restaurant_id: string }>
        ) => {
            const { restaurant_id } = action.payload
            state.carts = state.carts.filter(cart => cart?.restaurant?.id !== restaurant_id)
 
        }
 
    },
});
 
export const {
    addItemToCart,
    removeItemFromCart,
    clearAllCarts,
    clearRestaurantCart,
    addCustomizableItem,
    updateCustomizableItem,
    removeCustomizableItem,
} = cartSlice.actions
 
 
 
export const selectCart = (state: RootState) => state.cart;
 
export const selectRestaurantCart = (restaurantId: string) =>
    createSelector(
        (state: RootState) =>
            state.cart.carts.find(cart => cart.restaurant.id === restaurantId),
        RestaurantCart => (RestaurantCart ? [...RestaurantCart.items] : []),
    );
 
export const selectRestaurantCartItem = (
    restaurantId: string,
    itemId: string,
) => createSelector(
    (state: RootState) =>
        state.cart.carts.find(cart => cart.restaurant.id === restaurantId)?.items,
    items => items?.find(item => item?.id === itemId) || null,
)
 
export default cartSlice.reducer
 