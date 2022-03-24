import { fetchGraphql } from '@/lib/request';

export async function getGames(locale) {
  const GAME_QUERY = `query AllGames{
    allGames(locale: ${['th', 'en'].includes(locale) ? locale : 'en'}) {
      id
      name
      provider
    }
  }
  `;

  const gameList = await fetchGraphql({
    query: GAME_QUERY,
  });
  return gameList;
}
