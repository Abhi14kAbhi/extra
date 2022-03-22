import {View, Text, Image} from 'native-base';
import React from 'react';
import Images from '../../assets';
import Background from '../../components/Background';

const AboutUs = ({navigation}) => {
  return (
    <Background isBackVisible>
      <View flex={1} alignItems="center">
        <Image source={Images.aboutUs} />
        <Text>About Us</Text>
      </View>
    </Background>
  );
};

export default AboutUs;
