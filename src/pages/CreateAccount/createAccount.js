/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import { View, StatusBar, Text, TextInput, ActivityIndicator, Alert, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './createAccountStyles';
import colors from '~/themes/colors';
import loginActions from '~/store/login/actions';

class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        name: '',
        age: '',
        login: '',
        password: '',
        patent: '',
      },
    };
  }

  componentWillReceiveProps() {
    setTimeout(() => {
      if (this.props.loginState.statusCreate === 'SUCCESS') {
        Alert.alert(
          'Create account success!',
          `Officer ID: ${this.props.loginState.loginCreated._id}`,
          [{ text: 'OK', onPress: () => this.props.navigation.navigate('Menu') }],
        );
        this.props.loginActions.resetStatus();
      }
      if (this.props.loginState.statusCreate === 'FAILURE') {
        Alert.alert(
          'Create account failure',
          'Please try again.',
        );
        this.props.loginActions.resetStatus();
      }
    }, 1);
  }

  setName = (name) => {
    this.setState({
      login: {
        ...this.state.login,
        name,
      },
    });
  }

  setLogin = (login) => {
    this.setState({
      login: {
        ...this.state.login,
        login,
      },
    });
  }

  setAge = (age) => {
    this.setState({
      login: {
        ...this.state.login,
        age,
      },
    });
  }

  setPassword = (password) => {
    this.setState({
      login: {
        ...this.state.login,
        password,
      },
    });
  }

  setPatent = (patent) => {
    this.setState({
      login: {
        ...this.state.login,
        patent,
      },
    });
  }

  createAccount = () => {
    if (this.state.login.name !== '') {
      if (this.state.login.login !== '') {
        if (this.state.login.password !== '') {
          if (this.state.login.patent !== '') {
            if (this.state.login.age !== '') {
              this.props.loginActions.loginCreate(this.state.login);
            }
          }
        }
      }
    }
  }

  back = () => {
    this.props.navigation.navigate('Menu');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.green} />
        <ScrollView contentContainerStyle={styles.form}>
          <View style={styles.eachForm}>
            <TextInput
              style={styles.input}
              onChangeText={name => this.setName(name)}
              value={this.state.login.name}
              placeholder="Name"
            />
          </View>
          <View style={styles.eachForm}>
            <TextInput
              style={styles.input}
              onChangeText={age => this.setAge(age)}
              value={this.state.login.age}
              placeholder="Age"
              keyboardType="numeric"
            />
          </View>
          <View style={styles.eachForm}>
            <TextInput
              style={styles.input}
              onChangeText={patent => this.setPatent(patent)}
              value={this.state.login.patent}
              placeholder="Patent"
            />
          </View>
          <View style={styles.eachForm}>
            <TextInput
              style={styles.input}
              onChangeText={login => this.setLogin(login)}
              value={this.state.login.login}
              placeholder="Login"
            />
          </View>
          <View style={styles.eachForm}>
            <TextInput
              style={styles.input}
              onChangeText={password => this.setPassword(password)}
              value={this.state.login.password}
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.save} onPress={this.createAccount}>
          {this.props.loginState.statusCreate === 'ONGOING'
            ? <ActivityIndicator size="small" color={colors.white} animating />
            : <Text style={styles.saveText}>Save</Text>
          }
        </TouchableOpacity>
        <TouchableOpacity style={styles.back} onPress={this.back}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

CreateAccount.navigationOptions = {
  title: 'CreateAccount',
};

const mapStateToProps = (state) => {
  return {
    reportsState: state.reports,
    loginState: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginActions: bindActionCreators(loginActions.Creators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);
