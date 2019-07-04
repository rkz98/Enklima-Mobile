/* eslint-disable linebreak-style */

import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import colors from '~/themes/colors';
import fonts from '~/themes/fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.black,
  },
  form: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: colors.black,
    marginHorizontal: responsiveWidth(2),
    paddingVertical: responsiveWidth(2),
  },
  eachForm: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.black_2,
    height: 150,
    margin: responsiveWidth(2),
    borderRadius: 20,
  },
  eachFormTitle: {
    fontSize: fonts.big,
    color: colors.green,
    textAlign: 'center',
  },
  eachFormReport: {
    fontSize: fonts.regular,
    color: colors.white,
    textAlign: 'center',
  },
  eachFormDate: {
    fontSize: fonts.regular,
    color: colors.green,
    textAlign: 'center',
  },
  eachFormLeft: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  eachFormRight: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'column',
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
    color: colors.green,
  },
  image: {
    width: 150,
    height: 150,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
});
