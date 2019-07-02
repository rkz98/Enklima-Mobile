/* eslint-disable linebreak-style */
/* eslint-disable arrow-body-style */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React, { Component } from 'react';
import { View, StatusBar, Text, TextInput, ActivityIndicator } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
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
        img: this.props.navigation.getParam('img') !== undefined ? this.props.navigation.getParam('img') : '',
      },
      thereIsImage: this.props.navigation.getParam('img') !== undefined,
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
      report: {
        ...this.state.report,
        place,
      },
    });
  }

  createReport = () => {
    if (this.state.report.title !== '') {
      if (this.state.report.report !== '') {
        if (this.state.report.place !== '') {
          if (this.state.report.img !== '') {
            this.props.reportsActions.reportCreate(this.state.report);
          }
        }
      }
    }
  }

  camera = () => {
    this.props.navigation.navigate('Camera');
  }

  back = () => {
    this.props.navigation.navigate('Menu');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor={colors.green} />
        <ScrollView contentContainerStyle={styles.form}>
          <TouchableOpacity style={styles.insertImage} onPress={this.camera}>
            <Text style={styles.insertImageText}>{this.state.report.img ? this.state.report.img.uri : 'Insert Image'}</Text>
          </TouchableOpacity>
          <View style={styles.eachForm}>
            <TextInput
              style={styles.input}
              onChangeText={title => this.setTitle(title)}
              value={this.state.report.title}
              placeholder="Title"
              editable={this.state.thereIsImage}
            />
          </View>
          <View style={styles.eachForm}>
            <TextInput
              style={styles.input}
              onChangeText={report => this.setReport(report)}
              value={this.state.report.report}
              placeholder="Report"
              editable={this.state.thereIsImage}
            />
          </View>
          <View style={styles.eachForm}>
            <TextInput
              style={styles.input}
              onChangeText={place => this.setPlace(place)}
              value={this.state.report.place}
              placeholder="Place"
              editable={this.state.thereIsImage}
            />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.save} onPress={this.createReport}>
          {this.props.reportsState.status === 'ONGOING'
            ? <ActivityIndicator size="small" color={colors.black} animating />
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
