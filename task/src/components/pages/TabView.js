import React from 'react';
import {PropTypes} from "react";
import {StyleSheet, Text, View, SectionList} from "react-native";
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const contextTypes = {
  drawer: React.PropTypes.object,
};

const propTypes = {
  name: PropTypes.string,
  sceneStyle: View.propTypes.style,
  title: PropTypes.string,
};

const TabView = (props, context) => {
  const drawer = context.drawer;
  return (
    <View style={[styles.container]}>
      <Text>Tab {props.title}</Text>
      {props.name === 'tab1_1' &&
        <Button onPress={Actions.tab1_2}>Next screen after home tab</Button>
      }
    </View>
  );
};

TabView.contextTypes = contextTypes;
TabView.propTypes = propTypes;

export default TabView;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  topIcon: {
    marginTop: 30,
    marginBottom: -15,
    zIndex: 1
  },
  bottomIcon: {
    marginTop: -15,
    zIndex: 1
  },
  leftIcon: {
    marginTop: 45,
    marginRight: -15,
    zIndex: 1
  },
  rightIcon: {
    marginTop: 45,
    marginLeft: -15,
    zIndex: 1
  },
  circleView : {
    zIndex: 0,
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: "red",
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center'
  }
});