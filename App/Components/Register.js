import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class Register extends Component {
    constructor(props) {
        super(props);
        state = {
            email: '',
            pass: '',
            rePass: '',
            name: ''
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../Assets/Images/logo.png')} />
                </View>
                <KeyboardAwareScrollView>
                    <View style={styles.formContainer}>
                        <Text style={{ fontSize: 32, color: '#fff', flex: 0.1, textAlign: 'center' }}>Registration Details</Text>
                        <View style={styles.containerReg}>
                            <TextInput style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType='email-address'
                                placeholder='Email or Mobile Number'
                                placeholderTextColor='rgba(225,225,225,0.7)' />

                            <TextInput style={styles.input}
                                returnKeyType="go"
                                ref={(input) => this.passwordInput = input}
                                placeholder='Your Name'
                                placeholderTextColor='rgba(225,225,225,0.7)'
                                secureTextEntry />

                            <TextInput style={styles.input}
                                returnKeyType="go"
                                ref={(input) => this.passwordInput = input}
                                placeholder='Password'
                                placeholderTextColor='rgba(225,225,225,0.7)'
                                secureTextEntry />

                            <TextInput style={styles.input}
                                returnKeyType="go"
                                ref={(input) => this.passwordInput = input}
                                placeholder='Confirm Password'
                                placeholderTextColor='rgba(225,225,225,0.7)'
                                secureTextEntry />

                            <TouchableOpacity style={styles.buttonContainerLog}>
                                <Text style={styles.buttonText} onPress={() => register()}>Register</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonContainerReg}
                            >
                                <Text style={styles.buttonText}
                                    onPress={() => Actions.pop()}>Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>

        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 0.4,
        flex: 0.1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 250
    },
    formContainer: {
        flex: 0.6,
        flexGrow: 1,
        justifyContent: 'center',
        padding: 10
    },
    containerReg: {
        padding: 20
    },
    input: {
        height: 60,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff',
        fontSize: 20
    },
    buttonContainerLog: {
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        marginBottom: 10
    },
    buttonContainerReg: {
        backgroundColor: '#c0392b',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});
