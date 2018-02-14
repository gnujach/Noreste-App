import React, {Component} from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
const HeaderMenu = (props) => {
    const { navigate } = props.navigate;
    const { menuStyle, linkStyle } = styles;
    return (
        <View style={menuStyle}>
            <TouchableOpacity style={linkStyle} onPress={ () => props.navigate('Home')}><Text> Inicio </Text></TouchableOpacity>
            <TouchableOpacity style={linkStyle} onPress={ () => props.navigate('RegionNoreste')}><Text>La Región</Text></TouchableOpacity>
            <TouchableOpacity style={linkStyle} onPress={ () => props.navigate('Opinion')}><Text> Opinión</Text></TouchableOpacity>
            <TouchableOpacity style={linkStyle} onPress={ () => props.navigate('Deportes')}><Text>Deportes </Text></TouchableOpacity>
            <TouchableOpacity style={linkStyle} onPress={ () => props.navigate('Politica')}><Text>Política </Text></TouchableOpacity>
        </View>
    )
}
const styles = {
    menuStyle: {
        // flex: 1,
        flexDirection: 'row',
        // justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        shadowColor: '#000',
        backgroundColor: '#fff',
    },
    linkStyle: {
        // flexGrow: 1,
        padding: 10
    }
}
export default HeaderMenu;