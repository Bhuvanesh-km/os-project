import React from "react";
import Filters from "../components/Filters";
const Burtsbees = () => {
  return (
    <div className="brands-container">
      <div className="brand-header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5DdqxjtJSduqbiVPCChv1hcsA5lJQ4Z__mF23RxnzGw&s"
          alt="BURTSBEES"
        />
        <h1>BURTSBEES</h1>
      </div>
      <p>
        Burt's Bees is an American personal care products company that markets
        its products internationally. The company is a subsidiary of Clorox that
        describes itself as an "Earth friendly, Natural Personal Care Company"
        making products for personal care, health, beauty, and personal hygiene.
        Its products are distributed globally.
      </p>
      <Filters />
    </div>
  );
};

export default Burtsbees;
