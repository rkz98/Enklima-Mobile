/* eslint-disable react/prop-types */
/* eslint-disable arrow-body-style */
/* eslint-disable object-curly-newline */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import { Text, View, StatusBar, TextInput, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './indexStyles';
import colors from '~/themes/colors';
import loginActions from '~/store/login/actions';


class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        username: '',
        password: '',
      },
    };
  }

  componentDidMount() {
  }

  setUsername = (username) => {
    this.setState({
      login: {
        ...this.state.login,
        username,
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

  showCreators = () => {
    return (
      Alert.alert(
        'App made by',
        'Kauê Rodrigues & Lyncon Kusminski',
      )
    );
  }

  loginRequest = async () => {
    this.props.navigation.navigate('Menu');
    /*if (this.props.loginState.status === 'SUCCESS') {
      this.props.navigation.navigate('Menu');
    } else if (this.props.loginState.status === 'ONGOING') {
      Alert.alert(
        'Please wait',
        'We are trying to verify your login credentials',
      );
    } else {
      Alert.alert(
        'Login failure',
        'Please verify your credentials.',
      );
    }*/
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.green} />
        <TouchableOpacity style={styles.enklima} onPress={this.showCreators}>
          <Text style={styles.enklimaText}>Énklima Mobile</Text>
        </TouchableOpacity>
        <View style={styles.loginForm}>
          <View style={styles.eachForm}>
            <TextInput
              style={styles.input}
              onChangeText={username => this.setUsername(username)}
              value={this.state.login.username}
              placeholder="Username"
            />
          </View>
          <View style={styles.eachForm}>
            <TextInput
              style={styles.input}
              onChangeText={password => this.setPassword(password)}
              value={this.state.login.password}
              placeholder="Password"
              // eslint-disable-next-line react/jsx-boolean-value
              secureTextEntry={true}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.submit} onPress={this.loginRequest}>
          <Text style={styles.submitText}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

Main.navigationOptions = {
  title: 'Main',
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
