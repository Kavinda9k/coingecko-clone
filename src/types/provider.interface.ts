export type IChartCoinDataXY = [time: number, price: number];

export interface IProps {
  children?: React.ReactNode;
  coinInfo?: ICoinSpecificData;
  coinName?: string;
}

export interface INewsData {
  author?: string;
  title: string;
  urlToImage?: string;
  publishedAt?: string;
  description?: string;
  content?: string;
  source?: {
    id: string;
    name: string;
  };
}

export interface IAllCoinsdata {
  id: string;
  rank: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_percentage_24h: number;
}

export interface ICoinSpecificData {
  id: string;
  symbol: string;
  name: string;
  image: {
    small: string;
  };
  market_cap_rank: number;
  market_data: {
    current_price: {
      usd: number;
    };
    market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    high_24h?: {
      usd: number;
    };
    low_24h?: {
      usd: number;
    };
    price_change_percentage_24h: number;
    total_supply: number;
    max_supply?: number | null;
    circulating_supply?: number;
    market_cap_change_24h?: number;
    liquidity_score?: number;
  };
  categories?: string[];
  links?: {
    homepage: string[];
    blockchain_site: string[];
    official_forum_url: string[];
    chat_url: string[];
    twitter_screen_name: string;
    facebook_username: string;
    subreddit_url: string;
    repos_url: {
      github: string[];
    };
  };
}

export interface ITrendingCoinData {
  item: {
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
  };
}

export interface INewsData {
  author?: string;
  title: string;
  urlToImage?: string;
  publishedAt?: string;
  description?: string;
  content?: string;
  source?: {
    id: string;
    name: string;
  };
}
