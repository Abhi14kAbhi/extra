import {View, Text, Image, ScrollView, Pressable} from 'native-base';
import React from 'react';
import Background from '../Background';
import ButtonComponent from '../Button';

const TermsPrivacy = ({image, alt, title, data, navigation}) => {
  return (
    <Background>
      <View
        flex={1}
        mt="96px"
        width="80%"
        alignSelf={'center'}
        alignItems="center">
        <Image alt={alt} source={image} />
        <View alignSelf={'flex-start'} mt={'40px'} mb="20px">
          <Text fontSize={'20px'} color="white" fontWeight={'bold'}>
            {title}
          </Text>
        </View>
        <ScrollView pt="20px" width="100%">
          {data.map(item => {
            return (
              <View mb="36px">
                <Text
                  fontWeight={'bold'}
                  fontSize="14px"
                  mb="20px"
                  textAlign={'left'}
                  color="white">
                  {item.heading}
                </Text>
                <View>
                  {item.clauses.map(clause => {
                    return (
                      <View flexDirection={'row'} mb="20px">
                        <Text
                          fontSize={'14px'}
                          fontWeight="bold"
                          mr="10px"
                          color="white">{`\u2022`}</Text>
                        <Text
                          fontSize={'14px'}
                          fontWeight="light"
                          color="white">
                          {clause}
                        </Text>
                      </View>
                    );
                  })}
                </View>
              </View>
            );
          })}
        </ScrollView>
        <View
          mt="30px"
          mb="52px"
          flexDirection={'row'}
          justifyContent="space-around">
          <ButtonComponent
            backgroundColor="transparent"
            buttonText={'DENY'}
            onSubmit={() => navigation.pop()}
          />
          <ButtonComponent
            buttonText={'ACCEPT'}
            onSubmit={() => navigation.pop()}
          />
        </View>
      </View>
    </Background>
  );
};

export default TermsPrivacy;
