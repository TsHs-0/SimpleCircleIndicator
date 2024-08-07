import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {styles} from '../styles';

export const InsideButton = ({
  indicatorColor,
  customButtonColor,
  customButtonWidth,
  customButtonHeight,
  customButtonComponent,
  onPress = () => {},
}) => {
  return (
    <View style={styles.customButtonContainer}>
      {customButtonComponent ? (
        customButtonComponent()
      ) : (
        <Pressable onPress={onPress}>
          <View
            style={{
              width: customButtonWidth || 80,
              height: customButtonHeight || 80,
              backgroundColor: customButtonColor || indicatorColor,
              ...styles.center,
              ...styles.roundedBorder,
            }}>
            <Text style={styles.whiteTextColor}>Press Me</Text>
          </View>
        </Pressable>
      )}
    </View>
  );
};
