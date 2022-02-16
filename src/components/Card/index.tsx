import {View, Text, Image} from 'native-base';
import React from 'react';

const Card = ({image, title, description}) => {
  return (
    <View
      borderWidth={1}
      borderColor="white"
      padding="14px"
      alignItems={'flex-start'}
      mb={'24px'}
      borderRadius="8px"
      flexDirection="column">
      <View flexDirection={'row'} alignItems={'center'}>
        <View height="20px" width="20px" mr={'10px'}>
          <Image source={image} />
        </View>
        <Text fontSize={'16px'} fontWeight="thin" color="white">
          {title}
        </Text>
      </View>
      {description && (
        <View mt={'10px'} ml={'30px'}>
          <Text fontWeight="thin" color="white">
            {description}
          </Text>
        </View>
      )}
    </View>
  );
};

export default Card;
