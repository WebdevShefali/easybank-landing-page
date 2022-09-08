import React from "react";

const Home = (props) => {
  return (
    <div className="homeSection">
      <div className="introText deskH">
        <h1>Next generation digital banking</h1>
        <p>
          {" "}
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="btn" type="submit">
          Request Invite
        </button>
      </div>

      <div className="background">
        <img className="introImage " src={props.introImage} alt="" />
      </div>
      <div className="introText mobileH">
        <h1>Next generation digital banking</h1>
        <p>
          {" "}
          Take your financial life online. Your Easybank account will be a
          one-stop-shop for spending, saving, budgeting, investing, and much
          more.
        </p>
        <button className="btn" type="submit">
          Request Invite
        </button>
      </div>
    </div>
  );
};

export default Home;
