import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { Movie } from '../interfaces/movieInterface';
import MoviePoster from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];

}

const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View
      style={{
        height: 250,
      }}
    >
      {
        title ? (
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: 'black', marginLeft: 5 }}>
            {title}
          </Text>
        ) : null
      }
      <FlatList
        style={ !title ? { position: 'relative', top: 25 } : null}
        data={movies}
        renderItem={({ item }) => (
          <MoviePoster movie={item} width={140} height={200} marginHorizontal={8} />
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default HorizontalSlider
