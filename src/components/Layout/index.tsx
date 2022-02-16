import {Image, Pressable, Text, View} from 'native-base';
import PropTypes from 'prop-types';
import React from 'react';
import Background from '../Background';
import Images from '../../assets/index';
import Button from '../Button';

const Layout = ({
  children,
  backButtonEnabled,
  title,
  description,
  rightElement,
  buttonText,
  onSubmit,
  navigation,
}) => {
  return (
    <Background>
      <View flex={1} mt="96px" width="80%" alignSelf={'center'}>
        <View mb={'48px'}>
          <View mb="44px" minHeight="10px">
            {backButtonEnabled && (
              <Pressable onPress={() => navigation.pop()}>
                {
                  <Image
                    alt="back-button"
                    height="10px"
                    width="10px"
                    source={Images.back}
                  />
                }
              </Pressable>
            )}
          </View>
          <View flexDirection={'row'} justifyContent="space-between">
            <View flex={1}>
              <Text
                maxWidth={'216px'}
                color={'white'}
                fontSize="20px"
                fontWeight="bold">
                {title}
              </Text>
            </View>
            {rightElement && (
              <View flex={1} alignItems="flex-end">
                {rightElement}
              </View>
            )}
          </View>
          <View minHeight={'44px'} mt={15} maxWidth={234}>
            {description}
          </View>
        </View>
        <View>{children}</View>
        <View alignSelf={'flex-end'} position="absolute" bottom="150px">
          <Button onSubmit={onSubmit} buttonText={buttonText} />
        </View>
      </View>
    </Background>
  );
};

Layout.propTypes = {
  backButtonEnabled: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.element,
};

Layout.defaultProps = {
  backButtonEnabled: false,
};

export default Layout;
