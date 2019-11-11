import React from 'react';
import Layout from '../../components/Layout/Layout';
import Character from './Character';

const title = 'Character';

async function action({ params, fetch }) {
  const characterRes = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`, { method: 'GET' });
  const character = await characterRes.json();

  const lastEpisodesIds = character.episode
    .reverse()
    .slice(0, 3)
    .map(e => e.slice(e.lastIndexOf('/') + 1))
    .join(',');
  const lastEpisodes = await fetch(`https://rickandmortyapi.com/api/episode/${lastEpisodesIds}`, { method: 'GET' });
  const episodesJson = await lastEpisodes.json();
  const episodes = (Array.isArray(episodesJson) ? episodesJson : [episodesJson])
    .map(e => ({
      img: '',
      title: e.name,
      subtitle: e.episode,
      link: `/episodes/${e.id}`,
      kind: 'episode'
    }));

  const data = { character, episodes };
  
  return {
    chunks: ['character'],
    title: data.name,
    component: (
      <Layout>
        <Character title={title} data={data} />
      </Layout>
    ),
  };
}

export default action;
