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
        victimsQuantity: '',
        img: this.props.navigation.getParam('img') !== undefined ? this.props.navigation.getParam('img') : '',
      },
      thereIsImage: this.props.navigation.getParam('img') !== undefined,
    };
  }

  componentWillReceiveProps() {
    setTimeout(() => {
      if (this.props.reportsState.statusCreate === 'SUCCESS') {
        Alert.alert(
          'Create report success!',
          `Report ID: ${this.props.reportsState.report._id}`,
          [{ text: 'OK', onPress: () => this.props.navigation.navigate('Menu') }],
        );
        this.props.reportsActions.resetStatus();
      }
      if (this.props.reportsState.statusCreate === 'FAILURE') {
        Alert.alert(
          'Create report failure',
          'Please try again.',
        );
        this.props.reportsActions.resetStatus();
      }
    }, 1);
  }

  setTitle = (title) => {
    this.setState({
      report: {
        ...this.state.report,
        title,
      },
    });
  }

  setVictimQuantity = (victimsQuantity) => {
    this.setState({
      report: {
        ...this.state.report,
        victimsQuantity,
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
            if (this.state.report.victimsQuantity !== '') {
              const report = {
                title: this.state.report.title,
                officer_id: this.props.loginState.login._id,
                report: this.state.report.report,
                place: this.state.report.place,
                img: this.state.report.img.base64,
                victimsQuantity: this.state.report.victimsQuantity,
              };
              this.props.reportsActions.reportCreate(report);
            }
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
            {!this.state.thereIsImage
              ? <Text style={styles.insertImageText}>Insert a Image</Text>
              : <Image style={styles.image} source={{ uri: this.state.report.img.uri }} />
            }
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
              onChangeText={victimQuantity => this.setVictimQuantity(victimQuantity)}
              value={this.state.report.victimQuantity}
              placeholder="Victim Quantity"
              editable={this.state.thereIsImage}
              keyboardType="numeric"
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
          {this.props.reportsState.statusCreate === 'ONGOING'
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

CreateReport.navigationOptions = {
  title: 'CreateReport',
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateReport);
