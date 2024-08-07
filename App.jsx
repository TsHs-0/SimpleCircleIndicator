import React, {useState} from 'react';
import {View} from 'react-native';
import {CircleIndicator} from './src';

// usage
const App = () => {
  const [step, setStep] = useState(0);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <CircleIndicator
        step={step}
        stepCount={5}
        onPress={() => setStep(step + 1)}
        customSize={130}
        customStrokeWidth={5}
      />
    </View>
  );
};

export default App;
