import {View} from 'native-base';
import React from 'react';
import Layout from '../../components/Layout';
import TextInput from '../../components/TextInput';

const EmailInfo = ({navigation}) => {
  const onSubmit = () => {
    navigation.navigate('Permissions');
  };
  return (
    <Layout
      navigation={navigation}
      backButtonEnabled
      title="Tell us your email"
      buttonText="CONTINUE"
      onSubmit={onSubmit}>
      <View width={'100%'}>
        <TextInput type="text" placeholder="Enter email" />
      </View>
    </Layout>
  );
};

export default EmailInfo;
