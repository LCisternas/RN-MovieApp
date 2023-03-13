import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Movie } from '../interfaces/movieInterface';

interface MoviePosterProps {
  movie: Movie;
}

const MoviePoster = ({ movie }: MoviePosterProps) => {

  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri }}
          style={styles.image}
        />
      </View>
    </View>
  )
}

export default MoviePoster

const styles = StyleSheet.create({
  mainContainer: {
    width: 300,
    height: 420
  },
  imageContainer: {
    flex: 1,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    backgroundColor: 'red',
    shadowRadius: 3.84,
    elevation: 10
  },
  image: {
    flex: 1,
    borderRadius: 16
  },
})
