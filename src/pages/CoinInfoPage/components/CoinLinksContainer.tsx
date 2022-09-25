import React, { useEffect, useState } from "react";
import { IProps } from "../../../types/coinGecko.interface";
import "../../../css/CoinInfoPage.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

interface INameProp {
  name: string;
}

const CoinLinksContainer = ({ coinInfo }: IProps) => {
  const [selectedBtn, setSelectedBtn] = useState("");
  const [isSelected, setIsSelected] = useState(false);

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

  const StatsTopBtn = ({ name }: INameProp) => {
    return (
      <button
        onClick={() => {
          setSelectedBtn(name);
          setIsSelected((prev) => !prev);
        }}
        onBlur={() => setIsSelected(false)}
      >
        {name}{" "}
        <span>
          {selectedBtn === name && isSelected ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
        </span>
      </button>
    );
  };

  return (
    <div className="coinLinks__container">
      <div className="coinInfo__stats_containeR_btns">
        <StatsTopBtn name="Buy/Sell" />
        <StatsTopBtn name="Long/Short" />
        <StatsTopBtn name="EarnCrypto" />
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
