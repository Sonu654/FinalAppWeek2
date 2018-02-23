
import React, { Component } from 'react';
 
import {
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
 
const Button = (props) => {
    function getContent(){
        if(props.children){
            return props.children;
        }
        return <Text style={[
                props.noDefaultStyles ? '' : styles.labelStyle,
                props.styles ? props.styles.label : '']}
            >{props.label}</Text>
    }
 
    return (
        <TouchableOpacity 
            onPress={props.onPress} 
            style={[
                props.noDefaultStyles ? '' : styles.button, 
                props.styles ? props.styles.button : ''
            ]}
        >
        { getContent() }
        </TouchableOpacity>
    );
}
 
const styles = StyleSheet.create({
    labelStyle: {
        fontSize: 16
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 3,
        height: 45
    },
});
 
export default Button;
