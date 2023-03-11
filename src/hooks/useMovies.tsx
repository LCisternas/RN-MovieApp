import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieDBNowPlaying, Movie } from '../interfaces/movieInterface';

const useMovies = () => {

  /*
    En este custom hook almacenamos la logica que necesitamos para hacer el llamado a
    la api, de esta forma no mezclamos el codigo de la logica con el de la interfaz
    permitiendo asi un mejor legibilidad del mismo y modularidad del codigo
  */

  const [isLoading, setIsLoading] = useState(true);
  const [premieres, setPremieres] = useState<Movie[]>([]);

  const getMovies = async () => {
    const response = await movieDB.get<MovieDBNowPlaying>('/now_playing');
    const movies = response.data.results;
    setPremieres(movies);
    setIsLoading(false);
  }
  
  useEffect(() => {
    getMovies();
  }, [])

  return {
    premieres,
    isLoading
  }  
}

export default useMovies
