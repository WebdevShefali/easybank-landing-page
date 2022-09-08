import React from "react";

const ServiceCard = (props) => {
  const { imgSrc, title, description } = props;
  return (
    <div>
      <div className="card serviceCard" style={{ width: "15rem" }}>
        <img src={imgSrc} className="card-img-top cardImg" alt="..." />
        <div className="card-body">
          <h5 className="card-title cardTitle">{title}</h5>
          <p className="card-text cardDes">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
