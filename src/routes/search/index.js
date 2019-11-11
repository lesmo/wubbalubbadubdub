import React from 'react';
import Layout from '../../components/Layout/Layout';
import Search from './Search';

const title = 'Search';

async function action({ params, store, fetch }) {
  const [charactersRes, episodesRes, locationsRes] = await Promise.all([
    fetch(
      `https://rickandmortyapi.com/api/character?name=${params.q}`,
      { method: 'GET',  }
    ),
    fetch(
      `https://rickandmortyapi.com/api/episode?name=${params.q}`,
      { method: 'GET', }
    ),
    fetch(
      `https://rickandmortyapi.com/api/location?name=${params.q}`,
      { method: 'GET', }
    ),
  ]);

  const [characters, episodes, locations] = await Promise.all([
    charactersRes.json(),
    episodesRes.json(),
    locationsRes.json(),
  ]);

  const data = [
    ...(characters.results || []).map(c => ({
      title: c.name,
      subtitle: c.species,
      img: c.image,
      link: `/characters/${c.id}`,
      kind: 'character'
    })),
    ...(episodes.results || []).map(e => ({
      title: e.name,
      subtitle: e.epsiode,
      link: `/episodes/${e.id}`,
      kind: 'episode'
    })),
    ...(locations.results || []).map(l => ({
      title: l.name,
      subtitle: l.dimension,
      link: `/locations/${l.id}`,
      kind: 'location'
    }))
  ];

  return {
    chunks: ['search'],
    title,
    component: (
      <Layout>
        <Search title={title} data={data} />
      </Layout>
    ),
  };
}

export default action;
