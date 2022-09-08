import React from "react";

const ArticleCard = (props) => {
  const { imgSrc, title, description, name } = props;
  return (
    <div>
      <div className="card articleCard" style={{ width: "18rem" }}>
        <img src={imgSrc} className="card-img-top acardImg" alt="..." />
        <div className="card-body">
          <h6>{name}</h6>
          <h5 className="card-title acardTitle">{title}</h5>
          <p className="card-text acardDes">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
