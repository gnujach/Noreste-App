import React, {Component} from 'react';
import { View, Text, Image, Dimensions, StyleSheet, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const {width, height } = Dimensions.get('window');
class MenuMunicipios extends Component {
    render() {
        const { navigate } = this.props.navigate;
        return(
            <View style={styles.containerStyle}>
                    <View style={styles.seccionStyles}>
                        <Text>Sección</Text>
                        <TouchableWithoutFeedback onPress={() => this.props.toggle()}>
                            <Ionicons style={styles.menuStyle}name="md-remove" size={24} color="black" />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={styles.linkStyleContainer} >
                        <TouchableOpacity onPress={ () => this.props.navigate('San_Luis')}><Text> San Luis de la Paz </Text></TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.props.navigate('San_Luis')}>
                            <Ionicons style={styles.menuStyle}name="md-arrow-round-forward" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.linkStyleContainer} >
                        <TouchableOpacity onPress={ () => this.props.navigate('San_Jose')}><Text> San José Iturbide </Text></TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.props.navigate('San_Jose')}>
                            <Ionicons style={styles.menuStyle}name="md-arrow-round-forward" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.linkStyleContainer} >
                        <TouchableOpacity onPress={ () => this.props.navigate('Dr_Mora')}><Text> Dr. Mora</Text></TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.props.navigate('Dr_Mora')}>
                            <Ionicons style={styles.menuStyle}name="md-arrow-round-forward" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.linkStyleContainer} >
                        <TouchableOpacity onPress={ () => this.props.navigate('Victoria')}><Text> Victoria </Text></TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.props.navigate('Victoria')}>
                            <Ionicons style={styles.menuStyle}name="md-arrow-round-forward" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.linkStyleContainer} >
                        <TouchableOpacity onPress={ () => this.props.navigate('Home')}><Text> Tierra Blanca </Text></TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.props.navigate('Home')}>
                            <Ionicons style={styles.menuStyle}name="md-arrow-round-forward" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.linkStyleContainer} >
                        <TouchableOpacity onPress={ () => this.props.navigate('Home')}><Text> Santa Catarina </Text></TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.props.navigate('Home')}>
                            <Ionicons style={styles.menuStyle}name="md-arrow-round-forward" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.linkStyleContainer} >
                        <TouchableOpacity onPress={ () => this.props.navigate('Home')}><Text> Xichú</Text></TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.props.navigate('Home')}>
                            <Ionicons style={styles.menuStyle}name="md-arrow-round-forward" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.linkStyleContainer} >
                        <TouchableOpacity onPress={ () => this.props.navigate('Home')}><Text> Atarjea </Text></TouchableOpacity>
                        <TouchableOpacity onPress={ () => this.props.navigate('Home')}>
                            <Ionicons style={styles.menuStyle}name="md-arrow-round-forward" size={20} color="black" />
                        </TouchableOpacity>
                    </View>
            </View>
        )
    }
}
const styles = {
   
    linkStyleContainer: {
        justifyContent: 'space-between',
        borderColor: '#bebebe',
        borderBottomWidth: .5,
        width: width / 2,
        paddingTop: 10,
        flexDirection: 'row',
        // marginHorizontal: 15,
        // shadowColor: '#000',
        // shadowOffset: { width: 1, height: 2 },
        // shadowOpacity: 0.5,
    },
    containerStyle: {
        flex: 1,
        height: height,
        width: width / 2,
        // justifyContent: 'space-between',
        paddingTop: 25,
        backgroundColor: '#F8F8F8',
    },
    // menuStyles: {
    //     flexDirection: 'column',
    //     backgroundColor: '#F8F8F8'
    // },
    seccionStyles: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: width / 2,
        borderColor: '#000',
        borderBottomWidth: 2,
        // paddingHorizontal: 20,
        // paddingVertical: 20
    },
}
export default MenuMunicipios;

