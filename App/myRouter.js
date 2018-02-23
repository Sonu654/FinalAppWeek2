import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Router,
  Stack,
  Scene
} from 'react-native-router-flux';
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import List from './Components/List';
import Details from './Components/Details';
import Bluetooth from './Components/Bluetooth';
import Camera from './Components/Camera';

export default class myRouter extends Component {

  render() {
    return (
      /*<Router key="main" navigationBarStyle={styles.navBar}
        titleStyle={styles.navBarTitle}
        barButtonTextStyle={styles.barButtonTextStyle}
        barButtonIconStyle={styles.barButtonIconStyle}
        back
        navBarButtonColor={{ color: '#fff' }}
     >
         <Scene key="root" hideNavBar>
          <Stack key="loginStack"> 
            <Scene Key="login" component={Login} title="Please Login" initial/>
            <Scene Key="register" component={Register} title="Register" />
          </Stack> 
          <Stack key="dashboardStack">
            <Scene Key="home" component={Home} title="Home" />
            <Scene Key="list" component={List} title="List" />
            <Scene Key="details" component={Details} title="Details" />
          </Stack>
        </Scene> 
    </Router>*/
      <Router navigationBarStyle={styles.navBar}
        titleStyle={styles.navBarTitle}
        barButtonTextStyle={styles.barButtonTextStyle}
        barButtonIconStyle={styles.barButtonIconStyle}
        navBarButtonColor={{ color: '#fff' }}>
        <Stack key="root">
          <Stack key="loginStack" hideNavBar>
            <Scene key="login" component={Login} title="Please Login" initial />
            <Scene key="register" component={Register} title="Register" />
          </Stack>
          <Stack key="dashboardStack" hideNavBar back>
            <Scene key="home" component={Home} title="Home" />
            <Scene key="list" component={List} title="List" />
            <Scene key="details" component={Details} title="Details" />
            <Scene key="camera" component={Camera} title="Camera" />
            <Scene key="blth" component={Bluetooth} title="Bluetooth" />
            
          </Stack>
        </Stack>
      </Router>
    );
  }
}


const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#34495e'
  },
  navBarTitle: {
    color: '#fff',
    textAlign: 'center'
  },
  barButtonIconStyle: {
    color: 'rgb(255,255,255)'
  },
  barButtonTextStyle: {
    color: '#FFFFFF'
  }
});
