import React from 'react';
import Svg, { Path } from 'react-native-svg';

const SvgCheck = props => (
  <Svg width="11" height="12" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Path
      d="M8.22718 0H1.68173C1.08173 0 0.59082 0.490909 0.59082 1.09091V8.72727H1.68173V1.09091H8.22718V0ZM9.86355 2.18182H3.86355C3.26355 2.18182 2.77264 2.67273 2.77264 3.27273V10.9091C2.77264 11.5091 3.26355 12 3.86355 12H9.86355C10.4635 12 10.9545 11.5091 10.9545 10.9091V3.27273C10.9545 2.67273 10.4635 2.18182 9.86355 2.18182ZM9.86355 10.9091H3.86355V3.27273H9.86355V10.9091Z"
      fill="#C4C4C4"
    />
  </Svg>
);

export default SvgCheck;
