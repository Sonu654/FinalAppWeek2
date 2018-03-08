'use strict';

import React, { Component } from 'react';
import {
    StyleSheet,
    ListView,
    View,
    Text,
    ActivityIndicator,
    Platform,
    TouchableOpacity,

} from 'react-native';
import { Actions } from "react-native-router-flux";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as myActions from '../Actions';

class UserList extends Component {
    constructor(props) {
        super(props);

        var ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
        this.state = {
            ds: ds
        };
    }

    componentDidMount() {
        this.props.getUser();
    }

    render() {
        if (this.props.loading) {
            return (
                <View style={styles.ActivityIndicatorContainer}>
                    <ActivityIndicator
                        animating={true}
                        style={{
                            height: 80,
                            marginTop: 400
                        }}
                        size='large'
                        color='#0000ff'
                    />
                </View>
            );
        } else {
            return (

                <View style={{
                    flex: 1,
                    backgroundColor: '#F5F5F5',
                    paddingTop: 20,
                    marginTop: Platform.OS == 'IOS' ? 20 : 0,
                }}
                >
                    <View style={styles.header}>
                        <Text style={{ fontSize: 28, color: '#fff', textAlign: 'center', padding: 15 }}>User's List</Text>
                    </View>
                    <View style={styles.container}>
                        <View style={{
                            flex: 1,
                            backgroundColor: '#F5F5F5',
                            paddingTop: 20,
                        }}
                        >
                            <ListView enableEmptySelectiion={true}
                                dataSource={this.state.ds.cloneWithRows(this.props.data)}
                                renderRow={this.renderRow.bind(this)} />
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <View style={styles.menuIcon}>
                            <TouchableOpacity onPress={() => Actions.home()} style={styles.iconBtn}>
                                <Text style={styles.buttonText}>Home</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuIcon}>
                            <TouchableOpacity onPress={() => Actions.camera()} style={styles.iconBtn}>
                                <Text style={styles.buttonText}>Camera</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuIcon}>
                            <TouchableOpacity onPress={() => Actions.list()} style={styles.iconBtn} >
                                <Text style={styles.buttonText}>Users</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuIcon}>
                            <TouchableOpacity onPress={() => Actions.blth()} style={styles.iconBtn}>
                                <Text style={styles.buttonText}>Bluetooth</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.menuIcon}>
                            <TouchableOpacity onPress={() => Actions.pop()} style={styles.iconBtn}>
                                <Text style={styles.buttonText}>Back</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            );
        }
    }

    renderRow(rowData, sectionID, rowID) {
        return (
            <View style={styles.row}>
                <Text style={styles.title}>
                    {(parseInt(rowID) + 1)}{". "}{rowData.userName}
                </Text>
                <Text style={styles.description}>
                    {rowData.FirstName}{" "}{rowData.LastName}
                </Text>
            </View>
        );
    }

};

function mapStateToProps(state, props) {
    return {
        loading: state.userReducer.loading,
        data: state.userReducer.users
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(myActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);


var styles = StyleSheet.create({
    activityIndicatorContainer: {
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    row: {
        borderBottomWidth: 1,
        borderColor: "#ccc",
        padding: 10
    },

    title: {
        fontSize: 15,
        fontWeight: "bold"
    },

    description: {
        marginTop: 5,
        fontSize: 14,
    },
    header: {
        flex: 0.090,
        backgroundColor: '#2c3e50',
    },
    footer: {
        flex: 0.090,
        backgroundColor: '#2c3e50',
        flexDirection: "row",
    },
    container: {
        flex: 0.820,
        backgroundColor: 'white'
    },
    welcome: {
        textAlign: 'center',
        fontSize: 32,
        fontWeight: 'bold'
    },
    buttonContainerReg: {
        backgroundColor: '#c0392b',
        paddingVertical: 15
    },
    userName: {
        textAlign: 'center',
        fontSize: 28,
        fontWeight: 'bold'
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    menuIcon: {
        flex: 0.2,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5
    },
    iconBtn: {
        paddingVertical: 15
    }
});
