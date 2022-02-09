import {Text, View, Image, Button} from 'native-base';
import React from 'react';
import constants from '../../helpers/constants';
import Images from '../../assets';

const Login = () => {
  return (
    <View flex={1} backgroundColor={constants.primaryColor} alignItems="center">
      <View width={'80%'} mt={24} flex={1} alignItems="flex-start">
        <Text color={constants.whiteColor} fontSize={20}>
          Welcome Back!
        </Text>
      </View>
    </View>
  );
};

export default Login;
