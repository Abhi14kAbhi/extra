import {View, Text} from 'native-base';
import React from 'react';
import Images from '../../assets';
import Card from '../../components/Card';
import Layout from '../../components/Layout';

const Permissions = ({navigation}) => {
  const description = (
    <Text fontSize={'14px'} color="black.40">
      We want some additional access to your phone
    </Text>
  );
  return (
    <Layout
      description={description}
      navigation={navigation}
      backButtonEnabled
      title="Permissions"
      buttonText="CONTINUE"
      onSubmit={() => {}}>
      <View width={'100%'}>
        <Card
          image={Images.location}
          title="Location"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum h "
        />
        <Card image={Images.app} title="App" />
        <Card image={Images.sms} title="SMS" />
      </View>
    </Layout>
  );
};

export default Permissions;
