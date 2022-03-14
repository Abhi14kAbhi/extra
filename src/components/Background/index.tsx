import React from 'react';
import {View, Text, Image, Pressable} from 'native-base';
import PropTypes from 'prop-types';
import {ImageBackground} from 'react-native';
import Images from '../../assets';
import styles from './style';

const Background = ({children, isBackVisible, heading, navigation}) => {
  console.log(heading);
  return (
    <View flex="1" backgroundColor={'#262A2E'}>
      <ImageBackground
        style={styles.image}
        resizeMode="cover"
        source={Images.background}>
        {isBackVisible && (
          <View
            width="80%"
            alignSelf={'center'}
            mt={100}
            flexDirection="row"
            justifyContent={'space-between'}>
            <View flexDirection={'row'} alignItems="center">
              <Pressable onPress={() => navigation.pop()}>
                <Image source={Images.back} />
              </Pressable>
              {heading && (
                <Text fontSize={20} color="white" fontWeight="semibold" ml={3}>
                  {heading}
                </Text>
              )}
            </View>
            <View />
          </View>
        )}
        {children}
      </ImageBackground>
    </View>
  );
};

Background.propTypes = {
  isBackVisible: PropTypes.bool,
  heading: PropTypes.string,
  navigation: PropTypes.object,
};

Background.defaultProps = {
  isBackVisible: false,
};

export default Background;
