import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';
import FontAwesome, { Icons } from 'react-native-fontawesome';
import Launch from './components/launch';
import Login from './components/login';
import Home from './components/home';
import Register from './components/register';
import MapView from './components/mapView';
import TabView from './components/tabView';
import SETTING_ICON from './assets/images/settings.png';
import MENU_ICON from './assets/images/menu.png';
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


export default class MyRouter extends Component {
    constructor(props) {
        super(props);
        console.log("inside Router : Props :", this.props, " States : ", this.state);
    }

    render() {
        return (
            <Router hideNavBar hideTabBar>
                <Stack key="root" hideNavBar hideTabBar>
                    <Scene key="launch" component={Launch} title="Launch" />
                    <Stack key="loginStack" hideNavBar hideTabBar>
                        <Scene key="login" component={Login} title="Login" />
                        <Scene key="register" component={Register} title="Register" />
                    </Stack>
                    <Stack key="homeStack" hideNavBar hideTabBar>
                        <Scene key="tab_1" name="Home" hideNavBar hideTabBar>
                            <Scene key='home' component={Home} initial title="Home"> </Scene>
                            <Scene key='map' component={MapView} title="Map"></Scene>
                            <Scene key='search' component={TabView} title="Search"></Scene>
                            <Scene key='user' component={Home} title="User"></Scene>
                            <Scene key='more' component={Home} title='More'></Scene>
                        </Scene>
 {/*  

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
                        </Scene>Î
                                   */}
                    </Stack>
                </Stack>

            </Router>
        );
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