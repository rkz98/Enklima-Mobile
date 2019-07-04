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
  about: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    backgroundColor: colors.black_2,
    alignItems: 'center',
    marginTop: responsiveHeight(2),
    marginHorizontal: responsiveWidth(2),
    paddingVertical: responsiveWidth(4),
    borderRadius: 20,
  },
  title: {
    fontSize: fonts.big,
    color: colors.green,
  },
  others: {
    marginVertical: 8,
    fontSize: fonts.regular,
    color: colors.white,
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
    textAlign: 'center',
  },
  image: {
    width: responsiveWidth(100),
    height: 300,
  },
});
