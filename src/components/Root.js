import React from 'react';
import {Text, View, TouchableOpacity, Share, Image} from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from './Menus/Home';
import RegionNoreste from './Menus/RegionNoreste';
import Opinion from './Menus/Opinion';
import Deportes from './Menus/Deportes';
import Politica from './Menus/Politica';
import San_Luis from './Menus/San_Luis';
import San_Jose from './Menus/San_Jose';
import Dr_Mora from './Menus/Dr_Mora';
import Victoria from './Menus/Victoria';
import Tierra_Blanca from './Menus/Tierra_Blanca';
import Santa_Catarina from './Menus/Santa_Catarina';
import Xichu from './Menus/Xichu';
import Atarjea from './Menus/Atarjea';
import Post from './Menus/Post';

const Root = StackNavigator({
    initialRouteName: { screen: HomeScreen },
    Home: {
        screen: HomeScreen,
    },
    RegionNoreste: {
        screen: RegionNoreste
    },
    Opinion: {
        screen: Opinion
    },
    Deportes: {
        screen: Deportes
    },
    Politica: {
        screen: Politica
    },
    San_Luis: {
        screen: San_Luis
    },
    San_Jose: {
        screen: San_Jose
    },
    Dr_Mora: {
        screen: Dr_Mora
    },
    Victoria: {
        screen: Victoria
    },
    Tierra_Blanca: {
        screen: Tierra_Blanca
    },
    Santa_Catarina: {
        screen: Santa_Catarina
    },
    Xichu: {
        screen: Xichu
    },
    Atarjea: {
        screen: Atarjea
    },
    Post: {
      screen: Post,
      navigationOptions: ({navigation}) => ({
          title: `${navigation.state.params.title}`,
          headerRight: (
            <TouchableOpacity
                onPress = {() => Share.share({
                    message: `${navigation.state.params.title} enlace:${navigation.state.params.url}`,
                    url: navigation.state.params.url,
                    title: 'Wow, mira esto!!'
                    }, {
                        // Android only:
                        dialogTitle: navigation.state.params.title,
                        // iOS only:
                        url: navigation.state.params.url,
                        excludedActivityTypes: [
                        'com.apple.UIKit.activity.PostToTwitter'
                        ]
                    }
                )}><Ionicons name="md-share" size={24} color="white" />
            </TouchableOpacity>),
          headerStyle: {
            backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
            fontWeight: 'bold',
            },
        transitionConfig: () => ({
        transitionSpec: {
            duration: 300,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
         },
        screenInterpolator: sceneProps => {
        const { layout, position, scene } = sceneProps;
        const { index } = scene;

        const height = layout.initHeight;
        const translateY = position.interpolate({
          inputRange: [index - 1, index, index + 1],
          outputRange: [height, 0, 0],
        });
        const opacity = position.interpolate({
          inputRange: [index - 1, index - 0.99, index],
          outputRange: [0, 1, 1],
        });
         return { opacity, transform: [{ translateY }] };
      }})
      })
    }
} );
// {headerMode:"none"}
export default Root;