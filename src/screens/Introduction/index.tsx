import {Image, ScrollView, FlatList, View, Text, Pressable} from 'native-base';
import Button from '../../components/Button';
import React, {useRef, useState} from 'react';
import Background from '../../components/Background';
import {Images} from '../../assets';
import {Dimensions} from 'react-native';

const Introduction = ({navigation}) => {
  const scrollViewRef = useRef(null);
  const [page, setPage] = useState(0);
  const data = [
    {
      image: Images.intro1,
      title: 'Track all your money at one place',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      image: Images.intro2,
      title: 'Track all your money at one place',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry',
    },
    {
      image: Images.intro3,
      title: 'Track all your money at one place',
      description:
        'Lorem ipsum is simply dummy text of the printing and typesetting industry',
    },
  ];
  console.log('current page', page);
  return (
    <Background>
      <View
        mt={20}
        mb={20}
        flex={1}
        flexDirection="column"
        alignItems="center"
        justifyContent={'space-around'}>
        <ScrollView
          maxHeight={320}
          width="100%"
          height="auto"
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
          onScroll={event => {
            setPage(
              Math.round(
                parseFloat(
                  event.nativeEvent.contentOffset.x /
                    Dimensions.get('window').width,
                ),
              ),
            );
          }}
          horizontal
          flex={1}
          pagingEnabled>
          {data.map(item => (
            <View width={Dimensions.get('screen').width} alignItems="center">
              <Image source={item.image} />
            </View>
          ))}
        </ScrollView>
        <View flexDirection={'row'} alignItems="center">
          {data.map((item, index) => (
            <View
              width={index === page ? '5px' : '4px'}
              height={index === page ? '5px' : '4px'}
              borderRadius={5}
              margin="2px"
              backgroundColor={index === page ? 'black.10' : 'black.40'}
            />
          ))}
        </View>
        <View ml={'35px'} mr={'35px'}>
          <Text mb={'14px'} fontSize={'20px'} fontWeight="bold" color={'white'}>
            {data[page].title}
          </Text>
          <Text fontSize={'14px'} color="black.30">
            {data[page].description}
          </Text>
        </View>
        <View width={Dimensions.get('window').width} pl={'35px'} pr={'35px'}>
          {page < 2 ? (
            <View
              flexDirection={'row'}
              alignItems="center"
              justifyContent={'space-between'}>
              <Pressable
                onPress={() =>
                  scrollViewRef.current?.scrollTo({
                    x: (page + 1) * Dimensions.get('window').width,
                    animated: true,
                  })
                }>
                <Text color={'black.40'} fontSize={'16px'}>
                  Skip
                </Text>
              </Pressable>
              <Button
                onPress={() =>
                  scrollViewRef.current?.scrollTo({
                    x: (page + 1) * Dimensions.get('window').width,
                    animated: true,
                  })
                }
                buttonText="Next"
              />
            </View>
          ) : (
            <Button
              onPress={() => navigation.navigate('Signup')}
              buttonText="GET STARTED"
            />
          )}
        </View>
      </View>
    </Background>
  );
};

export default Introduction;
