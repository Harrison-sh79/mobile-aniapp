import { View, Text, Image } from 'react-native'
import React from 'react'
import { DetailNativeStackProp } from '../../navigation/NativeStackNavigator'
import Animated, { FadeInLeft, FadeInUp, SharedTransition, ZoomInRotate, withSpring } from 'react-native-reanimated'
import { sharedElementTransition } from '../../utils/SharedElementTransition'

const DetailScreen = ({ navigation, route }: DetailNativeStackProp) => {
  const { index, item } = route.params
  const { image, title, description } = item

  return (
    <View>
      <Animated.Image 
      sharedTransitionTag={`image-${index}`} 
      sharedTransitionStyle={sharedElementTransition}
      source={image} style={{width: '100%', height: 300}} />
      <Animated.Text entering={FadeInUp.springify()
        .damping(30)
        .mass(5)
        .stiffness(10)
        .overshootClamping(0)
        .restDisplacementThreshold(0.1)
        .restSpeedThreshold(5)} style={{ padding: 20, fontSize: 25, fontWeight: 'bold' }}>{title}</Animated.Text>
      <Animated.Text entering={FadeInUp.springify()
        .damping(30)
        .mass(5)
        .stiffness(10)
        .overshootClamping(0)
        .restDisplacementThreshold(0.1)
        .restSpeedThreshold(5).delay(600)} style={{ padding: 20, fontSize: 20, fontWeight: '400' }}>{description}</Animated.Text>
    </View>
  )
}

export default DetailScreen