import {Text, View} from 'native-base';
import React from 'react';
import Layout from '../../components/Layout';
import TextInput from '../../components/TextInput';

const NameInfo = ({navigation}) => {
  const onSubmit = () => {
    navigation.navigate('EmailInfo');
  };
  return (
    <Layout
      navigation={navigation}
      backButtonEnabled
      title="We would like to know some more details"
      buttonText="CONTINUE"
      onSubmit={onSubmit}>
      <View width="100%">
        <TextInput type="text" placeholder="First Name" />
        <TextInput type="text" placeholder="Last Name" />
      </View>
    </Layout>
  );
};

export default NameInfo;
