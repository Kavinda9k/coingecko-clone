import { IProps } from "../../../types/coinGecko.interface";
import "../../../css/CoinInfoPage.css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const CoinLinksContainer = ({ coinInfo }: IProps) => {
  const linksArr = coinInfo?.links && Object.keys(coinInfo?.links);
  const valuesArr = coinInfo?.links && Object.values(coinInfo?.links);

  const arr = [
    "Websites",
    "Explores",
    "Wallets",
    "Community",
    "SearchOn",
    "Source Code",
    "Tags",
  ];

  const renderNewLinksRows = arr.map((link, i) => {
    if (valuesArr && !valuesArr[i]) {
      return;
    }

    const websiteLinks = coinInfo?.links?.homepage.map((link) => {
      if (link) {
        return <h5>{link.replace("https://www.", "")}</h5>;
      }
    });

    const forumUrls = coinInfo?.links?.official_forum_url.map((link) => {
      if (link) {
        return <h5>{link.replace("https://", "")}</h5>;
      }
    });

    const blockchainSites = coinInfo?.links?.blockchain_site.map((link) => {
      if (link) {
        return <h5>{link.replace("https://", "").split("/")[0]}</h5>;
      }
    });

    const reposUrls = coinInfo?.links?.repos_url.github.map((link) => {
      if (link) {
        return <h5>{link.replace("https://", "")}</h5>;
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
          {link === "Websites" ? (
            websiteLinks
          ) : link === "SearchOn" ? (
            <h5 className="search__icon">
              <span>
                <SearchRoundedIcon />
              </span>
              Twitter
            </h5>
          ) : link === "Explores" ? (
            blockchainSites
          ) : link === "Community" ? (
            forumUrls
          ) : link === "Source Code" ? (
            reposUrls
          ) : link === "Tags" ? (
            tags
          ) : (
            websiteLinks
          )}
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
