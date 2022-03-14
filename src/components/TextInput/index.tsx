import {View, Input} from 'native-base';
import React from 'react';

const TextInput = props => {
  return (
    <View
      borderRadius={8}
      width="100%"
      borderWidth={0.5}
      height={'48px'}
      mb={'24px'}
      borderColor="white"
      {...props}>
      <Input
        color="white"
        textAlign={'center'}
        fontSize={16}
        placeholder={props.placeholder}
        borderWidth={0}
        height="100%"
        secureTextEntry={props.secureTextEntry}
        {...props}
      />
    </View>
  );
};

export default TextInput;
