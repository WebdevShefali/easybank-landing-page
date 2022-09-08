import React from "react";
import ArticleCard from "./ArticleCard";

const Articles = (props) => {
  const { confetti, currency, plane, restaurant } = props;
  return (
    <div className="articleSection">
      <div className="articleHead">
        <h1>Latest Articles</h1>
      </div>
      <div className="cards">
        <ArticleCard
          imgSrc={currency}
          title="Receive money in any currency with no fees"
          name="By Claire Robinson"
          description="  The world is getting smaller and we’re becoming more mobile. So why should you be 
  forced to only receive money in a single …"
        />
        <ArticleCard
          imgSrc={restaurant}
          title="Treat yourself without worrying about money"
          name="By Wilson Hutton"
          description="  Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …"
        />
        <ArticleCard
          imgSrc={plane}
          title="Take your Easybank card wherever you go"
          name="By Wilson Hutton"
          description=" We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …"
        />
        <ArticleCard
          imgSrc={confetti}
          title="Our invite-only Beta accounts are now live!"
          name="By Claire Robinson"
          description="After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ..."
        />
      </div>
    </div>
  );
};

export default Articles;
