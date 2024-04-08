import React from "react";
import Filters from "../components/Filters";
const Glad = () => {
  return (
    <div className="brands-container">
      <div className="brand-header">
        <img src="https://cdn.worldvectorlogo.com/logos/glad.svg" alt="GLAD" />
        <h1>GLAD</h1>
      </div>
      <p>
        Glad is an American brand of household products. The brand is known for
        its plastic wrap, food storage containers, trash bags, and other
        household items. Glad products are designed to make everyday tasks
        easier and more convenient. The brand is owned by The Clorox Company, a
        multinational consumer goods company based in the United States.
      </p>
      <Filters />
    </div>
  );
};

export default Glad;
