import {Button, Text, View, Image} from 'native-base';
import React from 'react';
import {Pressable} from 'react-native';
import Images from '../../assets';
import Layout from '../../components/Layout';
import TextInput from '../../components/TextInput';

const Signup = ({navigation}) => {
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
      onSubmit={() => {}}
      rightElement={signupButton}>
      <View>
        <TextInput type="text" placeholder="Enter Mobile Number" />
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
