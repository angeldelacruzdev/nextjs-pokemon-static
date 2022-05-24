import type { NextPage, GetStaticProps } from "next";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { pokeApi } from "../api";

import { Layout } from "../components/layouts";
import { PokemonList, SmallPokemon } from "../interfaces";
import { PokemonCard } from "../components/pokemon";

type Props = {
  pokemons: SmallPokemon[];
};

const HomePage: NextPage<Props> = ({ pokemons }) => {
  return (
    <Layout title="Listado de Pokémon">
      <Grid.Container gap={2} justify="flex-start">
        {pokemons.map((item) => (
          <PokemonCard key={item.id} pokemon={item} />
        ))}
      </Grid.Container>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const resp = await pokeApi.get<PokemonList>("/pokemon?limit=120&offset=0");

  const pokemons: SmallPokemon[] = resp.data.results.map((poken, i) => ({
    ...poken,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
      i + 1
    }.png`,
  }));

  return {
    props: {
      pokemons,
    },
  };
};

export default HomePage;
