import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions, Platform, StyleSheet, TouchableOpacity, Image } from 'react-native';
import {Actions} from 'react-native-router-flux';
import REGISTER_ICON from '../assets/images/company.png';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
let { height, width } = Dimensions.get('window');
class Register extends Component {
    constructor(props) {
        super(props);
        console.log("inside Register");
    }
    render() {
        return (
            <View style={{ flex: 1, flexDirection: 'column', marginTop: Platform.OS == 'ios' ? 20 : 0, backgroundColor: '#2962FF' }}>
                <View style={styles.imgContainer}>
                    <Image source={REGISTER_ICON} style={styles.carouselImage} />
                </View>
                <View style={styles.formContainer}>
                    <KeyboardAwareScrollView>
                        <TextInput style={styles.inputText} name="username" placeholder="Username" placeholderTextColor="#fff" />
                        <TextInput style={styles.inputText} name="email" placeholder="Email" placeholderTextColor="#fff" />
                        <TextInput style={styles.inputText} name="pass" placeholder="Password" placeholderTextColor="#fff" />
                        <TextInput style={styles.inputText} name="cpass" placeholder="Confirm Password" placeholderTextColor="#fff" />
                        <View style={styles.wrapperLog}>
                            <TouchableOpacity style={styles.loginButton}
                            >
                                <Text style={styles.loginButtonText} >Register</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.bottomText} onPress={() => { Actions.login() }} > Already gave an account? Login</Text>
                    </KeyboardAwareScrollView>
                </View>
            </View>
        );
    }
}

export default Register;

const styles = StyleSheet.create({
    imgContainer: {
        flex: 0.3,
    },
    formContainer: {
        flex: 0.7,
    },
    inputText: {
        color: '#fff',
        fontSize: 18,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        padding: 10,
        margin: 10
    },
    wrapperLog: {
        borderWidth: 1,
        borderColor: "#fff",
        borderBottomWidth: 2,
        borderLeftWidth: 4,
        backgroundColor: 'transparent',
        margin: 20,
        marginLeft: 10,
        flex: 0.5,
        height: 60
    },
    loginButtonText: {
        textAlign: 'center',
        color: "#fff",
        padding: 15,
        fontSize: 22
    },
    bottomText: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 16
    },
    carouselImage: {
        width: width/2,
        height: 150,
        resizeMode: 'contain',
        marginLeft:width/4,
        borderRadius: 80,
        marginTop: 40
    },
});