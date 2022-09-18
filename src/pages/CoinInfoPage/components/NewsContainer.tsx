import { useState, useEffect } from "react";
import { IProps, INewsData } from "../../../types/provider.interface";
import "../../../css/NewsRow.css";
import "../../../css/CoinInfo.css";

const NewsContainer = ({ coinName }: IProps) => {
  const [newsArticles, setNewsArticles] = useState<INewsData[]>([
    {
      title: "",
    },
  ]);

  const getNews = async (coinName: string) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${coinName}&sortBy=popularity&pageSize=3&apiKey=6cce3939c3ec495d9e1df9dd6df36c67`
    );

    const responseJson = await response.json();

    setNewsArticles(responseJson.articles);
  };

  useEffect(() => {
    typeof coinName === "string" && getNews(coinName);
  }, []);

  const renderNewsPosts = newsArticles?.map((newsPost) => (
    <div className="newscontainer">
      <img src={newsPost.urlToImage} />
      <div>
        <div>
          <h5>News</h5>
          <h4>{newsPost.title}</h4>
          <p>{newsPost.description}</p>

          <div className="newName">
            <h5>{newsPost.source?.name}</h5>
            <p>{newsPost.publishedAt}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="newsRow__main">
      <h1>Latest News</h1>
      <div className="newsRow__container">{renderNewsPosts}</div>
    </div>
  );
};

export default NewsContainer;
