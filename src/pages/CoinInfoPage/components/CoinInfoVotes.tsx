import React from "react";

const CoinInfoVotes = () => {
  const [finshedVoting, setFinishedVoting] = React.useState(false);
  const [vote, setVote] = React.useState("");

  return (
    <>
      {!finshedVoting ? (
        <div className="survey__container">
          <div>
            <h5>How do you feel about Ethereum today?</h5>
            <p>Vote to see community's results!</p>
          </div>

          <div className="survey__containerBtns">
            <button
              onClick={() => {
                setVote("Good");
                setFinishedVoting(true);
              }}
            >
              <img src="https://static.coingecko.com/s/sentiment_positive-3c061f48ad805930938407b726cb987bc05ca809ea5f31818dbe848a5bbef24a.svg" />
              Good
            </button>
            <button
              onClick={() => {
                setVote("Bad");
                setFinishedVoting(true);
              }}
            >
              <img src="https://static.coingecko.com/s/sentiment_negative-166b904f7e3eac2bcf80349f2319d12d2099aa95a04d3f006b7726cd6e849195.svg" />
              Bad
            </button>
          </div>
        </div>
      ) : (
        <div className="survey__container__voted">
          <div className="survey__container__voted__left">
            <img
              src={
                vote === "Good"
                  ? `https://static.coingecko.com/s/sentiment_positive-3c061f48ad805930938407b726cb987bc05ca809ea5f31818dbe848a5bbef24a.svg`
                  : `https://static.coingecko.com/s/sentiment_negative-166b904f7e3eac2bcf80349f2319d12d2099aa95a04d3f006b7726cd6e849195.svg`
              }
            />
            <div>
              <p>You voted</p>
              <h5>{vote}</h5>
            </div>
          </div>

          <div className="votesPercentage__barContainer">
            <div className="votesPercentage__barContainer__top">
              <p>Good</p>
              <p>Bad</p>
            </div>
            <div className="votesPercentage__bar">
              <div
                className="votesPercentage__barGoodVotes"
                style={{
                  backgroundColor: "#15bb85",
                  height: 6,
                  width: "55%",
                }}
              ></div>
            </div>
            <div className="votesPercentage__barContainer__bottom">
              <p>55%</p>
              <p>45%</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinInfoVotes;
