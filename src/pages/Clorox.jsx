import React from "react";
import Filters from "../components/Filters";
const Clorox = () => {
  return (
    <div className="brands-container">
      <div className="brand-header">
        <img
          src="https://www.thecloroxcompany.com/wp-content/uploads/2022/06/clorox@4x.png?width=330&height=330&fit=crop"
          alt="CLOROX"
        />
        <h1>CLOROX</h1>
      </div>
      <p>
        Clorox is an American company that makes a wide range of consumer and
        professional products. The company was founded in 1913 and is based in
        Oakland, California. Clorox is best known for its bleach products, but
        it also makes a variety of other cleaning and household products,
        including disinfecting wipes, toilet bowl cleaners, and laundry
        detergents. Clorox products are sold in stores around the world and are
        used by millions of people every day to keep their homes clean and
        germ-free.
      </p>
      <Filters />
    </div>
  );
};

export default Clorox;
