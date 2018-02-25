import React, { Component } from 'react';
import {Router, Stack, Scene, Modal} from 'react-native-router-flux';
import Launch from '/components/';
import Login from '/components/home';
import Register from '/components/register';

export default class RouterComponent extends Component{
    render(){
        
        <Router>
            <Stack key="loginStack">
                <Scene key="launch" component="Launch"/>
                <Scene key="login" component="Login"/>
                <Scene key="register" component="Register"/>
            </Stack>
        </Router>
    }
}