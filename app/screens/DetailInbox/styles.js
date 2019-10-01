import { StyleSheet } from 'react-native';
import { scale } from '../../utils/scaling';
import {
  COLOR_WHITE,
  COLOR_TRANSPARENT,
  FONT_BODY1_PRIMARY,
  FONT_OVERLINE_PRIMARY,
  FONT_HEADLINE6_PRIMARY,
  FONT_BODY2_PRIMARY,
  COLOR_GREY_BACKGROUND,
  COLOR_BASE_PRIMARY_MAIN,
  COLOR_GREY_LIGHT
} from '../../styles';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: COLOR_GREY_LIGHT
  },
  contentContainer: {
    flexGrow: 1
  },
  navContainer: {
    height: scale(200)
  },
  statusBar: {
    height: scale(100),
    backgroundColor: COLOR_TRANSPARENT
  },
  navBar: {
    height: scale(100),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: COLOR_TRANSPARENT
  },
  titleStyle: {
    color: COLOR_WHITE,
    fontWeight: 'bold',
    ...FONT_HEADLINE6_PRIMARY
  },
  contentDetail: {
    margin: METRICS.doubleBaseMargin,
    height: scale(360),
    backgroundColor: COLOR_WHITE,
    borderRadius: scale(10)
  },
  titleDetail: {
    marginTop: scale(18),
    alignItems: 'center'
  },
  txtTitle: {
    fontWeight: 'bold',
    ...FONT_BODY1_PRIMARY
  },
  dateDetail: {
    marginTop: scale(20),
    marginHorizontal: scale(16)
  },
  txtCode: {
    fontSize: 13,
    fontWeight: '300'
  },
  descDetail: {
    marginHorizontal: scale(16),
    marginTop: scale(10)
    // paddingBottom: scale(72)
  },
  txtCategory: {
    ...FONT_OVERLINE_PRIMARY
  },
  txtDesc: {
    textAlign: 'justify',
    ...FONT_BODY2_PRIMARY
  },
  containerPrice: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scale(35)
  },
  priceDetail: {
    marginTop: scale(74),
    marginHorizontal: scale(16)
  },
  txtPrice: {
    fontWeight: 'bold',
    ...FONT_BODY2_PRIMARY
  },
  numDetail: {
    marginTop: scale(74),
    marginHorizontal: scale(16)
  },
  txtNum: {
    fontWeight: 'bold',
    ...FONT_BODY2_PRIMARY,
    color: COLOR_BASE_PRIMARY_MAIN
  },
  containerAddMenu: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: scale(30),
    marginBottom: scale(25)
  },
  containerCode: {
    backgroundColor: COLOR_GREY_BACKGROUND,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: scale(30),
    marginVertical: scale(50),
    height: scale(40)
  },
  Code: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: scale(40)
  },
  clipboard: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  containerButtonAdd: {
    backgroundColor: COLOR_BASE_PRIMARY_MAIN,
    borderRadius: scale(5),
    height: scale(40),
    width: scale(217)
  },
  containerShare: {
    marginHorizontal: scale(20),
    marginVertical: scale(5)
  }
});

export default styles;
