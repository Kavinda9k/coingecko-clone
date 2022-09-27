import { IProps } from "../../../types/coinGecko.interface";

const CoinDescription = ({ coinInfo }: IProps) => {
  return (
    <div>
      <div>
        <h3>{coinInfo?.symbol.toLocaleUpperCase()} Price Today</h3>
        <p>
          {coinInfo?.name} price today is $
          {coinInfo?.market_data.current_price.usd} with a 24-hour trading
          volume of ${coinInfo?.market_data.total_volume.usd}. BTC price is up{" "}
          {coinInfo?.market_data.price_change_percentage_24h}% in the last 24
          hours. It has a circulating supply of 19 Million BTC coins and a total
          supply of 21 Million. If you are looking to buy or sell{" "}
          {coinInfo?.name}, <a>FTX.US</a> is currently the most active exchange.
        </p>
      </div>

      <div>
        <h3>What was the highest price for {coinInfo?.name}?</h3>
        <p>
          {coinInfo?.name} hit an all time high of $69,044.77 on Nov 10, 2021
          (10 months).
        </p>
      </div>

      <div>
        <h3>What was the lowest price for {coinInfo?.name}?</h3>
        <p>
          {coinInfo?.name} had an all time low of $67.81 on Jul 06, 2013 (about
          9 years).
        </p>
      </div>

      <div>
        <h3>What was the 24 hour trading volume of {coinInfo?.name}?</h3>
        <p>
          The 24 hour trading volume of {coinInfo?.name} is $35,036,222,324.
        </p>
      </div>

      <div>
        <h3>Where can {coinInfo?.name} be traded?</h3>
        <p>
          You can trade {coinInfo?.name} on <a>FTX.US</a>, <a>Currency.com</a>,
          and <a>Binance</a>. Popular trading pairs for {coinInfo?.name} in the
          market includes BTC/USD, BTC/CAD, BTC/AUD, BTC/GBP, BTC/INR, and
          BTC/PHP.
        </p>
      </div>

      <div>
        <h3>What is {coinInfo?.name}?</h3>
        <p>
          {coinInfo?.name} is a cryptocurrency. It is a decentralized digital
          currency that is based on cryptography. As such, it can operate
          without the need of a central authority like a central bank or a
          company. It is unlike government-issued or fiat currencies such as US
          Dollars or Euro in which they are controlled by the country’s central
          bank. The decentralized nature allows it to operate on a peer-to-peer
          network whereby users are able to send funds to each other without
          going through intermediaries...
        </p>
      </div>
      <button className="coinInfo__description__readMore_Btn">Read More</button>
    </div>
  );
};

export default CoinDescription;
