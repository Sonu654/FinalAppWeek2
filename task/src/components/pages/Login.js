import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { Actions } from "react-native-router-flux";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import FloatingInput from "../common/FloatingInput";
import Button from "../common/ButtonComponent";
import Container from "../common/Container";
import ErrorContainer from "../common/ErrorContainer";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { listUsers, login } from "../../actions/listUserAction";

const LOGO = require("../img/company.png");

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      password: null,
      emailError: null,
      passwordError: null
    };

    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.login = this.login.bind(this);
  }

  componentWillMount() {
    this.props.listUsers();
  }

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    if (nextProps.listData) {
      alert(nextProps.listData.email);
    }
    console.log("nextProps", nextProps);
  }

  componentWillUnmount() {}

  emailChange(text) {
    this.setState({
      email: text,
      emailError: null
    });
  }
  passwordChange(text) {
    this.setState({
      password: text,
      passwordError: null
    });
  }

  login() {
    // if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)){
    //   this.setState({emailError: true});
    //   return;
    // }
    // if(!this.state.password){
    //   this.setState({passwordError : true});
    //   return;
    // }
    // alert(this.state.email);
    this.props.login(this.state.email);
    // Actions.tabbar();
  }

  render() {
    return (
      <KeyboardAwareScrollView ref="scroll" style={styles.scroller}>
        <View style={[styles.container]}>
          <Container styles={{ containerStyle: styles.logoContainer }}>
            <Image source={LOGO} style={styles.imageStyle} />
          </Container>
          <Container>
            <FloatingInput
              label="Email"
              value={this.state.email}
              returnKeyType="next"
              password={false}
              onChangeText={this.emailChange}
              onSubmitEditing={null}
            />
          </Container>
          {this.state.emailError ? (
            <ErrorContainer errorMessage="Email address is required." />
          ) : null}
          <Container>
            <FloatingInput
              label="Password"
              value={this.state.password}
              returnKeyType="done"
              password={true}
              onChangeText={this.passwordChange}
              onSubmitEditing={null}
            />
          </Container>
          {this.state.passwordError ? (
            <ErrorContainer errorMessage="Password is required." />
          ) : null}
          <Container>
            <Button
              label="Login"
              onPress={this.login}
              styles={{
                button: styles.registerButton,
                label: styles.registerbuttonText
              }}
            />
          </Container>
          <Container styles={{ containerStyle: styles.linkContainer }}>
            <Button
              label="Forgot Password?"
              onPress={() => alert("In Progress")}
              styles={{
                button: styles.linkButton,
                label: styles.linkbuttonText
              }}
            />
          </Container>
          <Container styles={{ containerStyle: styles.linkContainer }}>
            <Button
              label="Don't have an account? Register"
              onPress={Actions.register}
              styles={{
                button: styles.linkButton,
                label: styles.linkbuttonText
              }}
            />
          </Container>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scroller: {
    backgroundColor: "#2962FF"
  },
  container: {
    flex: 1,
    flexDirection: "column"
  },
  logoContainer: {
    marginTop: 100
  },
  imageStyle: {
    width: 80,
    height: 80,
    borderRadius: 40
  },
  registerButton: {
    flex: 1,
    backgroundColor: "transparent",
    alignSelf: "stretch",
    borderWidth: 1,
    borderColor: "#fff"
  },
  registerbuttonText: {
    color: "#fff"
  },
  linkButton: {
    backgroundColor: "transparent"
  },
  linkbuttonText: {
    color: "#4A7EFF"
  },
  linkContainer: {
    marginTop: 10,
    marginBottom: 0
  }
});

//mapping reducer states to component
function mapStateToProps(state) {
  // alert(JSON.stringify(state.listData));
  return {
    listData: state.listData
  };
}

//mapping dispatcheable actions to component
function mapDispathToProps(dispatch) {
  return bindActionCreators({ listUsers, login }, dispatch);
}

//Connecting component with redux structure to get or dispatch data
export default connect(mapStateToProps, mapDispathToProps)(Login);
