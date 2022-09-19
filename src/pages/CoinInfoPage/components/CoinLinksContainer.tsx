import { IProps } from "../../../types/coinGecko.interface";
import "../../../css/CoinInfoPage.css";

const CoinLinksContainer = ({ coinInfo }: IProps) => {
  const linksArr = coinInfo?.links && Object.keys(coinInfo?.links);
  console.log(linksArr);

  const renderNewLinksRows = linksArr?.map((link, i) => {
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
      <div className="coinInfo__stats_containeR_InfoRow">
        <p>{link.replaceAll("_", " ")}</p>
        <div>
          {link === "homepage"
            ? websiteLinks
            : link === "blockchain_site"
            ? forumUrls
            : link === "repos_url"
            ? reposUrls
            : websiteLinks}
        </div>
      </div>
    );
  });

  return (
    <div className="coinInfo__stats_containeR">
      <div className="coinInfo__stats_containeR_btns">
        <p>Buy/Sell</p>
        <p>Long/Short</p>
        <p>Earn Crypto</p>
      </div>

      <div className="coinInfo__stats_containeR_Info">{renderNewLinksRows}</div>
    </div>
  );
};

export default CoinLinksContainer;
