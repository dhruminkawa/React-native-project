// import { createStyleSheet } from "react-native-unistyles";
// import { Colors } from "./Constants";

// export const shadowStyle = {
//     shadowOffset: { width: 1, height: 1 },
//     shadowOpacity: 0.4,
//     elevation: 5,
//     shadowRadius: 4,
//     shadowColor: Colors.lightText,
//     borderColor: Colors.border,
//     borderRadius: 10,
// }

// export const phoneStyles = createStyleSheet(({ colors, fonts, border }) => ({
//     container: {
//         gap: 10,
//         flexDirection: 'row',
//         alignItems: 'center',
//         marginVertical: 15
//     },
//     countryPickerContainer: {
//         backgroundColor: '#fff',
//         ...shadowStyle,
//         padding: 8,
//         height: 45,
//         flexDirection: 'row',
//         gap: 5,
//         width: '18%',
//         justifyContent: 'center',
//         alignItems: 'center',
//     },
//     phoneInputContainer: {
//         backgroundColor: '#fff',
//         width: '78%',
//         ...shadowStyle,
//         paddingHorizontal: 8,
//         flexDirection: 'row',
//         gap: 10,
//         alignItems: 'center',
//     },
//     input: {
//         height: 45,
//         fontFamily: fonts.Medium,
//         width:"100%"
//     },
//     socialContainer: {
//         flexDirection: 'row',
//         alignItems: "center",
//         gap: 60,
//         marginTop: 20
//     },
//     iconContainer: {
//         width: 50,
//         height: 50,
//         ...shadowStyle,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: colors.background
//     },
//     gimg: {
//         width: 20,
//         height: 20,
//         resizeMode: 'contain'
//     }

// }))





import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { defaultTheme } from './unistyles';
import { Colors } from './Constants';

const { colors, fonts, border } = defaultTheme;

export const shadowStyle: ViewStyle = {
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 0.4,
  elevation: 5,
  shadowRadius: 4,
  shadowColor: Colors.lightText,
  borderColor: Colors.border,
  borderRadius: 10,
};

export const phoneStyles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  } as ViewStyle,

  countryPickerContainer: {
    backgroundColor: '#fff',
    padding: 8,
    height: 45,
    flexDirection: 'row',
    gap: 5,
    width: '18%',
    justifyContent: 'center',
    alignItems: 'center',
    ...shadowStyle,
  } as ViewStyle,

  phoneInputContainer: {
    backgroundColor: '#fff',
    width: '78%',
    paddingHorizontal: 8,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    ...shadowStyle,
  } as ViewStyle,

  input: {
    height: 45,
    fontFamily: fonts.Medium,
    width: '100%',
  } as TextStyle,

  socialContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 60,
    marginTop: 20,
  } as ViewStyle,

  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    ...shadowStyle,
  } as ViewStyle,

  gimg: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  } as ImageStyle,
});



