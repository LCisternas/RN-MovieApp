import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying } from '../interfaces/movieInterface';
import useMovies from '../hooks/useMovies';
import MoviePoster from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = () => {

  // useEffect(() => {
  //   movieDB.get<MovieDBNowPlaying>('/now_playing')
  //   .then(response => {
  //     console.log(response.data.results[0].title)
  //   })
  // }, [])

  /*
    Desde el custom hook useMovies traemos exactamente la misma logica que aplica el
    useEffect de arriba, pero nos da el plus de la modularidad y la buena legibilidad
    del codigo
  */
  const { premieres, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {/* El ActivityIndicator es basicamente un icono de carga, un load */}
        <ActivityIndicator color='red' size={100} />
      </View>
    )
  }

  return (
    <View style={{ marginTop: top + 15 }}>
      <MoviePoster movie={premieres[5]} />
    </View>
  )
}

export default HomeScreen
