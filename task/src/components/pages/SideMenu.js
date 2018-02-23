import React, { Component, PropTypes } from 'react'
import {Text, View, Image, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'

import { Actions } from 'react-native-router-flux';
import DismissKeyboard from 'react-native-dismiss-keyboard';
import Icon from 'react-native-vector-icons/FontAwesome';

const PROFILE_ICON = require ('../img/user.png');

// onPress={() => { drawer.close(); DismissKeyboard(); Actions.schedule.call() }}

const styles = StyleSheet.create({
  sidemenumaindiv: {
    flex:1,
    flexDirection: 'column'
  },
  sidemenuitems: {
    padding:10,
    paddingBottom: 0,
    borderBottomColor: '#dadada',
    borderBottomWidth: 1,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  sidemenuText: {
    fontSize: 16,
    textAlign:'left',
    color:'#666',
    fontWeight:'normal',
    marginLeft: 10
  }
});

export default class SideMenu extends Component {
	constructor(props){
		super(props);
		this.state = {
		}
	}
	static contextTypes = {
		drawer: PropTypes.object.isRequired,
	};

	componentWillMount(){
	}

	componentDidMount(){
	}

	render() {
		const { drawer } = this.context;
		return (
			<View style={styles.sidemenumaindiv}>
				<View style={{flexDirection: 'row',height:130, alignItems:'center', backgroundColor:'#f9f9f9'}}>
					<Image
						source={ PROFILE_ICON }
						style={{flexWrap: 'wrap', width: 70, height:70, marginLeft: 10, borderRadius: 35}}
					/>
					<View style={{flexDirection : 'row', height:70, alignItems:'center', marginLeft: 10 }}>
						<Text style={{fontSize:18}}>Demo User</Text>
					</View>
				</View>
        <ScrollView>
  				<TouchableOpacity style={styles.sidemenuitems}
            onPress={() => { drawer.close(); DismissKeyboard()}}>
  						<Icon name="cog" size={20} color="#0091EA" />
  						<Text style={styles.sidemenuText}>{'Settings'}</Text>
  				</TouchableOpacity>
          <TouchableOpacity style={styles.sidemenuitems}
            onPress={() => { drawer.close(); DismissKeyboard()}}>
  					<Icon name="share-alt" size={20} color="#0091EA" />
  					<Text style={styles.sidemenuText}>{'Share'}</Text>
  				</TouchableOpacity>
          <TouchableOpacity style={styles.sidemenuitems}
            onPress={() => { drawer.close(); DismissKeyboard()}}>
  					<Icon name="info-circle" size={20} color="#0091EA" />
  					<Text style={styles.sidemenuText}>{'About Us'}</Text>
  				</TouchableOpacity>
          <TouchableOpacity style={styles.sidemenuitems}
            onPress={() => { drawer.close(); DismissKeyboard()}}>
  					<Icon name="envelope" size={20} color="#0091EA" />
  					<Text style={styles.sidemenuText}>{'Contact Us'}</Text>
  				</TouchableOpacity>
          <TouchableOpacity style={styles.sidemenuitems}
            onPress={() => { drawer.close(); DismissKeyboard()}}>
  					<Icon name="star" size={20} color="#0091EA" />
  					<Text style={styles.sidemenuText}>{'Rate Us'}</Text>
  				</TouchableOpacity>
        </ScrollView>
			</View>
		)
	}
}

SideMenu.propTypes = {
	drawer: PropTypes.object
}
