import {View} from 'native-base';
import React, {useState} from 'react';
import Layout from '../../components/Layout';
import TextInput from '../../components/TextInput';
import {validation} from './validation';
import {useDispatch} from 'react-redux';
import {REQUEST} from './slice';

const EmailInfo = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const onSubmit = () => {
    if (!validation(email)) {
      // return;
    }
    dispatch(REQUEST({email}));
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
        <TextInput
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          autoCompleteType="email"
          value={email}
          onChangeText={e => setEmail(e)}
          type="text"
          placeholder="Enter email"
        />
      </View>
    </Layout>
  );
};

export default EmailInfo;
