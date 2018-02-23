import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

// define erorr container
const ErrorContainer = (props) => {
  return(
    <View style={{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 20,
        marginRight: 20,
        }}>
        <Text style={{color: '#F44336'}}>{props.errorMessage}</Text>
    </View>
  );
}

export default ErrorContainer;
