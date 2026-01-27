import { View } from "react-native";
import React,{FC} from "react";
import { useUnistyles } from "react-native-unistyles";
import { loginStyles } from "@unistyles/authStyles";
import CustomText from "@components/global/CustomText";


const BreakerText: FC<{text : string}> = ({ text }) => {
    return (
        <View style={loginStyles.breakerContainer}>
            <View style={loginStyles.horizontalLine} />
            <CustomText
              fontSize={12}
              fontFamily="Okra-Medium"
              style={loginStyles.breakerText}
              >
                {text}
              </CustomText>
              <View style={loginStyles.horizontalLine} />
        </View>
    )
}

export default BreakerText