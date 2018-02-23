import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image 
} from "react-native";
import {Actions} from "react-native-router-flux";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import Button from '../common/ButtonComponent';
import FloatingInput from '../common/FloatingInput';
import Container from '../common/Container';
import ErrorContainer from '../common/ErrorContainer';

const LOGO = require ('../img/company.png');
export default class Register extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: null,
      email: null,
      password: null,
      confirmPassword: null,
      usernameError: null,
      emailError: null,
      passwordError: null,
      confirmPasswordError: null
    }

    this.usernameChange = this.usernameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.confirmPasswordChange = this.confirmPasswordChange.bind(this);
    this.register = this.register.bind(this);
  }

  componentWillMount(){
  }

  componentDidMount() {
  }

  usernameChange(text) {
    this.setState({
        username: text,
        usernameError: null
    });
  }
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

  confirmPasswordChange(text){
    this.setState({
      confirmPassword: text,
      confirmPasswordError: null
    });
  }

  register(){
    if(!this.state.username){
      this.setState({usernameError: true});
      return;
    }
    if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(this.state.email)){
      this.setState({emailError: true});
      return;
    }
    if(!this.state.password){
      this.setState({passwordError : true});
      return;
    }
    if(this.state.confirmPassword !== this.state.password){
      this.setState({confirmPasswordError: true});
      return;
    }
  }
    
  render(){
    return (
      <KeyboardAwareScrollView ref='scroll' style={styles.scroller}>
          <View style={[styles.container]}>
            <Container
              styles={{containerStyle : styles.logoContainer}}>
              <Image source={LOGO} style={styles.imageStyle} />
            </Container>
            <Container>
              <FloatingInput
                label='Username'
                value={this.state.username}
                returnKeyType='next'
                password={false}
                onChangeText={this.usernameChange}
                onSubmitEditing={null}
              />
            </Container>
            {this.state.usernameError ? 
              <ErrorContainer errorMessage='Username is required.'/>
              : null
            }
            <Container>
              <FloatingInput
                label='Email'
                value={this.state.email}
                returnKeyType='next'
                password={false}
                onChangeText={this.emailChange}
                onSubmitEditing={null}
              />
            </Container>
            {this.state.emailError ? 
              <ErrorContainer errorMessage='Email address is required.'/>
              : null
            }
            <Container>
              <FloatingInput
                label='Password'
                value={this.state.password}
                returnKeyType='next'
                password={true}
                onChangeText={this.passwordChange}
                onSubmitEditing={null}
              />
            </Container>
            {this.state.passwordError ? 
              <ErrorContainer errorMessage='Password is required.'/>
              : null
            }
             <Container>
              <FloatingInput
                label='Confirm Password'
                value={this.state.confirmPassword}
                returnKeyType='done'
                password={true}
                onChangeText={this.confirmPasswordChange}
                onSubmitEditing={null}
              />
            </Container>
            {this.state.confirmPasswordError ? 
              <ErrorContainer errorMessage="Passwords doesn't match."/>
              : null
            }
            <Container>
                <Button 
                  label="Register"
                  onPress={this.register}
                  styles={{button: styles.registerButton, label: styles.registerbuttonText}}
                />
            </Container>
           <Container
              styles={{containerStyle : styles.linkContainer}}>
                <Button 
                  label="Already have an account? Login"
                  onPress={Actions.pop}
                  styles={{button: styles.linkButton, label: styles.linkbuttonText}}
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
    flexDirection: 'column'
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
    backgroundColor: 'transparent',
    alignSelf:'stretch',
    borderWidth: 1,
    borderColor: "#fff"
  },
  registerbuttonText: {
    color: "#fff"
  },
  linkButton: {
    backgroundColor: 'transparent',
  },
  linkbuttonText: {
    color: "#4A7EFF"
  },
  linkContainer: {
    marginTop: 10,
    marginBottom :0
  }
});


