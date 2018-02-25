import React, { Component } from 'react';
import { Text } from 'react-native';
import Action from 'react-native-router-flux';


class Register extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        <Text onPress={() => { Action.pop() }}></Text>
    }
}