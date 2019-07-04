/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import { View, StatusBar, Text, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './menuStyles';
import colors from '~/themes/colors';
import loginActions from '~/store/login/actions';

class Menu extends Component {
    logout = () => {
      this.props.loginActions.logout();
      this.props.navigation.navigate('Main');
    }

    registerReport = () => {
      this.props.navigation.navigate('CreateReport');
    }

    render() {
      return (
        <View style={styles.container}>
          <StatusBar barStyle="light-content" backgroundColor={colors.green} />
          <TouchableOpacity style={styles.welcome}>
            <Text style={styles.welcomeText}>Hey, {this.props.loginState.login.name}!</Text>
            <Text style={styles.wannaDo}>What you wanna do?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons}>
            <Text style={styles.buttonsText}>Consult Reports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttons} onPress={this.registerReport}>
            <Text style={styles.buttonsText}>Create Report</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logout} onPress={this.logout}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      );
    }
}

Menu.navigationOptions = {
  title: 'Menu',
};

const mapStateToProps = (state) => {
  return {
    loginState: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginActions: bindActionCreators(loginActions.Creators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
