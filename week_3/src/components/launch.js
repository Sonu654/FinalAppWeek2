import React, { Component } from 'react';
import Carousel from 'react-native-carousel';
import CAROUSEL_IMAGE_1 from '../assets/images/carousel1.png';
import { View, Text, StyleSheet, Image, Dimensions, Button, TouchableOpacity } from "react-native";
import { Actions } from "react-native-router-flux";
let { height, width } = Dimensions.get('window');

export default class Launch extends Component {
    render() {
        return (
            <View style={{ flex: 1, flexDirection: "column" }}>
                <Carousel width={375}
                    animate={false}
                    indicatorSize={20}
                    indicatorColor="#4A7EFF"
                    inactiveIndicatorColor="#dadada"
                    indicatorAtBottom={true}
                    indicatorOffset={0}
                >
                    <View style={styles.container}>
                        <Image source={CAROUSEL_IMAGE_1} style={styles.carouselImage} />
                    </View>
                    <View style={styles.container}>
                        <Image source={CAROUSEL_IMAGE_1} style={styles.carouselImage} />
                    </View>
                    <View style={styles.container_1}>
                        <Image source={CAROUSEL_IMAGE_1} style={styles.carouselImage} />
                    </View>
                </Carousel>
                <View style={{ flex: 0.1, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center' }}>
                    <View style={styles.wrapperReg}>
                        <TouchableOpacity onPress={() => { Actions.register() }} title="Register"
                            style={styles.registerButton}
                        >
                            <Text style={styles.registerButtonText}>Register</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.wrapperLog}>
                        <TouchableOpacity onPress={() => { Actions.login() }} style={styles.loginButton}
                            title="Login"
                        >
                            <Text style={styles.loginButtonText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{
                    flex: 0.1,
                    height: 40,
                    flexDirection:
                        "row",
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Text style={styles.bottomText}>
                        dhasjkdgasjkd fdsgds  dfdsf
                    </Text>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: 375,
        flex: 0.7,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    carouselImage: {
        width: width,
        height: height,
        resizeMode:'contain'
    },
    wrapperReg: {
        backgroundColor: '#34A873',
        margin: 20,
        marginRight: 10,
        flex: 0.5,
        height: 40
    },
    wrapperLog: {
        borderWidth: 1,
        borderColor: "#4A7EFF",
        backgroundColor: 'transparent',
        margin: 20,
        marginLeft: 10,
        flex: 0.5,
        height: 40
    },
    registerButtonText: {
        padding:10,
        textAlign:'center',
        color: "#fff"
    },
    loginButtonText: {
        textAlign:'center',
        color: "#4A7EFF",
        padding:10,
    },
    bottomText: {
        textAlign:'center',
        color: "#4A7EFF",
        fontSize: 16
    }

});