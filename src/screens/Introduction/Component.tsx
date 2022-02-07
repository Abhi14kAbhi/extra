// import {Button, Text, View, Image} from 'native-base';
// import React from 'react';
// import Images from '../../assets';
import constants from '../../helpers/constants';

// const Introduction = () => {
//   return (
//     <View flex={1} backgroundColor={constants.primaryColor} alignItems="center">
//       <View width={'80%'} mt={20} flex={1} alignItems="flex-start">
//         <Text color={constants.whiteColor} fontSize={24}>
//           Track all your spendings at one place
//         </Text>
//         <Image
//           alt="introduction"
//           alignSelf={'center'}
//           mt={40}
//           source={Images.introduction}
//         />
//       </View>
//       <View mb={20}>
//         <Button>CONTINUE</Button>
//       </View>
//     </View>
//   );
// };

// export default Introduction;

import React, {Component, useRef, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Image,
  ScrollView,
  Animated,
  Dimensions,
  Modal,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Images from '../../assets';

const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = 260;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const App: () => React$Node = () => {
  const refScrollview = useRef(ScrollView);
  let y = 0;
  let animated = true;
  const [isCar, setIsCar] = useState(true);
  const [isBus, setIsBus] = useState(false);
  const [isTrain, setIsTrain] = useState(false);

  const handleScroll = (event: Object) => {
    if (event.nativeEvent.contentOffset.x < 350) {
      // setIsCar(true);
      // setIsBus(false);
      // setIsTrain(false);
    } else if (
      event.nativeEvent.contentOffset.x >= 350 &&
      event.nativeEvent.contentOffset.x < 600
    ) {
      // setIsCar(false);
      // setIsBus(true);
      // setIsTrain(false);
    } else if (event.nativeEvent.contentOffset.x >= 600) {
      // setIsCar(false);
      // setIsBus(false);
      // setIsTrain(true);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#750056" barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.text_header}>Select Your Travel method !</Text>
      </View>
      <Animatable.View animation="fadeInUpBig" style={[styles.footer]}>
        <View style={styles.CardDetail}>
          <TouchableOpacity
            style={[
              styles.CardDetail1,
              {backgroundColor: isCar ? '#750056' : '#009387'},
            ]}
            onPress={() => {
              refScrollview.current.scrollTo({x: 0, y, animated: true});
              setIsCar(true);
              setIsBus(false);
              setIsTrain(false);
            }}>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Car</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.CardDetail1,
              {backgroundColor: isBus ? '#750056' : '#009387'},
            ]}
            onPress={() => {
              refScrollview.current.scrollTo({x: 350, y, animated});
              setIsCar(false);
              setIsBus(true);
              setIsTrain(false);
            }}>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Bus</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.CardDetail1,
              {backgroundColor: isTrain ? '#750056' : '#009387'},
            ]}
            onPress={() => {
              refScrollview.current.scrollTo({x: 600, y, animated});
              setIsCar(false);
              setIsBus(false);
              setIsTrain(true);
            }}>
            <View style={styles.detailContent}>
              <Text style={styles.title}>Train</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Animated.ScrollView
          ref={refScrollview}
          horizontal
          scrollEventThrottle={10}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}
          pagingEnabled
          snapToInterval={CARD_WIDTH + 20}
          snapToAlignment="center"
          onScroll={handleScroll}>
          <View style={styles.card}>
            <Image
              source={Images.introduction}
              style={styles.cardImage}
              resizeMode="contain"
            />
            <View style={styles.button}></View>
          </View>
          <View style={styles.card}>
            <Image
              source={Images.introduction}
              style={styles.cardImage}
              resizeMode="stretch"
            />
            <View style={styles.button}></View>
          </View>
          <View style={styles.card}>
            <Image
              source={Images.introduction}
              style={styles.cardImage}
              resizeMode="stretch"
            />
            <View style={styles.button}></View>
          </View>
        </Animated.ScrollView>
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#750056',
  },
  cardContainer: {
    backgroundColor: '#fff',
    marginTop: 60,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 28,
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  scrollView: {
    // position: "absolute",
    top: 60,
    // bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  card: {
    // padding: 10,
    elevation: 3,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 15,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  },
  selectNow: {
    width: '80%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  textSelect: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  CardDetail: {
    alignSelf: 'center',
    marginTop: 20,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    // backgroundColor: "#009387",
  },
  CardDetail1: {
    // alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009387',
    borderRadius: 20,
    marginHorizontal: 5,
    width: '30%',
  },
  detailContent: {
    margin: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 14,
    color: '#fff',
  },
});

export default App;
