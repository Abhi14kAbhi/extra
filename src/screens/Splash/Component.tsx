import {Image, View} from 'native-base';
import React, {useEffect} from 'react';
import Images from '../../assets';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => navigation.navigate('Introduction'), 1000);
  }, []);
  return (
    <View flex={1}>
      <Image flex={1} source={Images.splash} />
    </View>
  );
};

export default Splash;
