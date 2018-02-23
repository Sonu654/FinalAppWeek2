import React, {Component} from 'react';
import {Text,View} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class Home extends Component{
    render(){
        return (
            <View>
                <Text onPress={()=>Actions.login()}>Login</Text>
                <Text onPress={()=>Actions.register()}>Register</Text>
                <Text onPress={()=>Actions.home()}>Home</Text>
                <Text onPress={()=>Actions.list()}>List</Text>
                <Text onPress={()=>Actions.detail()}>Details</Text>
                <Text onPress={()=>Actions.pop()}>Back</Text>
            </View>
            
        );
    }
}