/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */

import React, { Component } from 'react';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { RNCamera } from 'react-native-camera';
import styles from './cameraStyles';

export default class Camera extends Component {
  takePicture = async () => {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      Alert.alert(
        'Image capture success!',
        data.uri,
        [{ text: 'OK', onPress: () => this.createReport(data) }],
      );
    }
  };

  createReport = (img) => {
    this.props.navigation.navigate('CreateReport', { img });
  }

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={(camera) => {
            this.camera = camera;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            <Text style={styles.buttonText}> CAPTURE </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

Camera.navigationOptions = {
  title: 'Camera',
};
