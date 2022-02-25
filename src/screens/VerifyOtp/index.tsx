import {Input, Text, View} from 'native-base';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import Layout from '../../components/Layout';
import {useSelector} from 'react-redux';

const Signup = ({navigation}) => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const description = (
    <Text fontSize={'14px'} color="black.40">
      Please enter verification code sent to +91 73******77{' '}
      <Pressable onPress={() => navigation.pop()}>
        <Text color="blue.100">Change</Text>
      </Pressable>
    </Text>
  );
  const timer = (
    <Text color="white" fontWeight={'bold'} fontSize="16px">
      58 Secs
    </Text>
  );
  const OtpInput = value => {
    return (
      <Input
        color="white"
        mr={8}
        width={'48px'}
        height={'48px'}
        value={value}
        fontSize={16}
        textAlign="center"
      />
    );
  };
  const onSubmit = () => {
    navigation.navigate('NameInfo');
  };
  return (
    <Layout
      navigation={navigation}
      backButtonEnabled
      title="Verification"
      description={description}
      buttonText="VERIFY"
      onSubmit={onSubmit}
      rightElement={timer}>
      <View>
        <View justifyContent={'flex-start'} flexDirection={'row'} mb={4}>
          {otp.map(item => {
            return OtpInput(item);
          })}
        </View>
        <Text color="black.50">
          Didn't receive verification OTP?{' '}
          <Pressable>
            <Text color="orange.0">Resend</Text>
          </Pressable>
        </Text>
      </View>
    </Layout>
  );
};

export default Signup;
