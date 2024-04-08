import React from "react";
import Filters from "../components/Filters";

const Laundry = () => {
  return (
    <div className="brands-container">
      <div className="brand-header">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl-r_PYMw3fNionS46ttI36dborXK66n-mcxpZLn09KA&s"
          alt="LAUNDRY"
        />
        <h1>LAUNDRY</h1>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet nulla
        eos delectus ullam quas adipisci hic velit iusto nisi sit natus
        quibusdam eligendi nam, omnis, nobis unde sint excepturi doloremque!
      </p>
      <Filters />
    </div>
  );
};

export default Laundry;
