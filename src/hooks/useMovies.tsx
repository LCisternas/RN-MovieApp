import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBMoviesResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState {
  nowPlaying: Movie[];
  popular: Movie[];
  topRated: Movie[];
  upcoming: Movie[];
}

const useMovies = () => {

  /*
    En este custom hook almacenamos la logica que necesitamos para hacer el llamado a
    la api, de esta forma no mezclamos el codigo de la logica con el de la interfaz
    permitiendo asi un mejor legibilidad del mismo y modularidad del codigo
  */

  const [isLoading, setIsLoading] = useState(true);
  // const [premieres, setPremieres] = useState<Movie[]>([]);
  // const [popular, setPopular] = useState<Movie[]>([]);

  const [moviesState, setMoviesState] = useState<MoviesState>({
    nowPlaying: [],
    popular: [],
    topRated: [],
    upcoming: []
  });

  const getMovies = async () => {
    const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing');
    const popularPromise = movieDB.get<MovieDBMoviesResponse>('/popular');
    const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
    const upcomingPromise = movieDB.get<MovieDBMoviesResponse>('/upcoming');

    const response = await Promise.all([
      nowPlayingPromise,
      popularPromise,
      topRatedPromise,
      upcomingPromise
    ])

    setMoviesState({
      nowPlaying: response[0].data.results,
      popular: response[1].data.results,
      topRated: response[2].data.results,
      upcoming: response[3].data.results
    })

    // setPremieres(resNowPlaying.data.results);
    // setPopular(resPopular.data.results);
    setIsLoading(false);
  }
  
  useEffect(() => {
    getMovies();
  }, [])

  return {
    ...moviesState,
    isLoading
  }  
}

export default useMovies
