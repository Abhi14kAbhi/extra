import {View, Text, ScrollView, Image, Pressable} from 'native-base';
import React from 'react';
import Images from '../../../../assets';
import Background from '../../../../components/Background';

const Account = ({navigation}) => {
  const pages = [
    {image: Images.account, title: 'Summary', navigateTo: 'Summary'},
    {image: Images.account, title: 'Bills', navigateTo: 'Bills'},
    {image: Images.account, title: 'Help ?', navigateTo: 'Help'},
    {image: Images.account, title: "FAQ's", navigateTo: 'FAQs'},
    {image: Images.account, title: 'Rate Us', navigateTo: 'RateUs'},
    {image: Images.account, title: 'About Us', navigateTo: 'About Us'},
  ];
  return (
    <Background>
      <ScrollView
        contentContainerStyle={{alignItems: 'center'}}
        pt={100}
        flex={1}>
        <Image
          alt="user-image"
          width={'80px'}
          height={'80px'}
          borderRadius={40}
          source={Images.dummyUser}
        />
        <View alignItems={'center'} mt={5} mb={14}>
          <Text fontWeight={'bold'} color="white" fontSize={20}>
            Joe Carla
          </Text>
          <Text lineHeight={24} color="black.50">
            (+91) 9988776655
          </Text>
          <Pressable onPress={() => navigation.navigate('EditProfile')}>
            <Text lineHeight={24} color="yellow.500">
              Edit Profile
            </Text>
          </Pressable>
        </View>
        <View width="80%" alignItems="center">
          {pages.map((page, index) => (
            <Pressable onPress={() => navigation.navigate(page.navigateTo)}>
              <View
                width={'100%'}
                justifyContent={'flex-start'}
                minHeight={'70px'}
                flexDirection={'row'}
                alignItems={'center'}>
                <Image
                  mr={30}
                  width={'28px'}
                  height={'28px'}
                  source={page.image}
                />
                <View
                  flexDirection={'row'}
                  flex={1}
                  height="100%"
                  borderColor={'black.30'}
                  borderBottomWidth={index === pages.length - 1 ? 0 : 0.6}>
                  <Text
                    ml={2}
                    alignSelf={'center'}
                    fontSize={20}
                    fontWeight="normal"
                    color="black.10">
                    {page.title}
                  </Text>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </Background>
  );
};

export default Account;
