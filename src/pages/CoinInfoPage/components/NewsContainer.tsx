import { useState, useEffect } from "react";
import { IProps, INewsData } from "../../../types/coinGecko.interface";
import "../../../css/NewsRow.css";
import "../../../css/CoinInfoPage.css";

const NewsContainer = ({ coinName }: IProps) => {
  const [newsArticles, setNewsArticles] = useState<INewsData[]>([]);
  const [currentPage, setCurrentPage] = useState(1)
  const [articleCount, setArticleCount] = useState(3);

  const getNews = async (coinName: string) => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${coinName}&sortBy=popularity&pageSize=${articleCount}&page=${currentPage}&apiKey=6cce3939c3ec495d9e1df9dd6df36c67`
    );

    const responseJson = await response.json();
    
    const articles = responseJson.articles
    setNewsArticles(newsArticles.concat(articles));
  };

  useEffect(() => {
    typeof coinName === "string" && getNews(coinName);
  }, [currentPage]);

  const renderNewsPosts = newsArticles?.map((newsPost) => (
    <div className="newscontainer">
      <img src={newsPost.urlToImage} />

      <div>
        <a href={newsPost.url} target="_blank">
          <h5>News</h5>
          <h4>{newsPost.title}</h4>
          <p>{newsPost.description}</p>

          <div className="newName">
            <h5>{newsPost.source?.name}</h5>
            <p>{newsPost.publishedAt}</p>
          </div>
        </a>
      </div>
    </div>
  ));

  return (
    <div className="newsRow__main">
      <h1>{coinName} Latest News</h1>
      <div className="newsRow__container">{renderNewsPosts}</div>
      <div className="newsRow__Btn">
        <button onClick={() => setCurrentPage(currentPage + 1)}>
          Read More
        </button>
      </div>
    </div>
  );
};

export default NewsContainer;
