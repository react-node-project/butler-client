import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
type Pokemon = {
  name: string;
  types: {
    slot: number;
    type: { name: string; url: string };
  }[];
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
      };
      dream_world: {
        front_default: string;
      };
    };
  };
};

export const pokemonApi = createApi({
  reducerPath: 'restaurantsRtk',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;
