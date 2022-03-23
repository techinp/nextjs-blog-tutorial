import { fetchGraphql } from '@/lib/request';

export async function getGames() {
  const GAME_QUERY = `query AllGames{
    allGames(locale: th) {
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
