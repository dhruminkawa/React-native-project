// import { createStyleSheet } from "react-native-unistyles";

// export const emptyStyles = createStyleSheet(({ colors, device, border }) => ({
//     container: (isLive: boolean = false) => ({
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: isLive ? '#000' : colors.background
//     }),
//     emptyImage: {
//         width: device.width * 0.9,
//         height: device.height * 0.4,
//         resizeMode: 'contain'
//     }
// }))


// import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';
// import { defaultTheme } from './unistyles';

// const { colors, device } = defaultTheme;

// export const emptyStyles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: colors.background, // default, will override in component
//   } as ViewStyle,

//   emptyImage: {
//     width: device.width * 0.9,
//     height: device.height * 0.4,
//     resizeMode: 'contain',
//   } as ImageStyle,
// });



import { StyleSheet, ViewStyle, ImageStyle } from 'react-native';
import { defaultTheme } from './unistyles';

const { colors, device } = defaultTheme;

export const emptyStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  } as ViewStyle,

  emptyImage: {
    width: device.width * 0.9,
    height: device.height * 0.4,
    resizeMode: 'contain',
  } as ImageStyle,
});
