/* eslint-disable linebreak-style */

import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '~/themes/colors';
import fonts from '~/themes/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
  },
  buttons: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: responsiveHeight(15),
    backgroundColor: colors.green,
    margin: responsiveWidth(5),
    borderRadius: 20,
  },
  buttonsTexts: {
    fontSize: fonts.big,
    color: colors.white,
  },
  permission: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: responsiveHeight(15),
    margin: responsiveHeight(2),
  },
  permissionText: {
    fontSize: fonts.bigger,
    color: colors.black,
  },
});
