import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Movie } from '../interfaces/movieInterface';


interface MoviePosterProps {
  movie: Movie;
  height?: number;
  width?: number;
  marginHorizontal?: number;
}

const MoviePoster = ({
  movie, height = 420, width = 300, marginHorizontal = 0
}: MoviePosterProps) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={ () => navigation.navigate('Detail' as never, movie as never) }
      activeOpacity={0.8}
      style={{ width, height, marginHorizontal }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  )
}

export default MoviePoster

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    backgroundColor: 'white',
    shadowRadius: 3.84,
    elevation: 10
  },
  image: {
    flex: 1,
    borderRadius: 16
  },
})
