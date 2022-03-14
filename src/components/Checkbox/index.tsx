import React from 'react';
import {View, Text, Pressable} from 'native-base';

const Checkbox = ({data, selected, onChange}) => {
  return (
    <View flexDirection={'row'} alignSelf="flex-start">
      {data.map(item => (
        <View flexDirection={'row'} mr={12} alignItems="center">
          <Pressable
            borderWidth={2}
            borderColor="black.30"
            alignItems={'center'}
            justifyContent="center"
            width={'16px'}
            onPress={() => onChange(item)}
            height={'16px'}
            borderRadius={8}>
            {item === selected && (
              <View
                width={'7px'}
                height="7px"
                borderRadius={10}
                backgroundColor={'black.30'}
              />
            )}
          </Pressable>
          <Text ml={3} color="black.30">
            {item}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default Checkbox;
