'use strict';

import React,{ Component } from 'react';
import {
  StyleSheet,
  ListView,
  View,
  Text,
  ActivityIndicator
} from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as myActions from '../Actions';

class UserList extends Component{
    constructor(props){
      super(props);

      var ds=new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state={
        ds:ds
      };
    }

    componentDidMount(){
     this.props.getUser();
   }

    render(){
       if(this.props.loading){
         return(
             <View style={styles.ActivityIndicatorContainer}>
                <ActivityIndicator
                  animating={true}
                  style={{height:80,
                  marginTop:400
                }}
                  size='large'
                  color='#0000ff'
                  />
             </View>
         );
       }else{
         return(
             <View style={{
               flex:1,
               backgroundColor:'#F5F5F5',
               paddingTop:20,
             }}
             >
                <ListView enableEmptySelectiion={true}
                 dataSource={this.state.ds.cloneWithRows(this.props.data)}
                 renderRow={this.renderRow.bind(this)}  />
             </View>
         );
       }
     }

renderRow(rowData, sectionID, rowID){
  return(
      <View style={styles.row}>
          <Text style={styles.title}>
                {(parseInt(rowID)+1)}{". "}{rowData.userName}
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
    activityIndicatorContainer:{
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },

    row:{
        borderBottomWidth: 1,
        borderColor: "#ccc",
        // height: 50,
        padding: 10
    },

    title:{
        fontSize: 15,
        fontWeight: "bold"
    },

    description:{
        marginTop: 5,
        fontSize: 14,
    }
});
