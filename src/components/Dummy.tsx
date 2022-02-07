import React from 'react';
import {View, Text, Button} from 'native-base';
import {RootState} from '../store';
import {useSelector, useDispatch} from 'react-redux';
import {DECREMENT, INCREMENT, INCREMENT_WITH_PAYLOAD} from '../counterSlice';

const Dummy = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <Text>
        Ye dummy hai, ye actual project nahi hai, ye project isse zyada
        interesting hoga... LOL
      </Text>
      <Text>{count}</Text>
      <Button onPress={() => dispatch(INCREMENT())}>Increment</Button>
      <Button onPress={() => dispatch(DECREMENT())}>Decrement</Button>
      <Button onPress={() => dispatch(INCREMENT_WITH_PAYLOAD(2))}>
        Increment with payload
      </Button>
    </View>
  );
};

export default Dummy;
