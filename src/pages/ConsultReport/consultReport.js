/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import { View, StatusBar, Text, Image, ActivityIndicator } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import moment from 'moment';
import styles from './consultReportStyles';
import colors from '~/themes/colors';
import reportsActions from '~/store/reports/actions';

class ConsultReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: [],
    };
  }

  componentDidMount() {
    this.props.reportsActions.reportsRequest();
  }

  componentWillReceiveProps() {
    setTimeout(() => {
      if (this.props.reportsState.status === 'SUCCESS') {
        this.setState({
          reports: this.props.reportsState.reports,
        }, () => this.props.reportsActions.resetStatus());
      }
    }, 1);
  }

  back = () => {
    this.props.navigation.navigate('Menu');
  }

  viewItem = (report) => {
    this.props.navigation.navigate('ViewReport', { report });
  }

  renderItem = (report) => {
    return (
      <TouchableOpacity style={styles.eachForm} key={report._id} onPress={() => this.viewItem(report)}>
        <View style={styles.eachFormLeft}>
          <Image style={styles.image} source={{ uri: `data:image/jpeg;base64,${report.img}` }} />
        </View>
        <View style={styles.eachFormRight}>
          <Text style={styles.eachFormTitle}>{report.title}</Text>
          <Text style={styles.eachFormDate}>{moment(report.created_at).format('DD/MM/YYYY')}</Text>
          <Text style={styles.eachFormReport}>{report.report}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.green} />
        <ScrollView contentContainerStyle={styles.form}>
          {this.props.reportsState.status === 'ONGOING'
            ? <ActivityIndicator size="small" color={colors.green} animating />
            : this.state.reports.map(report => this.renderItem(report))
          }
        </ScrollView>
        <TouchableOpacity style={styles.back} onPress={this.back}>
          <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

ConsultReport.navigationOptions = {
  title: 'ConsultReport',
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

export default connect(mapStateToProps, mapDispatchToProps)(ConsultReport);
