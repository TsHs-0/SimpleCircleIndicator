import React from 'react';
import Animated from 'react-native-reanimated';
import {Circle, Svg} from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const RingView = ({
  size,
  radius,
  stroke,
  realRadius,
  circumference,
  indicatorColor,
  indicatorBackColor,
  animatedProps = {},
}) => {
  return (
    <Svg width={size} height={size}>
      <Circle
        cx={radius}
        cy={radius}
        r={realRadius}
        fill={'none'}
        stroke={indicatorBackColor}
        strokeWidth={stroke}
        strokeDasharray={circumference}
        strokeLinecap="round"
      />
      <AnimatedCircle
        cx={radius}
        cy={radius}
        r={realRadius}
        fill={'none'}
        stroke={indicatorColor}
        strokeWidth={stroke}
        strokeDasharray={circumference}
        animatedProps={animatedProps}
        strokeLinecap="round"
      />
    </Svg>
  );
};
