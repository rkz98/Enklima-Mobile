/* eslint-disable linebreak-style */

import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '~/themes/colors';
import fonts from '~/themes/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: colors.black,
  },
  buttons: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: responsiveHeight(12),
    backgroundColor: colors.green,
    margin: responsiveWidth(5),
    borderRadius: 20,
  },
  buttonsText: {
    fontSize: fonts.big,
    color: colors.white,
  },
  logout: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(10),
    backgroundColor: colors.red,
    margin: responsiveWidth(5),
    borderRadius: 20,
  },
  logoutText: {
    fontSize: fonts.big,
    color: colors.white,
  },
  welcome: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: responsiveHeight(10),
    backgroundColor: colors.black,
    margin: responsiveWidth(5),
    borderRadius: 20,
  },
  welcomeText: {
    fontSize: fonts.middle,
    color: colors.white,
  },
  wannaDo: {
    fontSize: fonts.regular,
    color: colors.green,
  },
});
