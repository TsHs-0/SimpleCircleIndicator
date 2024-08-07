import React, {useEffect} from 'react';
import {View} from 'react-native';
import {
  useAnimatedProps,
  useSharedValue,
  withTiming,
  Easing,
} from 'react-native-reanimated';
import {STROKE_WIDTH, SVG_SIZE} from '../constants';
import {RingView} from './RingView';
import {InsideButton} from './InsideButton';
import {styles} from '../styles';

export const CircleIndicator = ({
  step = 0,
  stepCount = 0,
  size = 'small',
  indicatorColor = 'blue',
  indicatorBackColor = 'aqua',
  showButton = true,

  //custom
  customSize = null,
  customStrokeWidth = null,
  customButtonWidth = null,
  customButtonHeight = null,
  customButtonColor = null,
  customButtonComponent = null,

  //functions
  onPress = () => {},
}) => {
  const percentage = useSharedValue(0);

  const SIZE = customSize || SVG_SIZE[size];
  const STROKE = customStrokeWidth || STROKE_WIDTH[size];

  const RADIUS = SIZE / 2;
  const REAL_RADIUS = RADIUS - STROKE / 2;
  const CIRCUMFERENCE = 2 * Math.PI * REAL_RADIUS;

  useEffect(() => {
    percentage.value = withTiming(stepCount ? (step / stepCount) * 100 : step, {
      duration: 500,
      easing: Easing.inOut(Easing.ease),
    });
  }, [step]);

  const animatedProps = useAnimatedProps(() => {
    const strokeDashoffset =
      CIRCUMFERENCE - (CIRCUMFERENCE * percentage.value) / 100;
    return {strokeDashoffset};
  });

  return (
    <View style={styles.center}>
      <RingView
        size={SIZE}
        radius={RADIUS}
        stroke={STROKE}
        realRadius={REAL_RADIUS}
        circumference={CIRCUMFERENCE}
        animatedProps={animatedProps}
        indicatorColor={indicatorColor}
        indicatorBackColor={indicatorBackColor}
      />
      {showButton && (
        <InsideButton
          indicatorColor={indicatorColor}
          customButtonColor={customButtonColor}
          customButtonWidth={customButtonWidth}
          customButtonHeight={customButtonHeight}
          customButtonComponent={customButtonComponent}
          onPress={onPress}
        />
      )}
    </View>
  );
};
