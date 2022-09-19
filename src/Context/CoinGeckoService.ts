import { ICoinGeckoService } from "../types/coinGecko.interface";

class CoinGeckoService implements ICoinGeckoService {
  getAllCoinsdata = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=24h`
    );
    const responseJson = await response.json();
    return responseJson;

    throw new Error("Method not implemented.");
  };

  getTrendingCoins = async () => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/search/trending`
    );
    const responseJson = await response.json();
    return responseJson.coins;

    throw new Error("Method not implemented.");
  };

  getChartData = async (name: string = "bitcoin") => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=usd&days=360`
    );

    const responseJson = await response.json();
    return responseJson.prices;
  };

  getCoinSpecificData = async (coinName: string = "bitcoin") => {
    const response = await fetch(
      `https://api.coingecko.com/api/v3/coins/${coinName}`
    );
    const reponseJSON = await response.json();
    return reponseJSON;
  };
}

export default new CoinGeckoService();
