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

export interface ITrendingCoinData {
  item: {
    coin_id: number;
    id: string;
    large?: string;
    market_cap_rank?: number;
    name?: string;
    price_btc: number;
    score?: number;
    slug?: string;
    small: string;
    symbol?: string;
    thumb?: string;
    btnName?: string;
  };
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
    atl?: {
      usd: number;
    };
    atl_date?: {
      usd: string;
    };
    atl_change_percentage?: {
      usd: number;
    };
    ath?: {
      usd: number;
    };
    ath_date?: {
      usd: string;
    };
    ath_change_percentage?: {
      usd: number;
    };
    price_change_percentage_1h_in_currency: {
      usd: number;
    };
    price_change_24h_in_currency: {
      usd: number;
    };
    price_change_percentage_7d_in_currency: {
      usd: number;
    };
    price_change_percentage_14d_in_currency: {
      usd: number;
    };
    price_change_percentage_30d_in_currency: {
      usd: number;
    };
    price_change_percentage_60d_in_currency: {
      usd: number;
    };
    price_change_percentage_1y_in_currency: {
      usd: number;
    };
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
  tickers: [
    {
      base: string;
      target: string;
      market: {
        name: string;
        identifier: string;
        has_trading_incentive: boolean;
      };
      last: number;
      volume: number;
      converted_last: {
        btc: number;
        eth: number;
        usd: number;
      };
      converted_volume: {
        btc: number;
        eth: number;
        usd: number;
      };
      trust_score: string;
      bid_ask_spread_percentage: number;
      timestamp: string;
      last_traded_at: string;
      last_fetch_at: string;
      is_anomaly: boolean;
      is_stale: boolean;
      trade_url: string;
      coin_id: string;
    }
  ];
}

export type IChartCoinDataXY = [time: number, price: number];

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
  url?: string;
}

export interface IGlobalCoinData {
  data?: {
    active_cryptocurrencies: number;
    markets: number;
    total_market_cap: {
      usd: number;
    };
    total_volume: {
      usd: number;
    };
    market_cap_percentage: {
      btc: number;
    };
  };
}

export interface ICoinEcosytems {
  category_id: string;
  name: string;
}

export interface ICoinGeckoService {
  getAllCoinsdata(): Promise<IAllCoinsdata[]>;
  getTrendingCoins(): Promise<ITrendingCoinData[]>;
  getChartData(name: string): Promise<IChartCoinDataXY[]>;
  getCoinSpecificData(name?: string): Promise<ICoinSpecificData>;
  getGlobalCoinData(): Promise<IGlobalCoinData>;
  getCoinEcosytemData(): Promise<ICoinEcosytems[]>;
}

export interface INameProp {
  name: string;
}

export interface ICoinPriceHistory {
  priceData: IChartCoinDataXY[];
}

export interface IProps {
  children?: React.ReactNode;
  coinInfo?: ICoinSpecificData;
  coinName?: string;
  trendingCoins?: ITrendingCoinData[];
  allCoinsArr?: IAllCoinsdata[];
  coinEcosystems?: ICoinEcosytems[];
  marketTablesize?: string;
  size?: string;
  priceData?: IChartCoinDataXY[];
}
