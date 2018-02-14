// Import Libraries for making  a component

import React from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import Images from '../../assets/Images';
import { Ionicons } from '@expo/vector-icons';
// Make the components
const Header = (props) => {
    const { textStyle, viewStyle, imageStyle, menuStyle } = styles;
    const { title } = props;
    const { navigate } = props.navigate;
    return (
        <View>
             <View style={viewStyle}>
                 <TouchableWithoutFeedback onPress={() => props.toggle()}>
                    <Ionicons style={menuStyle}name="md-menu" size={24} color="black" />
                </TouchableWithoutFeedback>
                <Text style={textStyle} > {title}</Text>
                <Image source={Images.logoIcon} style={imageStyle} />
            </View>
             {/* <View style={menuStyle}>
                <TouchableOpacity style={linkStyle} onPress={ () => props.navigate('Home')}><Text> Inicio </Text></TouchableOpacity>
                <TouchableOpacity style={linkStyle} onPress={ () => props.navigate('RegionNoreste')}><Text>La Región</Text></TouchableOpacity>
                <TouchableOpacity style={linkStyle} onPress={ () => props.navigate('Opinion')}><Text> Opinión</Text></TouchableOpacity>
                <TouchableOpacity style={linkStyle} onPress={ () => props.navigate('Deportes')}><Text>Deportes </Text></TouchableOpacity>
                <TouchableOpacity style={linkStyle} onPress={ () => props.navigate('Politica')}><Text>Política </Text></TouchableOpacity>
            </View>  */}
        </View>
    );
};

const styles = {
    viewStyle: {
        // flex: 1,
        backgroundColor: '#F8F8F8',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 80,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 20,
        // flex: 2
    },
    imageStyle: {
        height: 28,
        width: 40,
        marginHorizontal: 15,
        alignItems: 'center',
        resizeMode: Image.resizeMode.contain,
    },
    menuStyle: {
        marginHorizontal: 15,
    }
    // menuStyle: {
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center'
    //     // flex: 1,
    //     // height: 80,
    //     // paddingTop: 25
    // },
    // linkStyle: {
    //     // flexGrow: 1,
    //     padding: 10
    // }
};
// Make the component avaible for other parts of the app
export default Header;
