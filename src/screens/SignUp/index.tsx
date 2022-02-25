import {Text, View, CheckIcon} from 'native-base';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import Layout from '../../components/Layout';
import TextInput from '../../components/TextInput';
import {useSelector, useDispatch} from 'react-redux';
import {REQUEST} from './slice';
import {showSnackbar} from '../../helpers/snackbar';

const Signup = ({navigation}) => {
  const signupData = useSelector(state => state.signup);
  const dispatch = useDispatch();
  const [checkbox, setCheckbox] = useState(false);
  const [number, setNumber] = useState('');
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
    if (!number) {
      showSnackbar('ERROR', 'Please fill all the fields.');
      return;
    } else if (number.length < 10) {
      showSnackbar('ERROR', 'Please enter valid number.');
      return;
    } else if (!checkbox) {
      showSnackbar('ERROR', 'Please mark the checkbox.');
      return;
    }
    dispatch(REQUEST({number, countryCode: '+91', country: 'India'}));
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
        <TextInput value="(+91) India" type="text" placeholder="(+91) India" />
        <TextInput
          type="text"
          placeholder="Enter Mobile Number"
          value={number}
          onChangeText={e => {
            setNumber(e);
          }}
          maxLength={10}
          keyboardType="number-pad"
        />
        <View flexDirection="row" alignItems={'flex-start'} width="90%">
          <View
            mt={1}
            height={'16px'}
            width={'16px'}
            borderWidth={0.5}
            borderColor="white"
            alignItems={'center'}
            justifyContent="center"
            mr={3}>
            <Pressable onPress={() => setCheckbox(!checkbox)}>
              {checkbox ? (
                <CheckIcon color="white" size={3} />
              ) : (
                <View height="16px" width="16px" />
              )}
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
