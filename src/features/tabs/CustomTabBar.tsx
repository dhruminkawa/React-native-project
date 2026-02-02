// import { View, Text, Animated } from 'react-native'
// import React, { FC } from 'react'
// import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
// import { useSharedState } from './SharedContext'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'
// import { useAnimatedStyle, withTiming } from 'react-native-reanimated'
// import { Colors, screenWidth } from '@unistyles/Constants'
// import { tabStyles } from '@unistyles/tabStyles'
// import ScalePress from '@components/ui/ScalePress'
// import { DeliveryTabIcon, DiningTabIcon, LiveTabIcon, ReorderTabIcon } from './TabIcon'

// const CustomTabBar:FC<BottomTabBarProps> = (props) => {
//      const {scrollY} = useSharedState();

//      const {state,navigation} = props;
//      const bottom =useSafeAreaInsets();


//      const  isLiveTabFocused = state.routes[state.index]?.name === 'Live';

//      const animatedStyle = useAnimatedStyle(() => {
//         return {
//             transform: [
//                 {
//                     translateY:
//                      scrollY.value ===1
//                      ? withTiming(100, {duration:300})
//                      : withTiming(0, {duration:300})
//                 }
//             ]
//         }
//      })

//      const indicatorStyle = useAnimatedStyle(() =>{
//         const baseLeft = 10;
//         let slideValue = state.index ==3 ? 0.23 : 0.24;
//         return {
//             left: withTiming(baseLeft + state.index * screenWidth * slideValue),
//         }
//      })

//   return (
//    <>
//     <Animated.View
//       style={[
//          tabStyles.tabBarContainer,
//          animatedStyle,
//          {
//             paddingBottom: bottom.bottom,
//             backgroundColor: isLiveTabFocused ? Colors.dark : Colors.background,
//          }

//       ]}
//     >
//         <View style={tabStyles.tabContainer}>
//             {state?.routes?.map((route,index)=>{
//     const isFocused =state.index === index;

//     const onPress =() => {
//         const event = navigation.emit({
//             type: 'tabPress',
//             target: route?.key,
//             canPreventDefault:true,
//         });
//         if (!isFocused && !event.defaultPrevented) {
//             navigation.navigate(route?.name);
//         }
//     };
//     const onLongPress =() => {
//         navigation.emit({
//             type: 'tabLongPress',
//             target: route.key,
//         });
//     };



// return(
//       <ScalePress
//       onPress={onPress}
//       onLongPress={onLongPress}
//       key={index}
//       style={[
//         tabStyles.tabItem,
//         isFocused ? tabStyles.focusedTabItem : {},
//       ]}>
//         {route?.name === 'Delivery' && (
//             <DeliveryTabIcon focused= {isFocused} />
//         )}
//          {route?.name === 'Reorder' && (
//             <ReorderTabIcon focused= {isFocused} />
//         )}
//          {route?.name === 'Dining' && (
//             <DiningTabIcon focused= {isFocused} />
//         )}
//          {route?.name === 'Live' && (
//             <LiveTabIcon focused= {isFocused} />
//         )}
//       </ScalePress>
// )
//             })}

//         </View>

//     </Animated.View>
//    </>
//   )
// }

// export default CustomTabBar





// import { View, Text } from 'react-native';  // Removed Animated import here
// import React, { FC } from 'react';
// import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
// import { useSharedState } from './SharedContext';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';  // Added Animated from reanimated
// import { Colors, screenWidth } from '@unistyles/Constants';
// import { tabStyles } from '@unistyles/tabStyles';
// import ScalePress from '@components/ui/ScalePress';
// import { DeliveryTabIcon, DiningTabIcon, LiveTabIcon, ReorderTabIcon } from './TabIcon';
// import { emptyStyles } from '@unistyles/emptyStyles';
// import { loginStyles } from '@unistyles/authStyles';

// const CustomTabBar: FC<BottomTabBarProps> = (props) => {
//   const { scrollY } = useSharedState();

//   const { state, navigation } = props;
//   const bottom = useSafeAreaInsets();

//   const isLiveTabFocused = state.routes[state.index]?.name === 'Live';

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           translateY:
//             scrollY.value === 1
//               ? withTiming(100, { duration: 300 })
//               : withTiming(0, { duration: 300 }),
//         },
//       ], 
//     };
//   });

//   const indicatorStyle = useAnimatedStyle(() => {
//     const baseLeft = 10;
//     let slideValue = state.index == 3 ? 0.23 : 0.24;
//     return {
//       left: withTiming(baseLeft + state.index * screenWidth * slideValue),
//     };
//   });

//   return (
//     <>
//       <Animated.View
//         style={[
//           tabStyles.tabBarContainer,
//           animatedStyle,
//           {
//             paddingBottom: bottom.bottom,
//             backgroundColor: isLiveTabFocused ? Colors.dark : Colors.background,
//           },
//         ]}
//       >
//         <Animated.View style={tabStyles.tabContainer}> {/* Changed View to Animated.View */}
//           {state?.routes?.map((route, index) => {
//             const isFocused = state.index === index;

//             const onPress = () => {
//               const event = navigation.emit({
//                 type: 'tabPress',
//                 target: route?.key,
//                 canPreventDefault: true,
//               });
//               if (!isFocused && !event.defaultPrevented) {
//                 navigation.navigate(route?.name);
//               }
//             };
//             const onLongPress = () => {
//               navigation.emit({
//                 type: 'tabLongPress',
//                 target: route.key,
//               });
//             };

//             return (
//               <ScalePress
//                 onPress={onPress}
//                 onLongPress={onLongPress}
//                 key={index}
//                 style={[
//                   tabStyles.tabItem,
//                   isFocused ? tabStyles.focusedTabItem : {},
//                 ]}
//               >
//                 {route?.name === 'Delivery' && <DeliveryTabIcon focused={isFocused} />}
//                 {route?.name === 'Reorder' && <ReorderTabIcon focused={isFocused} />}
//                 {route?.name === 'Dining' && <DiningTabIcon focused={isFocused} />}
//                 {route?.name === 'Live' && <LiveTabIcon focused={isFocused} />}
//               </ScalePress>
//             );
//           })}
//           <View style={tabStyles.verticalLine} />
          
//         </Animated.View>
//       </Animated.View>
//     </>
//   );
// };

// export default CustomTabBar;








// import { Alert, Image, TouchableOpacity, View } from 'react-native';  // No Animated from react-native
// import React, { FC } from 'react';
// import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
// import { useSharedState } from './SharedContext';
// import { useSafeAreaInsets } from 'react-native-safe-area-context';
// import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated';  // Reanimated Animated
// import { Colors, screenWidth } from '@unistyles/Constants';
// import { tabStyles } from '@unistyles/tabStyles';
// import ScalePress from '@components/ui/ScalePress';
// import { DeliveryTabIcon, DiningTabIcon, LiveTabIcon, ReorderTabIcon } from './TabIcon';
// import { useAppSelector } from '@states/reduxHook';
// // import { useAppSelector } from '@states/reduxHook';

// const CustomTabBar: FC<BottomTabBarProps> = (props) => {
//      const isVegMode = useAppSelector(state => state.user.isVegMode)
//           // const isVegMode=true
//   const { scrollY } = useSharedState();
//   const { state, navigation } = props;
//   const bottom = useSafeAreaInsets();

//   const isLiveTabFocused = state.routes[state.index]?.name === 'Live';

//   const animatedStyle = useAnimatedStyle(() => {
//     return {
//       transform: [
//         {
//           translateY:
//             scrollY.value === 1
//               ? withTiming(100, { duration: 300 })
//               : withTiming(0, { duration: 300 }),
//         },
//       ],
//     };
//   });

//   const indicatorStyle = useAnimatedStyle(() => {
//     const baseLeft = 10;
//     let slideValue = state.index === 3 ? 0.23 : 0.24;
//     return {
//       left: withTiming(baseLeft + state.index * screenWidth * slideValue),
//     };
//   });

//   return (
//     <Animated.View
//       style={[
//         tabStyles.tabBarContainer,
//         animatedStyle,
//         {
//           paddingBottom: bottom.bottom,
//           backgroundColor: isLiveTabFocused ? Colors.dark : Colors.background,
//         },
//       ]}
//     >
//       <Animated.View style={tabStyles.tabContainer}>
//         {state.routes.map((route, index) => {
//           const isFocused = state.index === index;

//           const onPress = () => {
//             const event = navigation.emit({
//               type: 'tabPress',
//               target: route.key,
//               canPreventDefault: true,
//             });
//             if (!isFocused && !event.defaultPrevented) {
//               navigation.navigate(route.name);
//             }
//           };

//           const onLongPress = () => {
//             navigation.emit({
//               type: 'tabLongPress',
//               target: route.key,
//             });
//           };

//           return (
//             <ScalePress
//               key={index}
//               onPress={onPress}
//               onLongPress={onLongPress}
//               style={[tabStyles.tabItem, isFocused ? tabStyles.focusedTabItem : {}]}
//             >
//               {route.name === 'Delivery' && <DeliveryTabIcon focused={isFocused} />}
//               {route.name === 'Reorder' && <ReorderTabIcon focused={isFocused} />}
//               {route.name === 'Dining' && <DiningTabIcon focused={isFocused} />}
//               {route.name === 'Live' && <LiveTabIcon focused={isFocused} />}
//             </ScalePress>
//           );
//         })}
//         <View style={tabStyles.verticalLine} />
//       </Animated.View>
//       <Animated.View
//          style={[
//             tabStyles.slidingIndicator,
//             indicatorStyle,
//             {
//                 backgroundColor: isLiveTabFocused
//                 ? '#fff'
//                 :isVegMode
//                 ? Colors.active
//                 : Colors.primary,
//             },
//          ]}
      
//     />
//        <TouchableOpacity 
//        activeOpacity={0.9}
//        style={tabStyles.groceryLogoContainer}
//        onPress={() => {
//         Alert.alert('Please like!');
//        }}>
//         <Image
//          source={require('@assets/icons/grocery.png')}
//          style={tabStyles.groceryLogo} 
//          /> 
//        </TouchableOpacity>



//     </Animated.View>
//   );
// };

// export default CustomTabBar;


import { Alert, Image, TouchableOpacity, View } from 'react-native'
 
import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { useSharedState } from './SharedContext'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { Colors, screenWidth } from '@unistyles/Constants'
import { tabStyles } from '@unistyles/tabStyles'
import ScalePress from '@components/ui/ScalePress'
import { DeliveryTabIcon, DiningTabIcon, LiveTabIcon, ReorderTabIcon } from './TabIcon'
import { useAppSelector } from '@states/reduxHook'
 
const CustomTabBar = (props: BottomTabBarProps) => {
    const isVegMode = useAppSelector(state => state.user.isVegMode);
    // const isVegMode = true;
 
    const { scrollY } = useSharedState();
 
    const { state, navigation } = props;
    const bottom = useSafeAreaInsets();
    // const isLiveTabFocused = state.routes[state.index]?.name === 'Live';
 
    const currentRoute = state.routes[state.index];
    const isLiveTabFocused = currentRoute && currentRoute.name === 'Live';
 
 
 
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateY:
                        scrollY.value === 1
                            ? withTiming(100, { duration: 300 })
                            : withTiming(0, { duration: 300 })
                }
            ]
        }
    });
 
    const indicatorStyle = useAnimatedStyle(() => {
        const baseLeft = 10;
        let slideValue = state.index == 3 ? 0.23 : 0.24;
        return {
            left: withTiming(baseLeft + state.index * screenWidth * slideValue)
        }
    })
 
    return (
        <>
            <Animated.View
                style={[
                    tabStyles.tabBarContainer,
                    animatedStyle,
                    {
                        paddingBottom: bottom.bottom,
                        backgroundColor: isLiveTabFocused ? Colors.dark : Colors.background,
                    },]}>
 
                <View style={tabStyles.tabContainer}>
                    {state?.routes?.map((route, index) => {
                        const isFocused = state.index === index;
 
                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route?.key,
                                canPreventDefault: true,
                            });
 
                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route?.name)
                            }
                        };
 
                        const onLongPress = () => {
                            navigation.emit({
                                type: "tabLongPress",
                                target: route.key,
                            });
                        };
 
                        return (
 
                            <ScalePress
                                onPress={onPress}
                                onLongPress={onLongPress}
                                key={index}
                                style={[
                                    tabStyles.tabItem,
                                    isFocused ? tabStyles.focusedTabItem : {},
                                ]}
                            >
                                {route?.name === 'Delivery' && (<DeliveryTabIcon focused={isFocused} />)}
                                {route?.name === 'Reorder' && (<ReorderTabIcon focused={isFocused} />)}
                                {route?.name === 'Dining' && (<DiningTabIcon focused={isFocused} />)}
                                {route?.name === 'Live' && <LiveTabIcon focused={isFocused} />}
                            </ScalePress>
 
 
                        )
 
                    })}
                    <View style={tabStyles.verticalLine} />
 
                </View>
 
                <Animated.View
                    style={[tabStyles.slidingIndicator,
                        indicatorStyle,
                    {
                        backgroundColor: isLiveTabFocused
                            ? '#fff'
                            : isVegMode
                                ? Colors.active
                                : Colors.primary,
                    },
                    ]}
                />
 
                <TouchableOpacity
                    activeOpacity={0.9}
                    style={tabStyles.groceryLogoContainer}
                    onPress={() => {
                        Alert.alert('Please like and subscirbe!')
                    }}>
                    <Image
                        source={require('@assets/icons/grocery.png')}
                        style={tabStyles.groceryLogo}
                    />
                </TouchableOpacity>
 
 
            </Animated.View>
        </>
    )
}
 
export default CustomTabBar
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 