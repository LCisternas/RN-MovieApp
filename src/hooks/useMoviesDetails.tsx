import { useEffect, useState } from 'react';
import movieDB from '../api/movieDB';
import { MovieFull } from '../interfaces/movieInterface';
import { Cast, CreditsResponse } from '../interfaces/creditsInterface';


interface MovieDetails {
  isLoading: boolean;
  movieFull?: MovieFull;
  cast: Cast[]; 
}

const useMoviesDetails = (movieId: number) => {
  
  const [movieDetail, setMovieDetail] = useState<MovieDetails>({
    isLoading: true,
    movieFull: undefined,
    cast: []
  });

  const getMovieDetails = async () => {
    const movieDetailsPromise = movieDB.get<MovieFull>(`/${movieId}`);
    const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);
    const [movieDetailResp, castResp] = await Promise.all([ movieDetailsPromise, castPromise ]);
    setMovieDetail({
      isLoading: false,
      movieFull: movieDetailResp.data,
      cast: castResp.data.cast
    })
  }

  useEffect(() => {
    getMovieDetails()
  }, [])

  return {
    ...movieDetail
  }

}

export default useMoviesDetails
