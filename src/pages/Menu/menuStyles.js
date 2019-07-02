/* eslint-disable linebreak-style */

import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '~/themes/colors';
import fonts from '~/themes/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: colors.white,
  },
  buttons: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: responsiveHeight(15),
    backgroundColor: colors.green,
    marginHorizontal: responsiveWidth(5),
    borderRadius: 20,
  },
  buttonsTexts: {
    fontSize: fonts.big,
    color: colors.white,
  },
  logout: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(10),
    backgroundColor: colors.red,
    marginHorizontal: responsiveWidth(5),
  },
  logoutText: {
    fontSize: fonts.big,
    color: colors.white,
  },
  menu: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
  },
  menuText: {
    fontSize: fonts.bigger,
    color: colors.black,
  },
});
