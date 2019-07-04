/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import { View, StatusBar, Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import styles from './viewReportStyles';
import colors from '~/themes/colors';
import reportsActions from '~/store/reports/actions';

class ViewReport extends Component {

  back = () => {
    this.props.navigation.navigate('ConsultReport');
  }

  viewItem = (report) => {
    this.props.navigation.navigate('ViewReport', report);
  }

  render() {
    const { navigation } = this.props;
    const report = navigation.getParam('report');
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.green} />
        <Image style={styles.image} source={{ uri: `data:image/jpeg;base64,${report.img}` }} />
        <View style={styles.about}>
          <Text style={styles.title}>{report.title}</Text>
          <Text style={styles.others}>ID: {report._id}</Text>
          <Text style={styles.others}>Officer ID: {report.officer_id}</Text>
          <Text style={styles.others}>Created at: {moment(report.created_at).format('DD/MM/YYYY')}</Text>
          <Text style={styles.others}>Victims Quantity: {report.victimsQuantity}</Text>
          <Text style={styles.others}>Report: {report.report}</Text>

        </View>
        <TouchableOpacity style={styles.back} onPress={this.back}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ViewReport.navigationOptions = {
  title: 'ViewReport',
};

const mapStateToProps = (state) => {
  return {
    reportsState: state.reports,
    loginState: state.login,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reportsActions: bindActionCreators(reportsActions.Creators, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewReport);
