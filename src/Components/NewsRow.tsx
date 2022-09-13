import React from "react";
import "../css/NewsRow.css";

type InewsData = [
  {
    author?: string;
    title: string;
    urlToImage?: string;
    publishedAt?: string;
    description?: string;
    content?: string;
    source?: {
      id: string;
      name: string;
    };
  }
];

interface Iprops {
  NewsPosts: InewsData;
}

const NewsRow = ({ NewsPosts }: Iprops) => {
  const [newsPosts, setNewsPosts] = React.useState<InewsData>();

  React.useEffect(() => {
    setNewsPosts(NewsPosts);
  }, []);

  const renderNewsPosts = newsPosts?.map((newsPost) => (
    <div className="newscontainer">
      <img src={newsPost.urlToImage} />
      <div>
        <h5>News</h5>
        <h4>{newsPost.title}</h4>
        <p>{newsPost.description}</p>

        <div>
          <h5>{newsPost.source?.name}</h5>
          <p>{newsPost.publishedAt}</p>
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

export default NewsRow;
