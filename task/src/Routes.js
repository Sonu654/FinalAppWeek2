import React, {
  Component,
} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Scene,
  Router,
  Switch,
  Modal,
  Actions,
  ActionConst,
} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Launch from './components/pages/Launch';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import NavigationDrawer from './components/pages/NavigationDrawer';

import TabView from './components/pages/TabpwView';
import MapView from './components/pages/MapView';
import SearchView from './components/pages/SearchView';
import ProfileView from './components/pages/ProfileView';
import MoreView from './components/pages/MoreView';

const MENU_ICON = require('./components/img/menu.png');
const SETTINGS_ICON = require('./components/img/settings.png');

class TabIcon extends Component {
  render() {
    let color = this.props.selected ? '#666' : '#fff';
    let title = this.props.title;
    return (
      <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', alignSelf: 'center', justifyContent: 'center' }}>
        <Icon style={{ color: color }} name={this.props.iconName || "circle"} size={18} />
        <Text style={{ color: color, fontSize: 12 }}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarStyle: {
    backgroundColor: '#0091EA'
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#84FFFF',
  },
});

// define this based on the styles/dimensions you use
const getSceneStyle = (props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  };
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

class RouterComponent extends Component {
  render() {
    return (
      <Router drawerImage={MENU_ICON} getSceneStyle={getSceneStyle}>
        <Scene key="modal" component={Modal} >
          <Scene key="root" hideNavBar hideTabBar
            navigationBarStyle={{ backgroundColor: '#0091EA' }}
            titleStyle={{ color: "#FFF" }}
            leftButtonIconStyle={{ tintColor: '#FFFFFF' }}>
            <Scene key="launch" component={Launch} title="Launch" initial />
            <Scene key="login" direction="horizontal" component={Login} title="Login" hideNavBar={true} />
            <Scene key="register" component={Register} title="Register" hideNavBar={true} />
            <Scene key="tabbar" component={NavigationDrawer}>
              <Scene
                key="main"
                tabs
                tabBarStyle={styles.tabBarStyle}
                tabBarSelectedItemStyle={styles.tabBarSelectedItemStyle}
              >

                <Scene key="tab1" initial title="Home"
                  iconName="home" icon={TabIcon}
                  navigationBarStyle={{ backgroundColor: '#0091EA' }}
                  titleStyle={{ color: "#FFF" }}
                  leftButtonIconStyle={{ tintColor: '#FFFFFF' }}
                >
                  <Scene
                    key="tab1_1"
                    component={TabView}
                    title="Home"
                    onRight={() => alert('Right button')}
                    rightButtonImage={SETTINGS_ICON}
                    rightButtonIconStyle={{ height: 25, width: 25 }}
                  />
                  <Scene
                    key="tab1_2"
                    component={TabView}
                    title="Tab #1_2"
                  />
                </Scene>
                <Scene key="tab2" title="Map"
                  iconName="map" icon={TabIcon}
                  navigationBarStyle={{ backgroundColor: '#0091EA' }}
                  titleStyle={{ color: "#FFF" }}
                  leftButtonIconStyle={{ tintColor: '#FFFFFF' }}>
                  <Scene
                    key="tab2_1"
                    title="Map"
                    component={MapView}
                    onRight={() => alert('Right button')}
                    rightButtonImage={SETTINGS_ICON}
                    rightButtonIconStyle={{ height: 25, width: 25 }}
                  />
                </Scene>

                <Scene key="tab3" component={TabView} title="Search"
                  iconName="search" icon={TabIcon}
                  navigationBarStyle={{ backgroundColor: '#0091EA' }}
                  titleStyle={{ color: "#FFF" }}
                  leftButtonIconStyle={{ tintColor: '#FFFFFF' }}
                  onRight={() => alert('Right button')}
                  rightButtonImage={SETTINGS_ICON}
                  rightButtonIconStyle={{ height: 25, width: 25 }} />

                <Scene key="tab4" component={TabView} title="User"
                  iconName="user" icon={TabIcon}
                  navigationBarStyle={{ backgroundColor: '#0091EA' }}
                  titleStyle={{ color: "#FFF" }}
                  leftButtonIconStyle={{ tintColor: '#FFFFFF' }}
                  onRight={() => alert('Right button')}
                  rightButtonImage={SETTINGS_ICON}
                  rightButtonIconStyle={{ height: 25, width: 25 }} />

                <Scene key="tab5" component={TabView} title="More"
                  iconName="ellipsis-h" icon={TabIcon}
                  navigationBarStyle={{ backgroundColor: '#0091EA' }}
                  titleStyle={{ color: "#FFF" }}
                  leftButtonIconStyle={{ tintColor: '#FFFFFF' }}
                  onRight={() => alert('Right button')}
                  rightButtonImage={SETTINGS_ICON}
                  rightButtonIconStyle={{ height: 25, width: 25 }} />

              </Scene>
            </Scene>
          </Scene>
        </Scene>
      </Router>
    );
  }
}

export default RouterComponent;
