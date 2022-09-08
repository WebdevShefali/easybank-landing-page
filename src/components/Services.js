import React from "react";
import ServiceCard from "./ServiceCard";

const Services = (props) => {
  const { api, budgeting, onboarding, online } = props;
  return (
    <div className="servicesSection">
      <div className="servicesHead">
        <h1>Why choose Easybank?</h1>
        <p>
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
      </div>
      <div className="cards">
        {" "}
        <ServiceCard
          imgSrc={online}
          title="Online Banking"
          description=" Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world."
        />
        <ServiceCard
          imgSrc={budgeting}
          title="Simple Budgeting"
          description=" See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits."
        />
        <ServiceCard
          imgSrc={onboarding}
          title="Fast Onboarding"
          description="We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away."
        />
        <ServiceCard
          imgSrc={api}
          title="Open API"
          description="Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier."
        />
      </div>
    </div>
  );
};

export default Services;
