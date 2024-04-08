import React from "react";
import Filters from "../components/Filters";

const HomeCare = () => {
  return (
    <div className="brands-container">
      <div className="brand-header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUUl_1IO6ndeifyFva0tP5kF5vtrRHJWgk7_ZTZdViRQ&s"
          alt="HOMECARE"
        />
        <h1>HOMECARE</h1>
      </div>
      <p>
        Homecare.co.uk is a website that provides home care reviews, listings,
        and job opportunities in the UK. It has over 9,000 providers, 18,000
        reviews, and 900 advertised jobs. It also helps home care providers
        build, promote, and maintain their reputation
      </p>
      <Filters />
    </div>
  );
};

export default HomeCare;
