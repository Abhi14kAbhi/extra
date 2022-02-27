import {Input, Text, View} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Pressable} from 'react-native';
import Layout from '../../components/Layout';
import {validation} from './validation';
import {useDispatch} from 'react-redux';
import {REQUEST} from './slice';

const Signup = ({navigation}) => {
  const dispatch = useDispatch();
  const [otp, setOtp] = useState([]);
  const [time, setTime] = useState(59);
  const otpTextInput = [];

  useEffect(() => {
    if (time !== 0) {
      let timeInterval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
      return () => clearInterval(timeInterval);
    }
  }, [time]);

  const focusPrevious = (key, index) => {
    const arr = [...otp];
    arr.splice(index, 1);
    setOtp([...arr]);
    if (key === 'Backspace' && index !== 0) otpTextInput[index - 1].focus();
  };

  const focusNext = (index, value) => {
    if (index < otpTextInput.length - 1 && value) {
      otpTextInput[index + 1].focus();
    }
    if (index === otpTextInput.length - 1) {
      otpTextInput[index].blur();
    }
    const arr = [...otp];
    arr[index] = value;
    setOtp([...arr]);
  };

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
      {time} Secs
    </Text>
  );
  const OtpInput = (item, index) => {
    return (
      <Input
        ref={ref => (otpTextInput[index] = ref)}
        color="white"
        onKeyPress={e => focusPrevious(e.nativeEvent.key, index)}
        onChangeText={e => focusNext(index, e)}
        mr={8}
        width={'48px'}
        height={'48px'}
        value={item}
        fontSize={16}
        maxLength={1}
        textAlign="center"
      />
    );
  };
  const onSubmit = () => {
    if (!validation(otp)) {
      // return;
    }
    dispatch(REQUEST({otp}));
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
          {Array(4)
            .fill(0)
            .map((item, index) => {
              return OtpInput(item, index);
            })}
        </View>
        <Text color="black.50">
          Didn't receive verification OTP?{' '}
          <Pressable disabled={time !== 0}>
            <Text opacity={time !== 0 ? 0.5 : 1} color="orange.0">
              Resend
            </Text>
          </Pressable>
        </Text>
      </View>
    </Layout>
  );
};

export default Signup;
