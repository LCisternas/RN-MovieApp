import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
// import { Movie } from '../interfaces/movieInterface';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends StackScreenProps<RootStackParams, 'Detail'> { }

const screenHeight = Dimensions.get('screen').height;

const DetailScreen = (props: Props) => {

  const movie = props.route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <ScrollView>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={styles.posterImage}
        />
      </View>
      <View style={ styles.marginContainer }>
        <Text style={ styles.subtitle }>{movie.original_title}</Text>
        <Text style={ styles.title }>{movie.title}</Text>
      </View>
      <View style={ styles.marginContainer }>
        <Icon name='star-outline' color='grey' size={20} />
      </View>
    </ScrollView>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7
  },
  posterImage: {
    flex: 1,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.5
  }
})
