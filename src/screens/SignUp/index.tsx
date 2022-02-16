import {Text, View} from 'native-base';
import React from 'react';
import {Pressable} from 'react-native';
import Layout from '../../components/Layout';
import TextInput from '../../components/TextInput';

const Signup = ({navigation}) => {
  const description = (
    <Text fontSize={'14px'} color="black.40">
      We will send you one time code on your phone number.
    </Text>
  );
  const loginButton = (
    <Pressable onPress={() => navigation.navigate('Login')}>
      <Text color="white" fontWeight={'normal'} fontSize="16px">
        Login
      </Text>
    </Pressable>
  );
  const onSubmit = () => {
    navigation.navigate('VerifyOtp');
  };
  return (
    <Layout
      title="Enter your mobile number"
      description={description}
      buttonText="GET OTP"
      onSubmit={onSubmit}
      rightElement={loginButton}>
      <View width="100%">
        <TextInput type="text" placeholder="(+91) India" />
        <TextInput type="text" placeholder="Enter Mobile Number" />
        <View flexDirection="row" alignItems={'flex-start'} width="90%">
          <View
            mt={1}
            height={'16px'}
            width={'16px'}
            borderWidth={0.5}
            borderColor="white"
            mr={3}>
            <Pressable>
              <Text></Text>
            </Pressable>
          </View>

          <Text color="white" lineHeight={20} fontSize={14}>
            By signing up I agree to{' '}
            <Text onPress={() => navigation.navigate('Terms')} color="orange.0">
              Terms and service
            </Text>{' '}
            and{' '}
            <Text
              onPress={() => navigation.navigate('Privacy')}
              color="orange.0">
              Privacy policy
            </Text>
            .
          </Text>
        </View>
      </View>
    </Layout>
  );
};

export default Signup;
