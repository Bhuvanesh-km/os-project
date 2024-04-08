import React from "react";

import Filters from "../components/Filters";

const Brita = () => {
  return (
    <div className="brands-container">
      <div className="brand-header">
        <img
          src="https://1000logos.net/wp-content/uploads/2021/03/Brita-logo.jpg"
          alt="BRITA"
        />
        <h1>BRITA</h1>
      </div>
      <p>
        BRITA is a German company that specializes in water filtration products.
        The company was founded in 1966 by Heinz Hankammer. The company's first
        product was a water filter jug, which was launched in 1970. Since then,
        BRITA has expanded its product range to include a wide range of water
        filtration products, including water filter bottles, water filter taps,
        and water filter cartridges. BRITA's products are designed to remove
        impurities from tap water, such as chlorine, limescale, and heavy
        metals, to improve the taste and quality of the water.
      </p>
      <Filters />
    </div>
  );
};

export default Brita;
