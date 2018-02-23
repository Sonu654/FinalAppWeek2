import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Button, TextInput, TouchableOpacity, Platform } from 'react-native';
import { Actions } from "react-native-router-flux";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as myActions from '../Actions/';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class Login extends Component {

    constructor(props) {
        super(props);
        state = {
            isLogin: false,
            username: ' ',
            password: ' '
        }

    }

    sendLogin = () => {
        console.log("sent data: Username : " + this.state.username + " & Password : " + this.state.password);
        if (this.state.username.length > 0 && this.state.password.length > 0)
            this.props.validUser(this.state.username, this.state.password);
        else
            alert('Input Required');
    }

    handleEmail = (text) => {
        this.setState({ username: text })
    }

    handlePassword = (text) => {
        this.setState({ password: text })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.loginContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../Assets/Images/logo.png')} />
                </View>
                <KeyboardAwareScrollView>
                    <View style={styles.formContainer}>
                        <Text style={{ fontSize: 32, color: '#fff', flex: 0.1, textAlign: 'center' }}>Login Details</Text>
                        <View style={styles.containerForm}>
                            <TextInput style={styles.input}
                                autoCapitalize="none"
                                autoCorrect={false}
                                placeholder='Email or Mobile Number'
                                placeholderTextColor='rgba(225,225,225,0.7)'
                                onChangeText={this.handleEmail}
                            />
                            <TextInput style={styles.input}
                                returnKeyType="go"
                                placeholder='Password'
                                placeholderTextColor='rgba(225,225,225,0.7)'
                                secureTextEntry
                                onChangeText={this.handlePassword} />

                            <TouchableOpacity style={styles.buttonContainerLog}
                                onPress={() => this.sendLogin(this.state.username, this.state.password)} >
                                <Text style={styles.buttonText}>LOGIN</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.buttonContainerReg} onPress={() => Actions.register()}>

                                <Text style={styles.buttonText}
                                >REGISTER</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>

        );
    }
}

function printObject(o) {
    var out = '';
    for (var p in o) {
        out += p + ': ' + o[p] + '\n';
    }
    console.log(out);
}

mapDispatchToProps = (dispatch) => {
    return bindActionCreators(myActions, dispatch);
}

mapStateToProps = (state, props) => {
    if (state.userReducer.isLogin == false) {
        return {
            isLogin: state.userReducer.isLogin,
            username: '',
            password: '',
            msg:state.userReducer.msg
        }
    } else {
        return {
            isLogin: state.userReducer.isLogin,
            user: state.userReducer.data
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);



const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 1,
        flex: 0.2,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',

    },
    formContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 10,
        flex: 0.8,
    },
    containerForm: {
        padding: 20,
        flex: 0.9
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

