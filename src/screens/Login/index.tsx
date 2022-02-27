import {Text, View} from 'native-base';
import React, {useState} from 'react';
import {Pressable} from 'react-native';
import {useDispatch} from 'react-redux';
import {SET_USER_DETAILS} from '../../appSlice';
import Layout from '../../components/Layout';
import TextInput from '../../components/TextInput';
import {REQUEST} from './slice';
import {validation} from './validation';

const Signup = ({navigation}) => {
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const onSubmit = () => {
    console.log(validation(number));
    if (!validation(number)) {
      return;
    }
    dispatch(REQUEST({number}));
    dispatch(SET_USER_DETAILS({number}));
  };
  const description = (
    <Text fontSize={'14px'} color="black.40">
      Enter the same number you enter at time of sign up.
    </Text>
  );
  const signupButton = (
    <Pressable onPress={() => navigation.pop()}>
      <Text color="white" fontWeight={'normal'} fontSize="16px">
        Sign Up
      </Text>
    </Pressable>
  );
  return (
    <Layout
      navigation={navigation}
      backButtonEnabled
      title="Login to your account"
      description={description}
      buttonText="LOGIN"
      onSubmit={onSubmit}
      rightElement={signupButton}>
      <View>
        <TextInput
          onChangeText={e => setNumber(e)}
          value={number}
          type="text"
          maxLength={10}
          placeholder="Enter Mobile Number"
        />
        <Text
          mb={'24px'}
          alignSelf={'center'}
          fontSize={18}
          fontWeight="light"
          color="white">
          OR
        </Text>
        <View
          borderWidth={0.5}
          borderColor="white"
          height={'48px'}
          borderRadius={'8px'}
          alignItems="center"
          flexDirection={'row'}
          justifyContent="center">
          <Pressable>
            <Text fontWeight={'thin'} fontSize={'16px'} color="white">
              Login with google
            </Text>
          </Pressable>
        </View>
      </View>
    </Layout>
  );
};

export default Signup;
