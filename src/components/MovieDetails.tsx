import React from 'react';
import { View, Text } from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';

interface Props {
  movieFull: MovieFull;
  cast: Cast[]
}

const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20, marginBottom: 20 }}>
        <View style={{ flexDirection: 'row' }}>
          <Icon name='star-outline' color='grey' size={16} />
          <Text> {movieFull.vote_average}</Text>
          <Text style={{ marginLeft: 5 }}>
            {
              movieFull.genres.map(gen => gen.name).join(', ')
            }
          </Text>
        </View>

        <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>
          History
        </Text>
        <Text style={{ fontSize: 16 }}>
          {movieFull.overview}
        </Text>
        <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>
          Budget
        </Text>
        <Text style={{ fontSize: 18 }}>
          {currencyFormatter.format(movieFull.budget, { code: 'USD' })}
        </Text>

      </View>


    </>
  )
};

export default MovieDetails
