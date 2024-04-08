import React from "react";
import Filters from "../components/Filters";
const CatLitter = () => {
  return (
    <div className="brands-container">
      <div className="brand-header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXl4_cOLpO2t64FcbSS4ZRS5A9B1_kaCkQUpKfD2sMog&s"
          alt="CAT LITTER"
        />
        <h1>CAT LITTER</h1>
      </div>
      <p>
        Cat litter is an absorbent material used in cat litter boxes. It is
        designed to absorb moisture and neutralize odor. Cat litter is typically
        made from clay, silica gel, or biodegradable materials such as wood or
        paper. There are many different types of cat litter available, including
        clumping, non-clumping, scented, unscented, and natural varieties. Some
        cat litters are also designed to be flushable or compostable. Cat litter
        is an essential product for cat owners, as it helps to keep their homes
        clean and odor-free.
      </p>
      <Filters />
    </div>
  );
};

export default CatLitter;
