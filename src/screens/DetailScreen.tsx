import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text } from 'react-native';
// import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> {}

const DetailScreen = (props: Props) => {
  
  const movie = props.route.params;

  return (
    <View>
      <Text>DetailScreen</Text>
    </View>
  )
}

export default DetailScreen
