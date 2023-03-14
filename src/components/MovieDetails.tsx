import React from 'react';
import { View, Text, FlatList } from 'react-native';
import currencyFormatter from 'currency-formatter';
import Icon from 'react-native-vector-icons/Ionicons';
import { Cast } from '../interfaces/creditsInterface';
import { MovieFull } from '../interfaces/movieInterface';
import CastItem from './CastItem';

interface Props {
  movieFull: MovieFull;
  cast: Cast[]
}

const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <>
      <View style={{ marginHorizontal: 20, marginBottom: 50 }}>
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

        <View style={{ marginTop: 10 }}>
          <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold' }}>
            Actors
          </Text>
          {/* <CastItem actor={cast[0]} /> */}
          <FlatList
            data={cast}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <CastItem actor={item} /> }
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>

      </View>


    </>
  )
};

export default MovieDetails
