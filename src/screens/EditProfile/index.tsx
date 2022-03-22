import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  KeyboardAvoidingView,
} from 'native-base';
import React, {useState} from 'react';
import Images from '../../assets';
import Background from '../../components/Background';
import ButtonComponent from '../../components/Button';
import Checkbox from '../../components/Checkbox';
import TextInput from '../../components/TextInput';

const EditProfile = ({navigation}) => {
  const [userDetails, setUserDetails] = useState({
    gender: 'Male',
    name: '',
    number: '',
    email: '',
    password: '',
  });
  return (
    <Background isBackVisible navigation={navigation}>
      <View flex={1} width="80%" mt={10} alignSelf={'center'}>
        <KeyboardAvoidingView
          flex={1}
          flexDirection="column"
          justifyContent={'center'}
          behavior="padding"
          enabled
          keyboardVerticalOffset={150}>
          <ScrollView
            contentContainerStyle={{alignItems: 'center', marginBottom: 30}}>
            <Text
              fontSize={20}
              mb={5}
              fontWeight="bold"
              alignSelf={'flex-start'}
              textAlign={'left'}
              color="white">
              We would like to know some more details
            </Text>
            <View>
              <Image
                alt="user"
                width={116}
                height={116}
                source={Images.dummyUser}
              />
              <Pressable
                position={'absolute'}
                bottom={0}
                right={0}
                width={28}
                height={28}
                alignItems="center"
                justifyContent={'center'}
                borderRadius={20}
                backgroundColor="black.30">
                <Image alt="camera" source={Images.camera} />
              </Pressable>
            </View>
            <Text
              mt={3}
              alignSelf={'flex-start'}
              color="black.10"
              fontWeight={'normal'}
              fontSize={20}>
              Personal Info
            </Text>
            <View mt={5} mb={7} width="100%" alignItems={'center'}>
              <Checkbox
                onChange={selected =>
                  setUserDetails({...userDetails, gender: selected})
                }
                data={['Male', 'Female']}
                selected={userDetails.gender}
              />
            </View>
            <TextInput
              autoCorrect={false}
              value={userDetails.name}
              onChangeText={e => setUserDetails({...userDetails, name: e})}
              placeholder="Full Name"
            />
            <TextInput
              keyboardType="phone-pad"
              autoCapitalize="none"
              autoCorrect={false}
              value={userDetails.number}
              onChangeText={e => setUserDetails({...userDetails, number: e})}
              placeholder="(+91) Phone NUmber"
            />
            <TextInput
              mb={5}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              autoCompleteType="email"
              value={userDetails.email}
              onChangeText={e => setUserDetails({...userDetails, email: e})}
              placeholder="Email"
            />
            <Text fontSize={20} mb={2} color="white" alignSelf={'flex-start'}>
              Set password
            </Text>
            <TextInput
              secureTextEntry
              autoCapitalize="none"
              autoCorrect={false}
              value={userDetails.password}
              placeholder="Create Password"
              onChangeText={e => setUserDetails({...userDetails, password: e})}
            />
          </ScrollView>
        </KeyboardAvoidingView>
        <View alignSelf={'flex-end'} mb={10} mt={5}>
          <ButtonComponent
            onPress={() => navigation.goBack()}
            buttonText={'Submit'}
          />
        </View>
      </View>
    </Background>
  );
};

export default EditProfile;
