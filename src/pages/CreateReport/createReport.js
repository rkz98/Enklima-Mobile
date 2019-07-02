/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import { View, StatusBar, Text, TextInput } from 'react-native';
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
        place: '',
        img: '',
      },
    };
  }

  setTitle = (title) => {
    this.setState({
      report: {
        ...this.state.report,
        title,
      },
    });
  }

  setReport = (report) => {
    this.setState({
      report: {
        ...this.state.report,
        report,
      },
    });
  }

  setPlace = (place) => {
    this.setState({
      place: {
        ...this.state.place,
        place,
      },
    });
  }

  back = () => {
    this.props.navigation.navigate('Menu');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.green} />
        <TouchableOpacity style={styles.createReport}>
          <Text style={styles.createReportText}>Create Report</Text>
        </TouchableOpacity>
        <View style={styles.form}>
          <View style={styles.eachForm}>
            <TextInput
              style={styles.input}
              onChangeText={title => this.setTitle(title)}
              value={this.state.report.title}
              placeholder="Title"
            />
          </View>
          <View style={styles.eachForm}>
            <TextInput
              style={styles.input}
              onChangeText={report => this.setReport(report)}
              value={this.state.report.report}
              placeholder="Report"
            />
          </View>
          <View style={styles.eachForm}>
            <TextInput
              style={styles.input}
              onChangeText={place => this.setPlace(place)}
              value={this.state.report.place}
              placeholder="Place"
            />
          </View>
          <TouchableOpacity style={styles.insertImage}>
            <Text style={styles.insertImageText}>Insert Image</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.save}>
          <Text style={styles.saveText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.back} onPress={this.back}>
          <Text style={styles.backText}>Back</Text>
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
