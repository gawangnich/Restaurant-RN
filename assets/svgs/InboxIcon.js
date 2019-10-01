import React from 'react';
import Svg, { Path, Circle } from 'react-native-svg';

const SvgInbox = props => (
  <Svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <Circle cx="10" cy="11" r="10" fill="#FF4057" />
    <Path
      d="M9.99996 12.5144L8.56491 11.2583L4.46191 14.7755C4.61105 14.9139 4.81239 15 5.03444 15H14.9655C15.1867 15 15.3872 14.9139 15.5355 14.7755L11.435 11.2583L9.99996 12.5144Z"
      fill="white"
    />
    <Path
      d="M15.5378 6.93889C15.3887 6.7997 15.1882 6.71436 14.9653 6.71436H5.03425C4.81303 6.71436 4.61252 6.80052 4.46338 6.94055L9.99977 11.6857L15.5378 6.93889Z"
      fill="white"
    />
    <Path d="M4.2002 7.44092V14.3245L8.20459 10.9217L4.2002 7.44092Z" fill="white" />
    <Path d="M11.7954 10.9227L15.7998 14.3256V7.43945L11.7954 10.9227Z" fill="white" />
    <Circle cx="15.5" cy="2.5" r="2.25" fill="#FF4057" stroke="white" stroke-width="0.5" />
  </Svg>
);

export default SvgInbox;
