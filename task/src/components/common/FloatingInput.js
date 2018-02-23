import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';
let FloatingLabel = require('react-native-floating-labels'); 
const FloatingInput = (props) => {
    return (
        <FloatingLabel 
            labelStyle={styles.labelInput}
            inputStyle={styles.input}
            value={props.value}
            style={styles.formInput}
            clearButtonMode={true}
            returnKeyType={props.returnKeyType}
            password={props.password}
            autoCorrect={false}
            underlineColorAndroid={false}
            onChangeText={props.onChangeText}
            onSubmitEditing={props.onSubmitEditing}
        >{props.label}</FloatingLabel>
    );
}
 
const styles = StyleSheet.create({
    labelInput: {
        color: '#fff',
        fontSize: 14,  
    },
    formInput: {
        flex: 1,
        alignSelf:'stretch',
        borderBottomWidth: 1, 
        borderColor: '#fff',   
    },
    input: {
        fontSize: 16,
        borderWidth: 0,
        color: '#fff'
    }
});
 
export default FloatingInput;