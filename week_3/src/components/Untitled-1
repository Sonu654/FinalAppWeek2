import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions, Platform, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MENU_ICON from '../assets/images/menu.png';
import SET_ICON from '../assets/images/settings.png';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
class MapView extends Component {

    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', marginTop: Platform.OS == 'ios' ? 20 : 0 }}>
                <View style={styles.top}>
                    <View style={styles.imgContainer}>
                        <Image source={MENU_ICON} style={styles.carouselImage} />
                    </View>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>Home</Text>
                    </View>
                    <View style={styles.imgContainerRT}>
                        <Image source={SET_ICON} style={styles.carouselImage} />
                    </View>

                </View>
                <View style={styles.center}>

                </View>
                <View style={styles.bottom}>
                    <View style={styles.myBottomMenu}>
                    
                    </View>
                </View>
            </View>
        );
    }
}


export default MapView;

const styles = StyleSheet.create({
    top: {
        flex: 0.1,
        backgroundColor: '#2962FF',
        flexDirection: 'row'
    },
    center: {
        backgroundColor: '#fff',
        flex: 0.8
    },
    bottom: {
        backgroundColor: '#2962FF',
        flex: 0.1,
        flexDirection:'row'
    },
    carouselImage: {
        width: 30,
        height: 30,
        marginLeft: 15,
        marginTop: 15,
    },
    imgContainer: {
        flex: 0.2,
    },
    title:{
        flex:0.8,
        
    },
    titleText:{
        fontSize:24,
        color:'#fff',
        fontWeight:'600',
        textAlign:'center',
        textAlignVertical:'center',
        padding:10,
        marginTop:15

    },
    myBottomMenu:{
        flex:0.2,
        padding:10,
    }
});