import { ICoinGeckoService, ITrendingCoin } from "../types/coinGecko.interface";

/**
 * Handles calls to the CoinGecko API and decodes the responses
 */
class CoinGeckoService implements ICoinGeckoService {
  /**
   * Fetches the top trending coins from the CoinGecko API 
   * 
   * @returns Promise<ITrendingCoin[]>
   */
  getTrendingCoins = async () => {
    throw new Error("Method not implemented.");
  }
}

export default new CoinGeckoService();