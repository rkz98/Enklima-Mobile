/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import { View, StatusBar, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import styles from './createReportStyles';
import colors from '~/themes/colors';
import reportsActions from '~/store/reports/actions';

class CreateReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      report: {
        title: '',
        report: '',
        victim: false,
        place: '',
        img: '',
      },
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.green} />
        <TouchableOpacity style={styles.permission}>
          <Text style={styles.permissionText}>ADMIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonsTexts}>A/D Reports</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttons}>
          <Text style={styles.buttonsTexts}>Send</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

CreateReport.navigationOptions = {
  title: 'CreateReport',
};

const mapStateToProps = (state) => {
  return {
    reportsState: state.reports,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reportsActions: bindActionCreators(reportsActions.Creators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateReport);
