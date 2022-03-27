import { fetchGraphql } from '@/lib/request';

export async function getGames(locale) {
  const GAME_QUERY = `query AllGames{
    allGames(locale: ${['th', 'en'].includes(locale) ? locale : 'en'}) {
      name
      provider
      id
      slug
      player
      description
    }
  }
  `;

  const gameList = await fetchGraphql({
    query: GAME_QUERY,
  });
  return gameList;
}

export async function getGameDetail(gameName) {
  const GAME_QUERY = `query GetGameDetail{
    game(filter: {slug: {eq: "${gameName}"}}) {
      name
      provider
      id
      slug
      player
      description
    }
  }
  `;

  console.log('GAME_QUERY', GAME_QUERY)

  const game = await fetchGraphql({
    query: GAME_QUERY,
  });
  return game;
}
