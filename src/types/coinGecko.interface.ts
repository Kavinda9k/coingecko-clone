/*
Put your interfaces in a separate file, so that they can be imported without causing circular references.
*/

export interface ITrendingCoin {
  coin_id: number;
  id: string;
  large: string;
  market_cap_rank: number;
  name: string;
  price_btc: number;
  score: number;
  slug: string;
  small: string;
  symbol: string;
  thumb: string;
}

export interface ICoinGeckoService {
  getTrendingCoins(): Promise<ITrendingCoin[]>
}