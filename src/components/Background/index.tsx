import React from 'react';
import {View, Text, Image} from 'native-base';
import Svg, {
  Defs,
  Circle,
  LinearGradient,
  RadialGradient,
  Rect,
  Stop,
} from 'react-native-svg';
import {ImageBackground, StyleSheet} from 'react-native';
import Images from '../../assets';
import styles from './style';

const Background = ({children}) => {
  return (
    <View flex="1" backgroundColor={'#262A2E'}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={Images.background}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default Background;
