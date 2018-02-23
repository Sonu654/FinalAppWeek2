import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from "react-native";
import Button from '../common/ButtonComponent';
import {Actions} from "react-native-router-flux";
let Carousel = require('react-native-carousel');
let {height, width} = Dimensions.get('window');
const CAROUSEL_IMAGE = require ('../img/carousel1.png');
const styles = StyleSheet.create({
  container: {
    width: 375,
    flex: 0.7,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  carouselImage: {
    width: width,
    height: height,
    resizeMode: "contain"
  },
  wrapper1: {
    margin: 20,
    marginRight: 10,
    flex: 0.5,
    height: 40
  },
  wrapper2: {
    margin: 20,
    marginLeft: 10,
    flex: 0.5,
    height: 40
  },
  registerButton: {
    backgroundColor: '#34A873',
  },
  loginButton: {
    borderWidth: 1,
    borderColor: "#4A7EFF",
    backgroundColor: 'transparent',
  },
  registerbuttonText: {
    color: "#fff"
  },
  loginbuttonText: {
    color: "#4A7EFF",
  },
  bottomText: {
    color: "#4A7EFF",
    fontSize : 16
  }
});

class Launch extends React.Component {
  render(){
    return (
      <View style={{flex: 1, flexDirection: "column"}}>
          <Carousel width={375}
            animate={false} // Enable carousel autoplay
            indicatorSize={40}
            indicatorColor="#4A7EFF"
            inactiveIndicatorColor="#dadada"
            indicatorAtBottom={true}
            indicatorOffset={0}
          >
            <View style={styles.container}>
              <Image source={CAROUSEL_IMAGE} styl={styles.carouselImage}/>
            </View>
            <View style={styles.container}>
              <Image source={CAROUSEL_IMAGE} styl={styles.carouselImage}/>
            </View>
            <View style={styles.container}>
              <Image source={CAROUSEL_IMAGE} styl={styles.carouselImage}/>
            </View>
            </Carousel>
      <View style={{flex: 0.1, flexDirection: "row", justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={styles.wrapper1}>
          <Button
            onPress={Actions.register}
            label="Register"
            styles={{button: styles.registerButton, label: styles.registerbuttonText}}
          />
        </View>
        <View style={styles.wrapper2}>
          <Button
            onPress={Actions.login}
            styles={{button: styles.loginButton, label: styles.loginbuttonText}}
            label="Login"
          />
        </View>
      </View>
      <View style={{flex: 0.1, height: 40, flexDirection: "row", justifyContent: 'center', alignItems: 'center'}}>
        <Text style={styles.bottomText}>Hi this is dummy text</Text>
      </View>
    </View>
    );
  }
}

module.exports = Launch;
