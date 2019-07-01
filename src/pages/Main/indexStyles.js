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
  loginForm: {
    justifyContent: 'center',
    flexDirection: 'column',
    height: responsiveHeight(40),
    backgroundColor: colors.green,
    marginHorizontal: responsiveWidth(5),
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
  submit: {
    marginTop: responsiveHeight(10),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    height: responsiveHeight(10),
    backgroundColor: colors.black,
    marginHorizontal: responsiveWidth(5),
  },
  submitText: {
    fontSize: fonts.big,
    color: colors.white,
  },
  enklima: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: responsiveHeight(10),
    marginHorizontal: responsiveWidth(5),
  },
  enklimaText: {
    fontSize: fonts.bigger,
    color: colors.black,
  },
});
