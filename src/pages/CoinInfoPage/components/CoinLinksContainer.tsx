import { IProps } from "../../../types/coinGecko.interface";
import "../../../css/CoinInfo.css";

const CoinLinksContainer = ({ coinInfo }: IProps) => {
  const websiteLinks = coinInfo?.links?.homepage.map((link) => {
    if (link) {
      return <h5>{link}</h5>;
    }
  });

  const forumUrls = coinInfo?.links?.official_forum_url.map((link) => {
    if (link) {
      return <h5>{link}</h5>;
    }
  });

  const reposUrls = coinInfo?.links?.repos_url.github.map((link) => {
    if (link) {
      return (
        <h5>
          <a href={link}>Github</a>
        </h5>
      );
    }
  });

  const tags = coinInfo?.categories?.map((link) => {
    if (link) {
      return <h5>{link}</h5>;
    }
  });

  return (
    <div className="coinInfo__stats_containeR">
      <div className="coinInfo__stats_containeR_btns">
        <p>Buy/Sell</p>
        <p>Long/Short</p>
        <p>Earn Crypto</p>
      </div>

      <div className="coinInfo__stats_containeR_Info">
        <div className="coinInfo__stats_containeR_InfoRow">
          <p>Website</p>
          <div>{websiteLinks}</div>
        </div>

        <div className="coinInfo__stats_containeR_InfoRow">
          <p>Explorers</p>
          <div>{forumUrls}</div>
        </div>

        <div className="coinInfo__stats_containeR_InfoRow">
          <p>Wallets</p>
          <div>
            <h5>Ledger</h5>
            <h5>Trezor</h5>
            <h5>Electrum</h5>
            <h5>Xdefi</h5>
          </div>
        </div>

        <div className="coinInfo__stats_containeR_InfoRow">
          <p>Community</p>
          <div>
            <h5>
              <a href={coinInfo?.links?.subreddit_url}>Reddit</a>
            </h5>
            <h5>
              <a
                href={`https://twitter.com/${coinInfo?.links?.twitter_screen_name}`}
              >
                Twitter
              </a>
            </h5>
            <h5>
              <a
                href={`https://facebook.com/${coinInfo?.links?.facebook_username}`}
              >
                Facebook
              </a>
            </h5>
            <h5>bitcointalk.org</h5>
          </div>
        </div>

        <div className="coinInfo__stats_containeR_InfoRow">
          <p>Search on</p>
          <div>
            <h5>
              <a href={`https://twitter.com/search?q=${coinInfo?.name}`}>
                Twitter
              </a>
            </h5>
          </div>
        </div>

        <div className="coinInfo__stats_containeR_InfoRow">
          <p>Source Code</p>
          <div>{reposUrls}</div>
        </div>

        <div className="coinInfo__stats_containeR_InfoRow">
          <p>Tags</p>
          <div>{tags}</div>
        </div>
      </div>
    </div>
  );
};

export default CoinLinksContainer;
