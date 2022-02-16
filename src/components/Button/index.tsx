import {Button, Text} from 'native-base';
import React from 'react';

const ButtonComponent = props => {
  return (
    <Button
      backgroundColor={'black.100'}
      onPress={props.onSubmit}
      padding="16px 53px 16px 53px"
      pl="50px"
      pr="50px"
      borderRadius={'50px'}
      {...props}>
      <Text color="white" fontSize={'16px'} fontWeight="bold">
        {props.buttonText}
      </Text>
    </Button>
  );
};

export default ButtonComponent;
