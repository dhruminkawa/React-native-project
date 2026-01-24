// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SplashScreen from '@features/auth/SplashScreen';
// import LoginScreen from '@features/auth/LoginScreen';
// import { navigationRef } from '@utils/NavigationUtils';

// const Stack = createNativeStackNavigator();

// const Navigation = () => {
//   return (
//     <NavigationContainer  ref={navigationRef}>
//       <Stack.Navigator
//         id="main-stack" 
//         initialRouteName="SplashScreen"
//         screenOptions={{ headerShown: false }}
//       >
//         <Stack.Screen name="SplashScreen" component={SplashScreen} />
//         <Stack.Screen 
//           options={{
//             animation:'fade',
//           }}
//           name='LoginScreen'
//           component={LoginScreen}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default Navigation;








import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '@features/auth/SplashScreen';
import LoginScreen from '@features/auth/LoginScreen';
import { navigationRef } from '@utils/NavigationUtils';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ animation: 'fade' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
