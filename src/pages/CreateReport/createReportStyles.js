/* eslint-disable linebreak-style */

import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '~/themes/colors';
import fonts from '~/themes/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
  form: {
    justifyContent: 'center',
    flexDirection: 'column',
    height: responsiveHeight(65),
    backgroundColor: colors.green,
    margin: responsiveWidth(5),
    borderRadius: 20,
  },
  eachForm: {
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: colors.white,
    margin: responsiveWidth(5),
  },
  input: {
    height: responsiveHeight(10),
    color: colors.black,
    fontSize: fonts.regular,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
  },
  insertImage: {
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    height: responsiveHeight(10),
    backgroundColor: colors.white,
    margin: responsiveWidth(5),
  },
  insertImageText: {
    fontSize: fonts.regular,
    color: colors.black,
  },
  back: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(10),
    backgroundColor: colors.black,
    margin: responsiveWidth(5),
  },
  backText: {
    fontSize: fonts.big,
    color: colors.white,
  },
  save: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(10),
    backgroundColor: colors.green,
    marginHorizontal: responsiveWidth(5),
  },
  saveText: {
    fontSize: fonts.big,
    color: colors.white,
  },
});
