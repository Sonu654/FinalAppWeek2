import React, { Component } from 'react';
import { View, Text, TextInput, Dimensions, Platform, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';


import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
class Home extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
                <View style={{ flex: 1, flexDirection: 'column', marginTop: Platform.OS == 'ios' ? 20 : 0, backgroundColor: '#2962FF' }}>
                    <Text style={{color:'#fff', fontSize:20}}>{this.props.title}</Text>
                </View>
        );
    }
}


export default Home;

const styles = StyleSheet.create({
   
});