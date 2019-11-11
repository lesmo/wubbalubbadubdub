import React from 'react';
import Layout from '../../components/Layout/Layout';
import Episode from './Episode';

async function action({ params, fetch }) {
  const episodeRes = await fetch(`https://rickandmortyapi.com/api/episode/${params.id}`, { method: 'GET' });
  const episode = await episodeRes.json();

  const lastCharactersIds = episode.characters
    .map(e => e.slice(e.lastIndexOf('/') + 1))
    .join(',');
  const lastCharacters = await fetch(`https://rickandmortyapi.com/api/character/${lastCharactersIds}`, { method: 'GET' });
  const charactersJson = await lastCharacters.json();
  const characters = (Array.isArray(charactersJson) ? charactersJson : [charactersJson])
    .reverse()
    .map(e => ({
      img: e.image,
      title: e.name,
      subtitle: e.species,
      link: `/characters/${e.id}`,
      kind: 'character'
    }));

  const data = { episode, characters };

  return {
    chunks: ['character'],
    title: episode.name,
    component: (
      <Layout>
        <Episode title={episode.name} data={data} />
      </Layout>
    ),
  };
}

export default action;
