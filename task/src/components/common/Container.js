import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity
} from 'react-native';
import DismissKeyboard from 'react-native-dismiss-keyboard';

// define container
const Container = (props) => {
  return(
    <TouchableOpacity  onPress={()=>{ DismissKeyboard()}} activeOpacity={1}>
        <View style={[
                props.noDefaultStyles ? '' : styles.labelContainer, 
                props.styles ? props.styles.containerStyle : ''
            ]}>
            {props.children}
        </View>
    </TouchableOpacity>
  );
}

const styles = {
    labelContainer:{
      margin: 10,
      marginLeft: 20,
      marginRight: 20,
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent : 'center'
    }
};

export default Container;