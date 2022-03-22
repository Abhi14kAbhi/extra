import {View, Text, Image} from 'native-base';
import React from 'react';
import Images from '../../assets';
import Background from '../../components/Background';
import ButtonComponent from '../../components/Button';

const RateUs = ({navigation}) => {
  return (
    <Background isBackVisible>
      <View flex={1} alignItems="center">
        <Image mt={10} mb={16} source={Images.rateUs} />
        <View
          alignSelf={'flex-start'}
          ml="10"
          width="60%"
          alignItems={'flex-start'}>
          <Text mb={3} fontSize={32} color="yellow.400" fontWeight={'bold'}>
            Rate Us
          </Text>
          <Text mb={4} fontSize={16} color="white" fontWeight={'bold'}>
            No tracking history found
          </Text>
          <Text color="gray.100" fontSize={16}>
            You can add all your expense and track it anytime
          </Text>
          <Image source={Images.googlePlay} />
        </View>
        <View mr={10} alignSelf={'flex-end'} mb={10} mt={5}>
          <ButtonComponent
            onPress={() => navigation.goBack()}
            buttonText={'Save'}
          />
        </View>
      </View>
    </Background>
  );
};

export default RateUs;
