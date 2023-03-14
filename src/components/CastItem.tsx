import React from 'react';
import { View, Text, Image } from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
  actor: Cast;
}

const CastItem = ({ actor }: Props) => {

  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10, marginRight: 10 }}>
      {
        actor.profile_path && (
          <Image
            source={{ uri }}
            style={{ width: 50, height: 50, borderRadius: 10, marginRight: 10 }}
          />
        )
      }
      <View>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          {actor.name}
        </Text>
        <Text style={{ fontSize: 16, opacity: 0.7 }}>
          {actor.character}
        </Text>
      </View>
    </View>
  )
}

export default CastItem
