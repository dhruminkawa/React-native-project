import { View, Text } from 'react-native';
import React from 'react';
import { splashStyles } from '@unistyles/authStyles';
const SplashScreen = () => {
  return (
    <View style={splashStyles.container}>
      <Text style={splashStyles.msgText}>SplashScreen</Text>
    </View>
  );
};

export default SplashScreen;
