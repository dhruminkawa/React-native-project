
import { StyleSheet, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { defaultTheme } from './unistyles';
 
const { colors, device, border } = defaultTheme;
 
export const splashStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  msgText: {
    textAlign: 'center',
    color: colors.text,
  } as TextStyle,
  logoImage: {
    width: device.width * 0.8,
    height: device.height * 0.4,
    resizeMode: 'contain',
    marginTop: 80,
  } as ImageStyle,
  treeImage: {
    width: device.width * 0.4,
    height: device.height * 0.14,
    resizeMode: 'contain',
  } as ImageStyle,
  animatedContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  } as ViewStyle,
});
 
export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  } as ViewStyle,
  cover: {
    width: '100%',
    height: device.height * 0.4,
    resizeMode: 'cover',
    borderBottomEndRadius: 30,
    borderBottomStartRadius: 30,
  } as ImageStyle,
  bottomContainer: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
  } as ViewStyle,
  title: {
    textAlign: 'center',
    marginHorizontal: 20,
  } as TextStyle,
  buttonContainer: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 45,
    marginVertical: 5,
    borderRadius: border.md,
  } as ViewStyle,
  footerText: {
    textDecorationLine: 'underline',
    fontSize: 10,
    color: colors.text,
  } as TextStyle,
});