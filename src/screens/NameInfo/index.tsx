import {View} from 'native-base';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Layout from '../../components/Layout';
import TextInput from '../../components/TextInput';
import {REQUEST} from './slice';
import {validation} from './validation';

const NameInfo = ({navigation}) => {
  const [name, setName] = useState({firstName: '', lastName: ''});
  const dispatch = useDispatch();
  const onSubmit = () => {
    if (!validation(name)) {
      // return;
    }
    dispatch(REQUEST(name));
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
        <TextInput
          type="text"
          placeholder="First Name"
          value={name.firstName}
          onChangeText={e => setName({...name, firstName: e})}
        />
        <TextInput
          type="text"
          placeholder="Last Name"
          value={name.lastName}
          onChangeText={e => setName({...name, lastName: e})}
        />
      </View>
    </Layout>
  );
};

export default NameInfo;
