import { View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { HomeNativeStackProp } from '../../navigation/NativeStackNavigator'
import Colors from '../../utils/Colors'
import Animated, { SharedTransition, useAnimatedRef, useAnimatedStyle, useScrollViewOffset, useSharedValue, withRepeat, withSpring, withTiming } from 'react-native-reanimated'
import { sharedElementTransition } from '../../utils/SharedElementTransition'
import { Ionicons } from '@expo/vector-icons'

const data = [
  {
    image: require('../../../assets/images/pexels-photo-10282820.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-11021595.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-11056212.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-11123438.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-11373385.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-8348457.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-8889370.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-10282820.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-11021595.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-11056212.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-11123438.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-11373385.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-8348457.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-8889370.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-10282820.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-11021595.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-11056212.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-11123438.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-11373385.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-8348457.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-8889370.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-10282820.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-11021595.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-11056212.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-11123438.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-11373385.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-8348457.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
  {
    image: require('../../../assets/images/pexels-photo-8889370.jpg'),
    title: 'pexels-photo-10282820',
    description: 'pexels-photo-10282820, a photo with a title and description with XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX'
  },
]

const HomeScreen = ({ navigation }: HomeNativeStackProp) => {

  const myref = useAnimatedRef<Animated.ScrollView>()

  const scrollHandler = useScrollViewOffset(myref)

  const buttonStyle = useAnimatedStyle(() => {


    console.log(scrollHandler.value)
    return {
      opacity: scrollHandler.value > 1000 ? withSpring(1): withSpring(0),

    }
  })

  const scrollTop = () => {
    
    myref?.current?.scrollTo({ x: 0, y: 0, animated: true })
  }

  return (
    <>
      <Animated.ScrollView ref={myref} >
        {data.map((item, index) => {
          return (
            <TouchableOpacity key={index} onPress={() => navigation.navigate('Detail', { item, index })}>
              <Animated.Image
                sharedTransitionTag={`image-${index}`}
                sharedTransitionStyle={sharedElementTransition}
                source={item.image} style={{ width: 100, height: 100 }} />
            </TouchableOpacity>
          )
        })}
      </Animated.ScrollView>

      <Animated.View style={[{ position: 'absolute', bottom: 20, right: 20 }, buttonStyle]}>
        <TouchableOpacity
          onPress={scrollTop}
          style={{
            padding: 6,
            backgroundColor: '#fff',
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Ionicons name="add-circle" size={30} color="black" />
        </TouchableOpacity>
      </Animated.View>
    </>
  )
}

export default HomeScreen