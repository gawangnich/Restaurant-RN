import { StyleSheet } from 'react-native';
import { COLOR_GREY_BACKGROUND, COLOR_BASE_PRIMARY_MAIN } from '../../styles';
import { scale } from '../../utils/scaling';
import METRICS from '../../constants/metrics';

const styles = StyleSheet.create({
  // eslint-disable-next-line react-native/no-color-literals
  bodyLeftRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scale(-10)
  },
  bodyCenter: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  blankPage: {
    // flex: 4,
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: scale(150)
  },
  blankImg: {
    height: scale(162),
    width: scale(208)
  },
  blankText: {
    marginTop: METRICS.doubleBaseMargin,
    marginBottom: METRICS.baseMargin,
    fontSize: 18,
    fontWeight: '300'
  },
  blankText1: {
    fontSize: 11,
    fontWeight: '300',
    marginBottom: METRICS.baseMargin
  },
  container: {
    backgroundColor: COLOR_GREY_BACKGROUND,
    marginHorizontal: METRICS.doubleBaseMargin,
    marginVertical: METRICS.baseMargin
  },
  card: {
    borderRadius: 10,
    height: scale(70)
  },
  text: {
    textAlign: 'left',
    fontSize: 12
  },
  // eslint-disable-next-line react-native/no-color-literals
  text1: {
    textAlign: 'left',
    fontSize: 10
  },
  text2: {
    color: COLOR_BASE_PRIMARY_MAIN,
    fontSize: 11,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    backgroundColor: COLOR_GREY_BACKGROUND
  },
  mar: {
    paddingVertical: 10
  }
});

export default styles;
