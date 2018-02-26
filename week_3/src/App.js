import React, { Component } from 'react';
import { View, StyleSheet, ActivityIndicator, Platform } from 'react-native';
import MyRoutes from './myRoutes';



export default class App extends Component {
    constructor(props) {
        super(props)
        this.state - {
            isLoading: true
        }
        console.log("Inside App Component :", this.state);
    }

    comonentWillMount = () => {
        this.isLoading = false;
        setTimeout(() => {
            console.log("timeout")
        }, 2000);
    }

    componentDidMount = () => {
        this.isLoading = true;
    }


    render() {
        return (
            <MyRoutes />
        )
    }
}

var styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

});