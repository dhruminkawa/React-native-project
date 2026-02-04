import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { FC, useEffect, useMemo, useRef, useState } from 'react'
import RollingBar from 'react-native-rolling-bar'
import { RFValue } from 'react-native-responsive-fontsize'
import { useAppSelector } from '@states/reduxHook'
import { selectRestaurantCart } from '@states/reducers/cartSlice'
import { searchStyles } from '@unistyles/restuarantStyles'
import Icon from '@components/global/Icon'
import { Colors } from '@unistyles/Constants'
import CustomText from '@components/global/CustomText'
import LinearGradient from 'react-native-linear-gradient'
import LottieView from 'lottie-react-native'
import { navigate } from '@utils/NavigationUtils'
import AnimatedNumber from 'react-native-animated-numbers'
 
const searchItems: string[] = [
    'Search "Chai Samosa"',
    'Search "Cake"',
    'Search "Ice Cream"',
    'Search "Pizza"',
]
 
 
const SearchAndOffers: FC<{ item: any }> = ({ item }) => {
 
    const cart = useAppSelector(selectRestaurantCart(item?.id))
    const summary = useMemo(() => {
 
        return cart.reduce(
            (acc, item) => {
                acc.totalPrice += item?.cartPrice || 0
                acc.totalItems += item?.quantity;
                return acc;
            },
            { totalPrice: 0, totalItems: 0 }
        );
    }, [cart])
 
    const slideAnim = useRef(new Animated.Value(0)).current;
    const scaleAnim = useRef(new Animated.Value(0)).current;
    const [showOffer, setShowOffer] = useState(summary.totalItems > 0)
    const [showConfetti, setShowConfetti] = useState(false);
    const hasShownCongrats = useRef(false)
 
    useEffect(() => {
        if (summary?.totalItems > 0) {
            setShowOffer(true)
            Animated.timing(slideAnim, {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            }).start()
        } else {
            Animated.timing(slideAnim, {
                toValue: 0,
                duration: 500,
                useNativeDriver: true
            }).start(() => setShowOffer(false))
        }
 
        if (summary?.totalPrice > 500 && !showConfetti && !hasShownCongrats.current) {
            setShowConfetti(true);
            hasShownCongrats.current = true
 
            Animated.loop(
                Animated.sequence([
                    Animated.timing(scaleAnim, {
                        toValue: 1.1,
                        duration: 1500,
                        useNativeDriver: true,
                    }),
                    Animated.timing(scaleAnim, {
                        toValue: 1,
                        duration: 1500,
                        useNativeDriver: true,
                    }),
                ]),
                { iterations: 2 },
            ).start()
        } else if (summary.totalPrice <= 500) {
            setShowConfetti(false);
            hasShownCongrats.current = false;
            scaleAnim.setValue(1);
        }
 
 
 
 
    }, [summary.totalItems, summary.totalPrice])
 
 
 
 
 
 
 
 
    const translateY = slideAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 0]
    });
 
 
 
    return (
        <View style={searchStyles.container}>
            <View style={[searchStyles.flexRowBetween, searchStyles.padding]}>
 
                <TouchableOpacity
                    style={searchStyles.searchInputContainer}
                    activeOpacity={0.8}
                >
                    <Icon
                        iconFamily='Ionicons'
                        name='search'
                        color={Colors.active}
                        size={RFValue(20)}
                    />
                    <RollingBar
                        interval={3000}
                        defaultStyle={false}
                        customStyle={searchStyles.textContainer}>
 
                        {searchItems?.map((item, index) => {
                            return (
                                <CustomText
                                    style={searchStyles.rollingText}
                                    key={index}
                                    fontSize={12}
                                    fontFamily='Okra-Medium'>
                                    {item}
                                </CustomText>
                            )
                        })}
 
                    </RollingBar>
                </TouchableOpacity>
                <TouchableOpacity style={searchStyles.flexRowGap}>
                    <Icon
                        iconFamily='Ionicons'
                        name='book-outline'
                        color={Colors.background}
                        size={RFValue(16)}
                    />
                    <CustomText
                        color={Colors.background}
                        fontSize={12}
                        fontFamily='Okra-Bold'
                    >
                        Menu
                    </CustomText>
                </TouchableOpacity>
            </View>
 
            {showOffer && (<Animated.View style={{ transform: [{ translateY }] }}>
                <LinearGradient
                    colors={showConfetti ? ['#3a7bd5', '#3a6073'] : ['#e9425e', '#9145b6']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 1, y: 1.2 }}
                    style={searchStyles.offerContainer}
                >
                    <View style={{
                        padding: 15,
                        paddingHorizontal: 20,
                        paddingBottom: 15,
                    }}>
                        {showConfetti && (
                            <LottieView
                                source={require('@assets/animations/confetti_2.json')}
                                style={searchStyles.confetti}
                                autoPlay
                                loop={false}
                                onAnimationFinish={() => setShowConfetti(false)}
                            />
                        )}
 
                        <TouchableOpacity
                            style={searchStyles.offerContent}
                            activeOpacity={0.8}
                            onPress={() => {
                                navigate('CheckoutScreen', {
                                    item: item,
                                });
                            }}>
                            <AnimatedNumber
                                includeComma={false}
                                animationDuration={300}
                                fontStyle={searchStyles.animatedCount}
                                animateToNumber={summary?.totalItems}
                            />
 
                            <CustomText style={searchStyles.offerText}>
                                {` item${summary?.totalItems > 1 ? 's' : ''} added`}
                            </CustomText>
                            <Icon
                                iconFamily='Ionicons'
                                name='arrow-redo-sharp'
                                color='#fff'
                                size={RFValue(14)}
                            />
                        </TouchableOpacity>
 
                        <Animated.Text
                        style={[searchStyles.offerSubtitle, {transform: [{scale: scaleAnim}],
                    },
                ]}>
                    {summary?.totalPrice > 500
                    ? 'Congratulations! You get an extra 15% OFF!'
                    : `Add items worth ₹${Math.max(1,500 - summary?.totalPrice,)} more to get extra 15% OFF`
                }
                </Animated.Text>
                       
                       
                    </View>
                </LinearGradient>
            </Animated.View>)}
 
 
        </View>
    )
}
 
export default SearchAndOffers
 
const styles = StyleSheet.create({})
 