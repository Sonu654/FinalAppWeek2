import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";

class ProfileView extends React.Component {
    render(){
        return (
            <View style={styles.container}>
                <Text>Search Screen</Text>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    }
});

export default ProfileView;
